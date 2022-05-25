// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGc2LUXD8BbkaVRFdrirw0fDoaO6FVdL0",
  authDomain: "killroy-conference.firebaseapp.com",
  projectId: "killroy-conference",
  storageBucket: "killroy-conference.appspot.com",
  messagingSenderId: "833482081422",
  appId: "1:833482081422:web:a5f8109331a9b2d74835df",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCAhm2rG94Cm_-5z6iQKCfQ8Gkukb8K0_U",
//     authDomain: "legendao-c6a20.firebaseapp.com",
//     projectId: "legendao-c6a20",
//     storageBucket: "legendao-c6a20.appspot.com",
//     messagingSenderId: "961626033740",
//     appId: "1:961626033740:web:b4edf7ce90d79865bcaee9",
//     measurementId: "G-CNCWNDCLJM"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db };
