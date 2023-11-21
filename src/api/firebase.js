import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTWKdsKMMHSS5mwc10Wukik9IHllynKLY",
  authDomain: "linkedin-clone-15bad.firebaseapp.com",
  projectId: "linkedin-clone-15bad",
  storageBucket: "linkedin-clone-15bad.appspot.com",
  messagingSenderId: "608765395060",
  appId: "1:608765395060:web:c2d1ddde36060c177d5121",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);


export { db, auth };
