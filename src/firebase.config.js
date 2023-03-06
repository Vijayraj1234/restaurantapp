import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';    
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
        apiKey: "AIzaSyDTzUqBAneG44niPjBXvSdMmi0iCfM4L64",
        authDomain: "restaurantapp-f3d0d.firebaseapp.com",
        databaseURL: "https://restaurantapp-f3d0d-default-rtdb.firebaseio.com",
        projectId: "restaurantapp-f3d0d",
        storageBucket: "restaurantapp-f3d0d.appspot.com",
        messagingSenderId: "983080366736",
        appId: "1:983080366736:web:15144ecb1b4bdd4fd5de15"
    };


const app =getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage };
