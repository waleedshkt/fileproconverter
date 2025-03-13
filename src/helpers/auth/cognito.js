import { CognitoIdentityClient, GetIdCommand, GetCredentialsForIdentityCommand } from "@aws-sdk/client-cognito-identity";
import { awsAuthCreds, firebaseAuthToken } from "../../globalStates"; 

const cognitoClient = new CognitoIdentityClient({ region: process.env.GATSBY_AWS_REGION });

export const getAuthCredentials = (includeIdentityId = false) => {
    
    return new Promise(async (resolve, reject) => {
        try {

            if(!awsAuthCreds?.get() || (awsAuthCreds?.credentials?.Expiration?.get().getTime() - new Date().getTime()) <= 60000) {
            
                const res = await cognitoClient.send(new GetIdCommand({
                    IdentityPoolId: process.env.GATSBY_IDENTITY_POOL_ID,
                    Logins: {
                        [process.env.GATSBY_FIREBASE_COGNITO_LOGIN_KEY]: firebaseAuthToken?.get()
                    }
                }));

                if(!res) {
                    throw Error("Error in getting identity id: \n", res);
                }else {
                    const credentials = await cognitoClient.send(new GetCredentialsForIdentityCommand({
                        IdentityId: res.IdentityId,
                        Logins: {
                            [process.env.GATSBY_FIREBASE_COGNITO_LOGIN_KEY]: firebaseAuthToken?.get()
                        }
                    }));

                    if(!credentials) {
                        throw Error("Error in getting credentials:\n", credentials);
                    }else {
                        let creds = { credentials: {...credentials.Credentials}, identityId: res.IdentityId };
                        awsAuthCreds.set(creds);
                        
                        resolve(includeIdentityId ? creds : creds.credentials);
                        
                        creds = null;
                    }
                }
            }else {
                resolve(includeIdentityId ? {credentials: {...awsAuthCreds?.credentials?.get()}, identityId: awsAuthCreds?.identityId?.get()} : {...awsAuthCreds?.credentials?.get()});
            }

        }catch(e) {
            console.error(e?.message || e);
            reject(e);
        }
    });
};
