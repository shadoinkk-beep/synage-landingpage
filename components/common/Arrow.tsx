import React from "react";

interface ArrowProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const Arrow: React.FC<ArrowProps> = ({ className, ...props }) => {
  return (
    <svg
      viewBox="0 0 73 45"
      fill="black"
      color="black"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M3 19.0918C1.34315 19.0918 0 20.4349 0 22.0918C0 23.7487 1.34315 25.0918 3 25.0918V22.0918V19.0918ZM72.1213 24.2131C73.2929 23.0415 73.2929 21.142 72.1213 19.9705L53.0294 0.878593C51.8579 -0.29298 49.9584 -0.29298 48.7868 0.878593C47.6152 2.05017 47.6152 3.94966 48.7868 5.12123L65.7574 22.0918L48.7868 39.0624C47.6152 40.2339 47.6152 42.1334 48.7868 43.305C49.9584 44.4766 51.8579 44.4766 53.0294 43.305L72.1213 24.2131ZM3 22.0918V25.0918H70V22.0918V19.0918H3V22.0918Z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
};

export default Arrow;
