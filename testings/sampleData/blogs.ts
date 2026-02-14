// types/blogs.ts

export interface Blog {
  title: string;
  description: string;
  img: string;
  url: string;
}

export const blogsData: Blog[] = [
  {
    title: "Understanding Luxury Real Estate Trends in 2026",
    description:
      "Explore the emerging trends shaping luxury real estate markets, from smart homes to ultra-premium gated communities.",
    img: "/images/blog1.jpg",
    url: "/blogs/luxury-real-estate-trends-2026"
  },
  {
    title: "Why Gurgaon is the New Investment Hotspot",
    description:
      "A detailed look at why Gurgaon continues to attract HNIs and global investors in the premium property segment.",
    img: "/images/blog2.jpg",
    url: "/blogs/gurgaon-investment-hotspot"
  },
  {
    title: "Primary vs Secondary Market: Where Should You Invest?",
    description:
      "Comparing new launches and resale properties to help investors make data-driven decisions.",
    img: "/images/blog3.jpg",
    url: "/blogs/primary-vs-secondary-market"
  },
  {
    title: "How to Evaluate Rental Yield Before Buying",
    description:
      "Key financial metrics and practical strategies to assess rental income potential before closing a deal.",
    img: "/images/blog4.jpg",
    url: "/blogs/evaluate-rental-yield"
  },
  {
    title: "NRI Guide to Investing in Indian Real Estate",
    description:
      "Everything NRIs need to know about documentation, compliance, taxation, and property management.",
    img: "/images/blog5.jpg",
    url: "/blogs/nri-real-estate-guide"
  },
  {
    title: "Checklist for High-Value Property Transactions",
    description:
      "A complete due diligence checklist to ensure smooth and secure high-ticket property transactions.",
    img: "/images/blog6.jpg",
    url: "/blogs/high-value-transaction-checklist"
  },
  {
    title: "How Smart Homes Are Changing Luxury Living",
    description:
      "Discover how automation, AI security, and sustainable tech are redefining premium housing experiences.",
    img: "/images/blog7.jpg",
    url: "/blogs/smart-homes-luxury-living"
  },
  {
    title: "Top Mistakes to Avoid in Real Estate Investment",
    description:
      "Avoid costly errors with these expert-backed insights on risk management and property evaluation.",
    img: "/images/blog8.jpg",
    url: "/blogs/real-estate-investment-mistakes"
  }
];
