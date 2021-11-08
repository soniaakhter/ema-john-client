import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/*
 steps for Authetications
 --------------------------------

  Initial Setup 
  1. firebase: create project
  2. create web app
  3. get configuration
  4. initialize firebase
  5. enable auth method
_____________________________

step-2 : Setup component
1. create login component
2. create register component
3. create route for login and register

_________________________________

step-3: Set auth system
1. setup signin method
2. setup signout method
3. user state
4. special observer

________________________________

setp-4: Create auth context hook (useAuth)
1. create a auth context
2. Create context provider
3. set context provider context value
4. use Auth provider
5. create useAuth hook

___________________________________

step-5: Create private route
1. create private route
2. set private route


 */