import React from "react";

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
  className?: string;
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 24,
  color = "text-white",
  className = "",
  text = "",
}) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        className={`animate-spin ${color}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        style={{ width: size, height: size }}
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 1016 0 8 8 0 00-16 0zm10.293-3.293a1 1 0 00-1.414 0L8.586 12l4.293 4.293a1 1 0 001.414-1.414L11.414 12l2.879-2.879a1 1 0 000-1.414z"
        />
      </svg>

      {text && <span className={`ml-2 ${color}`}>{text}</span>}
    </div>
  );
};

export default LoadingSpinner;
