// lib/fetchRecentPosts.ts
import { collection, query, orderBy, limit, getDocs, where } from "firebase/firestore";
import { db } from "./firebaseconfig";
import { Post } from "./fetchPostByTitle";

/**
 * Fetch 3 most recent posts sorted by createdAt descending
 */
export async function fetchRecentPosts(): Promise<Post[]> {
  try {
    const postsRef = collection(db, "posts");
    const q = query(
  postsRef,
  where("status", "==", "active"),
  orderBy("createdAt", "desc"),
  limit(3)
);
    const snapshot = await getDocs(q);

    const posts: Post[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Post, "id">),
    }));

    return posts;
  } catch (err) {
    console.error("Error fetching recent posts:", err);
    return [];
  }
}
