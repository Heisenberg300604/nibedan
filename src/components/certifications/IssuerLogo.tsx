import AWS from '@/components/technologies/AWS';
import { type CertificationIssuer } from '@/config/Certifications';
import React from 'react';

/**
 * HackerRank's mark: the green hexagon with the "h." glyph. Drawn inline so it
 * matches the sizing of the other issuer logos and needs no extra asset.
 */
function HackerRank() {
  return (
    <svg viewBox="0 0 128 128" aria-hidden="true">
      <path fill="#2EC866" d="M64 2.4 116.5 32v64L64 125.6 11.5 96V32Z" />
      <path fill="#fff" d="M53 34.5h7v25.9h8V34.5h7v59h-7V67.2h-8v26.3h-7z" />
    </svg>
  );
}

/** Each issuer keeps its own chip colour so the logo stays legible in both themes. */
const issuerLogos: Record<
  CertificationIssuer,
  { Logo: () => React.JSX.Element; chip: string }
> = {
  // AWS squid ink — the wordmark is white, so the chip must stay dark.
  aws: { Logo: AWS, chip: 'bg-[#232f3e]' },
  hackerrank: { Logo: HackerRank, chip: 'bg-[#1c2530]' },
};

interface IssuerLogoProps {
  issuer: CertificationIssuer;
  className?: string;
}

export default function IssuerLogo({
  issuer,
  className = 'size-9',
}: IssuerLogoProps) {
  const { Logo, chip } = issuerLogos[issuer];

  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-md p-1.5 ${chip} ${className}`}
    >
      <Logo />
    </span>
  );
}
