// types/testimonials.ts

export type TestimonialType = "text" | "video";

export interface Testimonial {
  id: number;
  type: TestimonialType;
  name: string;
  role: string;
  company: string;
  message: string;
  avatar: string;      // small circular image
  videoUrl?: string;   // only for video type
  thumbnail?: string;  // preview image for video
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    type: "text",
    name: "Anant Goel",
    role: "Founder",
    company: "Shadolk",
    message:
      "It was great working with everyone. Their professionalism and attention to detail made the entire experience seamless.",
    avatar: "/images/sampleclient.png"
  },
  {
    id: 2,
    type: "video",
    name: "Sara James",
    role: "Founder",
    company: "Dubai International",
    message:
      "Outstanding advisory and execution. Highly recommend their premium services.",
    avatar: "/images/sampleclient.png",
    videoUrl: "https://www.youtube.com/watch?v=2L6gsn7rGqI&list=RD2L6gsn7rGqI&start_radio=1",
    thumbnail: "/images/video-thumb1.jpg"
  },
  {
    id: 3,
    type: "text",
    name: "Rohan Mehta",
    role: "Managing Director",
    company: "UrbanEdge Realty",
    message:
      "Smooth transaction process with clear communication at every stage.",
    avatar: "/images/sampleclient.png"
  },
  {
    id: 4,
    type: "video",
    name: "Emily Carter",
    role: "Investor",
    company: "Global Assets Ltd.",
    message:
      "Transparent, reliable, and result-oriented team.",
    avatar: "/images/sampleclient.png",
    videoUrl: "https://www.youtube.com/watch?v=2L6gsn7rGqI&list=RD2L6gsn7rGqI&start_radio=1",
    thumbnail: "/images/video-thumb2.jpg"
  },
  {
    id: 5,
    type: "text",
    name: "Anant Goel",
    role: "Founder",
    company: "Shadolk",
    message:
      "Exceptional market knowledge and structured advisory approach.",
    avatar: "/images/sampleclient.png"
  },
  {
    id: 6,
    type: "video",
    name: "Sara James",
    role: "Founder",
    company: "Dubai International",
    message:
      "A premium experience from start to finish.",
    avatar: "/images/sampleclient.png",
    videoUrl: "https://www.youtube.com/watch?v=2L6gsn7rGqI&list=RD2L6gsn7rGqI&start_radio=1",
    thumbnail: "/images/video-thumb3.jpg"
  }
];
