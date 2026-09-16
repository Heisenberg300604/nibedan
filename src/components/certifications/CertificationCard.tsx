'use client';

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { type Certification } from '@/config/Certifications';
import Image from 'next/image';
import React, { useState } from 'react';

import IssuerLogo from './IssuerLogo';

/** "September 2026" — the granularity the credential is actually quoted at. */
function formatMonth(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    timeZone: 'UTC',
  });
}

interface CertificationCardProps {
  certification: Certification;
}

export function CertificationCard({ certification }: CertificationCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="group border-border bg-card relative flex flex-col gap-4 rounded-lg border p-6 transition-all duration-300 hover:border-border/80 hover:shadow-md hover:shadow-black/10 sm:flex-row dark:hover:shadow-black/30">
        {/* Visual: the issuer's official badge where there is one, otherwise a
            thumbnail of the certificate itself. Both open the full certificate. */}
        <div className="flex shrink-0 justify-center sm:block">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={`View ${certification.title} certificate`}
            className={`focus-visible:ring-ring relative cursor-pointer overflow-hidden rounded-md transition-transform duration-300 group-hover:scale-[1.03] focus-visible:ring-2 focus-visible:outline-none ${
              certification.badge
                ? 'size-36'
                : 'border-border/60 bg-muted/20 aspect-[4/3] w-52 border'
            }`}
          >
            <Image
              src={certification.badge ?? certification.image}
              alt={
                certification.badge
                  ? `${certification.title} badge`
                  : `${certification.title} certificate`
              }
              fill
              sizes={certification.badge ? '144px' : '208px'}
              className="object-contain"
            />
          </button>
        </div>

        <div className="flex min-w-0 flex-col gap-3">
          {/* Header */}
          <div className="flex items-start gap-3">
            {!certification.badge && (
              <IssuerLogo issuer={certification.issuerKey} />
            )}
            <div className="flex min-w-0 flex-col gap-0.5">
              <h3 className="text-lg leading-tight font-bold">
                {certification.title}
              </h3>
              <p className="text-secondary text-sm">{certification.issuer}</p>
              <p className="text-secondary text-xs">
                Issued{' '}
                <time dateTime={certification.issued}>
                  {formatMonth(certification.issued)}
                </time>
                {certification.expires && (
                  <>
                    {' · Expires '}
                    <time dateTime={certification.expires}>
                      {formatMonth(certification.expires)}
                    </time>
                  </>
                )}
              </p>
            </div>
          </div>

          <p className="text-secondary text-sm leading-relaxed">
            {certification.description}
          </p>

          {/* Credential ID */}
          <p className="text-secondary text-xs break-all">
            Credential ID{' '}
            <span className="font-mono">{certification.credentialId}</span>
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-1.5">
            {certification.skills.map((skill) => (
              <span
                key={skill}
                className="border-border bg-secondary/20 rounded-md border px-2 py-0.5 text-xs text-neutral-600 dark:text-neutral-400"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            <a
              href={certification.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-foreground text-xs underline underline-offset-4 transition-colors"
            >
              Verify credential →
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="text-secondary hover:text-foreground cursor-pointer text-xs underline underline-offset-4 transition-colors"
            >
              View certificate →
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen viewer */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-background/95 max-h-[90vh] w-full max-w-[90vw] border-0 p-0 backdrop-blur-sm sm:max-w-3xl">
          <DialogTitle className="sr-only">{certification.title}</DialogTitle>
          <div className="flex h-[50vh] items-center justify-center p-4 sm:h-[60vh]">
            <div className="relative h-full w-full">
              <Image
                src={certification.image}
                alt={`${certification.title} certificate`}
                fill
                sizes="90vw"
                className="rounded-lg object-contain"
              />
            </div>
          </div>
          <div className="space-y-1 border-t px-6 pt-3 pb-6">
            <h3 className="text-lg font-semibold">{certification.title}</h3>
            <p className="text-muted-foreground text-sm">
              {certification.issuer}
            </p>
            <p className="text-muted-foreground text-xs break-all">
              Credential ID {certification.credentialId}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
