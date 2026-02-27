// lib/fetchPostByTitle.ts
import { collection, query, where, getDocs } from "firebase/firestore";


import { Timestamp } from "firebase/firestore";
import { db } from "./firebaseconfig";

export interface Post {
  id: string; // Firestore document ID
  heading: string;
  coverImage: string ; // File if user uploads, string for URL
  content: string; // HTML content
  tags: string[];
  createdAt: Timestamp; // Firestore timestamp
  updatedAt?: Timestamp; // Firestore timestamp
  status: "active" | "archived";
  interactions: {
    views: number;
    like: number;
    share: number;
  };
}
/**
 * Fetch a post from Firestore by its title
 * @param title - The heading/title of the post
 */
export async function fetchPostByTitle(title: string): Promise<Post | null> {
  try {
    const q = query(
  collection(db, "posts"),
  where("heading", "==", title),
  where("status", "==", "active")
);
    const snapshot = await getDocs(q);
    console.log(snapshot);

    if (!snapshot.empty) {
      const docData = snapshot.docs[0].data() as Post;
      return { ...docData, id: snapshot.docs[0].id };
    }

    return null;
  } catch (error) {
    console.error("Error fetching post by title:", error);
    return null;
  }
}
