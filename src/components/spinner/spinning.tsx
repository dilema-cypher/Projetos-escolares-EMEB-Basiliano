import { useState } from "react";
export default function Spinner() {

  return (
    <div 
      className="w-full h-full flex items-center justify-center"
      role="status" 
      aria-label="Carregando"
    >
      <svg
        className="animate-spin w-full h-full"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="stroke-gray-300"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
        />
        <circle
          className="stroke-green-500"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="90"
          strokeDashoffset="60"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="60;-120"
            dur="1.2s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}
