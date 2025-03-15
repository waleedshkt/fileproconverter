import { useEffect, useContext } from "react";
import { useHookstate as useState } from "@hookstate/core";
import { isAuth, subscription, misc } from "../globalStates";
import { AuthContext } from "../helpers/auth/firebase/user";

const useAuth = () => {
    const { isLoggedIn } = useContext(AuthContext);
    const isAuth_ = useState(isAuth);
    const { isLoading } = useState(misc);
    const initialLoad = useState(false);

    useEffect(() => {
        const unsub = isLoggedIn(async (user) => {
          try {
            
            if(!initialLoad?.get()) {
  
              if(user) {
  
                const { photoURL } = user;
  
                // fetch params from photo url
                let params = new URL(photoURL).searchParams() || {};
                if(Object.keys(params)) {
                    // set params 
                }
  
                isAuth_.set(true);
  
                isLoading.set(false);
                initialLoad?.set(true);
                
              }else {
                isLoading.set(false);
                initialLoad?.set(true);

              }
              
            }
          }catch(e) {
            console.error(e);
          }
        });
  
      return () => {
        unsub();
      };
    }, [initialLoad?.get()]);

    return JSON.parse(JSON.stringify(initialLoad?.get()));
};

export default useAuth;