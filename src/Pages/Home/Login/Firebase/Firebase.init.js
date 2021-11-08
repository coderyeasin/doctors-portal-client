import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";



const doctorsAuthorization = () => {
    initializeApp(firebaseConfig);
}

export default doctorsAuthorization;
