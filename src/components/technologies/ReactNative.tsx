import React from 'react';

export default function ReactNative({ className = '', ...props }: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      className={`transition-all duration-300 ${className}`}
      {...props}
    >
      <defs>
        <linearGradient id="rn-grad" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#5EEAD4" />
          <stop offset="50%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
        <filter id="rn-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
        </filter>
      </defs>
      <g filter="url(#rn-glow)" opacity="0.4" stroke="url(#rn-grad)" strokeWidth="1.2">
        <circle cx="12" cy="12" r="2.5" fill="url(#rn-grad)" stroke="none" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(150 12 12)" />
      </g>
      <g stroke="url(#rn-grad)" strokeWidth="1.2" strokeLinecap="round">
        <circle cx="12" cy="12" r="2.5" fill="url(#rn-grad)" stroke="none" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(150 12 12)" />
      </g>
    </svg>
  );
}
