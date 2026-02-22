"use client";

import Link from "next/link";

interface ArrowSlideButtonProps {
  text: string;
  link: string;
  className?: string;
}

export default function ArrowSlideButton({
  text,
  link,
  className
}: ArrowSlideButtonProps) {
  return (
    <Link
      href={link}
      aria-label={text}
      className={`${className} group relative inline-flex items-center justify-center w-full  px-6 py-4 rounded-full bg-[#B8D779] text-black hover:bg-black hover:text-white transition-all duration-300 overflow-hidden`}
      // className="group relative inline-flex items-center justify-center w-full  px-6 py-4 rounded-full bg-[#B8D779] text-black hover:bg-black hover:text-white transition-all duration-300 overflow-hidden"
    >
      {/* Arrow Circle */}
      <span className="absolute left-2 flex items-center justify-center w-12 h-12 rounded-full bg-black transition-all duration-500 ease-in-out 
                       group-hover:left-[calc(100%-3.5rem)] 
                       group-hover:bg-[#B8D779]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="18"
          viewBox="0 0 48 37"
          fill="none"
        >
          <path
            d="M2.5 15.9099C1.11929 15.9099 0 17.0292 0 18.4099C0 19.7906 1.11929 20.9099 2.5 20.9099V18.4099V15.9099ZM46.7177 20.1777C47.694 19.2014 47.694 17.6185 46.7177 16.6421L30.8078 0.732243C29.8315 -0.244068 28.2486 -0.244068 27.2723 0.732243C26.296 1.70855 26.296 3.29147 27.2723 4.26778L41.4144 18.4099L27.2723 32.552C26.296 33.5284 26.296 35.1113 27.2723 36.0876C28.2486 37.0639 29.8315 37.0639 30.8078 36.0876L46.7177 20.1777ZM2.5 18.4099V20.9099H44.95V18.4099V15.9099H2.5V18.4099Z"
            className="fill-white group-hover:fill-black transition-colors duration-300"
          />
        </svg>
      </span>

      {/* Button Text */}
      <span className="font-semibold text-lg transition-colors duration-300">
        {text}
      </span>
    </Link>
  );
}
