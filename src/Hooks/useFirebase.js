import doctorsAuthorization from "../Pages/Home/Login/Firebase/Firebase.init";
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, updateProfile, getIdToken, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";



//intialize Firebase app
doctorsAuthorization();

const useFirebase = () => {

    //////////////STATES
    
    const [user, setUser] = useState({}) //login user set korar jonno //user k object hisbe return kora hoiche tai default hisebe empty object use hocce

    const [isLoading, setIsLoading] = useState(true); //user true hole set spinner korar jonno //user zodi register/login hoy tahole tar moddhoborti somoy dhorar jonno boolean type use kore

    const [authError, setAuthError] = useState('') //zehetu text hisebe error dibe tai eti empty string 

    //for admin load n chk
    const [admin, setAdmin] = useState(false);

    const [token, setToken] = useState('')

    /////////////////////

    const auth = getAuth(); //if use in multiple function then must global it
    const googleProvider = new GoogleAuthProvider();

    //start for email
    //newUser
    //Register

    const handleRegister = (email, pass, name, history) => {

        setIsLoading(true) //zokhon user hit korbe tokhon eti true hoye zabe

        createUserWithEmailAndPassword(auth, email, pass)
        .then((result) => {
            setAuthError(''); //zodi error state set koro tahole must true value clr korte hoy nahole eti error dibe
            const newUser = { email, displayName: name };
            setUser(newUser);

            //save user to the database
            saveUser(email, name, 'POST');

            //send name to firebase after creation
                //update profile
            
                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                    
                  }).catch((error) => {
                   
                  });
            
            history.replace('/');
        })
        .catch((error) => {
            setAuthError( error.message);
        })
        .finally(() => setIsLoading(false)) //error hok ba user pak then eti false hoye zabe dhore rakhbe na
    }
///////////////////////////////////
    
    //existing user
    //when user login
    const loginUser = (email, pass, location, history) => {
        setIsLoading(true) //zokhon user hit korbe tokhon eti true hoye zabe
        signInWithEmailAndPassword(auth, email, pass)
            .then((result) => {
            
                //after login reload
                const destination = location?.state?.from || '/'
                history.replace(destination);

            setAuthError('');
        })
        .catch((error) => {
            setAuthError( error.message);
        })
        .finally(() => setIsLoading(false)) //error hok ba user pak then eti false hoye zabe dhore rakhbe na
    }

 ////////////////////////////
    
    //start for google---
    const signIWithGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user
                //save user to the database
                saveUser(user.email, user.displayName, 'PUT');
                
              setAuthError('')
                // console.log(result.user);

            //after login redirect
               const destination = location?.state?.from || '/'
               history.replace(destination);
 
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

////////////////////////
    //users activity chking with this
    //user observe with onAuthState
    //unsubscribe for user performance
    useEffect(() => {
        const unsubscribed =  onAuthStateChanged(auth, (user) => {
         if (user) {
             setUser(user)

             //chk with JWT tokens---for secure user --- admin
             getIdToken(user)
                 .then(idToken => {
                // console.log(idToken);
                setToken(idToken);
            })
         } else {
           setUser({})
         }
            setIsLoading(false)
        });
         return () => unsubscribed;
     }, [auth])
 
//////////////////////////    
        //ADMIN
   
    useEffect(() => {
        fetch(`https://radiant-hamlet-62916.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
        .then(data => setAdmin(data.admin))
    }, [user.email]) //dependancy --user holei chk korbe se admin kina
    
  ///////////////////




///////////////////////////////    
//logout
    const logOUt = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
            
            })
            .catch((error) => {
             
            })
        .finally(() => setIsLoading(false))
    }
    
    //save user
    // const saveUser = (email, displayName) => { // zodi ekti login system er jonno use kori
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName } //zehetu property name same tai same likhlei hobe
        fetch('https://radiant-hamlet-62916.herokuapp.com/users', {
            // method: 'POST',
            method: method, //multiple method combined kore use hoiche tai agei method bole dewa hoiche
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }



    
    return {
        user,
        admin,
        isLoading,
        authError,
        token,
        logOUt,
        handleRegister,
        loginUser,
        signIWithGoogle
    }

}
export default useFirebase;