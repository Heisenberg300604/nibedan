import Container from '@/components/common/Container';
import About from '@/components/landing/About';
import CTA from '@/components/landing/CTA';
import Experience from '@/components/landing/Experience';
import Github from '@/components/landing/Github';
import Hackathons from '@/components/landing/Hackathons';
import Hero from '@/components/landing/Hero';
import LeetCodeSection from '@/components/landing/LeetCodeSection';
import Work from '@/components/landing/Projects';
import React from 'react';

export default function page() {
  return (
    <Container className="min-h-screen py-16">
      <Hero />
      <Experience />
      <Work />
      <Hackathons />
      <About />
      <Github />
      <LeetCodeSection />
      <CTA />
    </Container>
  );
}
