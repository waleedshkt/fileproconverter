import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
    getAuth, onAuthStateChanged, signOut,
    createUserWithEmailAndPassword, fetchSignInMethodsForEmail, signInWithEmailAndPassword,
    sendPasswordResetEmail, applyActionCode, verifyPasswordResetCode, confirmPasswordReset,
    updatePassword, getIdToken, deleteUser, EmailAuthProvider, sendEmailVerification,
    updateProfile, reload, reauthenticateWithCredential

} from 'firebase/auth';   

export default class Auth {
    constructor(config) { // using DEFAULT for user
        this.app = getApps().length ? getApp() : initializeApp(config);
        this.auth = getAuth(this.app);
        
        this.confirmationResult = null;
    }

    //Firebase Funcs
    registerWithEmail = (email, password) => createUserWithEmailAndPassword(this.auth, email, password);
    isAlreadyRegisteredWithEmail = email => fetchSignInMethodsForEmail(this.auth, email);
    signInWithEmail = (email, password) => signInWithEmailAndPassword(this.auth, email, password);

    signOut = () => signOut(this.auth);
    
    //rememberMe = (yes) => this.auth.setPersistence(yes ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION);
    
    resetPasswordWithEmail = (email) => sendPasswordResetEmail(this.auth, email, { url: process.env.GATSBY_FIREBASE_AUTH_CONTINUE_URL });
    applyEmailVerifyActionCode = code => applyActionCode(this.auth, code);
    verifyPasswordResetCode = code => verifyPasswordResetCode(this.auth, code);
    confirmPasswordReset = (code, newPass) => confirmPasswordReset(this.auth, code, newPass);
    
    isLoggedIn = callbackFunc => onAuthStateChanged(this.auth, callbackFunc);

    updateUserProfile = (user = null, profileParams) => updateProfile(user || this.auth.currentUser, profileParams);
    sendEmailVerificationLink = (user = null) => sendEmailVerification(user || this.auth.currentUser, { url: process.env.GATSBY_FIREBASE_AUTH_CONTINUE_URL });
    
    
    getUserID = () => this.auth.currentUser.uid;
    getCurrentUserIdToken = async () => { 
        try {
            await reload(this.auth.currentUser);
            const token = await getIdToken(this.auth.currentUser);

            if(!token) {
                throw token;
            }else {
                return token;
            }
        }catch(e) {
            console.error(e);
        }
    };

    getCurrentUser = async () => { 
        try {
            await reload(this.auth.currentUser);
            return this.auth.currentUser;
        }catch(e) {
            console.error(e);
        }
    };
    
    deleteUser = async (password) => {
        try {
            const cred = EmailAuthProvider.credential(this.auth.currentUser.email, password);
            const res = await reauthenticateWithCredential(this.auth.currentUser, cred);
            await deleteUser(this.auth.currentUser);
        }catch(e) {
            console.error(e);
        }
        
    };

    changePassword = async (oldPassword, newPassword) => {
        try {
            const cred = EmailAuthProvider.credential(this.auth.currentUser.email, oldPassword);
            const res = await reauthenticateWithCredential(this.auth.currentUser, cred);
            await updatePassword(this.auth.currentUser, newPassword);
        }catch(e) {
            console.error(e);
        }
    };

}