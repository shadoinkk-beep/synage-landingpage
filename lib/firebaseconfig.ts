// lib/firebaseConfig.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// ✅ Initialize Firebase only once (works with Next.js SSR)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// ✅ Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


// if (process.env.NODE_ENV === "development") {
//   import("firebase/auth").then(({ connectAuthEmulator }) =>
//     connectAuthEmulator(auth, "http://127.0.0.1:9099")
//   );
//   import("firebase/firestore").then(({ connectFirestoreEmulator }) =>
//     connectFirestoreEmulator(db, "127.0.0.1", 8080)
//   );
//   import("firebase/storage").then(({ connectStorageEmulator }) =>
//     connectStorageEmulator(storage, "127.0.0.1", 9199)
//   );
// }
