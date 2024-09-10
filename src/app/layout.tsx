import { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { Space_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import React, { ReactNode } from 'react';

// SEO-optimized metadata (without og-image and Twitter)
export const metadata: Metadata = {
  title: 'New Salary Calculator - Quick & Accurate Salary Calculations',
  description: 'Quickly compute your updated salary after a percentage increase or the difference between old and new salaries with the New Salary Calculator.',
  metadataBase: new URL('https://sal-cal.vercel.app/'),
  openGraph: {
    title: 'New Salary Calculator',
    description: 'Quickly compute your salary adjustments with ease.',
    url: 'https://sal-cal.vercel.app/',
    siteName: 'New Salary Calculator',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://sal-cal.vercel.app/',
  },
  themeColor: '#317EFB',
};

const fontHeading = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const fontBody = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: '700',
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "New Salary Calculator",
              "url": "https://sal-cal.vercel.app/",
              "description": "Quickly compute your updated salary after a percentage increase or the difference between old and new salaries.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://sal-cal.vercel.app/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>
      </head>
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
