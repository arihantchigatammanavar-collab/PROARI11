import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCQbmm6iGsQifTjnngg_0WX0xvgxF_Zfak",
  authDomain: "buildify-e3ce5.firebaseapp.com",
  projectId: "buildify-e3ce5",
  storageBucket: "buildify-e3ce5.firebasestorage.app",
  messagingSenderId: "445128235086",
  appId: "1:445128235086:web:c3d86b223705819a740b1f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);