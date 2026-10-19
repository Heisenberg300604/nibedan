import BookingEmbed from '@/components/booking/BookingEmbed';
import Container from '@/components/common/Container';
import { PageJsonLd } from '@/components/seo/JsonLd';
import { Separator } from '@/components/ui/separator';
import { bookingConfig } from '@/config/Booking';
import {
  generateMetadata as getMetadata,
  getPageMetadata,
  siteConfig,
} from '@/config/Meta';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = getMetadata('/book');

export default function BookPage() {
  return (
    <Container className="py-16">
      <PageJsonLd
        path="/book"
        name="Book a call"
        description={getPageMetadata('/book').description}
      />
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            {bookingConfig.title}
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            {bookingConfig.description}
          </p>
        </div>
        <Separator />

        <BookingEmbed />

        <p className="text-muted-foreground text-center text-sm">
          {bookingConfig.fallbackText}{' '}
          <a
            href={bookingConfig.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4"
          >
            {bookingConfig.fallbackLinkText}
          </a>{' '}
          {bookingConfig.emailText}{' '}
          <a
            href={`mailto:${siteConfig.author.email}`}
            className="text-foreground underline underline-offset-4"
          >
            {siteConfig.author.email}
          </a>
          .
        </p>
      </div>
    </Container>
  );
}
