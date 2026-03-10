import { Timestamp } from "firebase/firestore";

export function formatFirebaseDate(timestamp: Timestamp): string {
  if (!timestamp) return "";

  // Convert to JS Date
  const date = timestamp.toDate();

  // Format options
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short", // "Sep"
    year: "numeric",
  };

  // Example output: "22 Sep 2025"
  return date.toLocaleDateString("en-GB", options);
}
