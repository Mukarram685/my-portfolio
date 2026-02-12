import './globals.css';
import { Inter, Outfit } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://mukarram.dev'), // Update with actual production URL
  title: {
    default: 'Muhammad Mukarram | Full-Stack Developer',
    template: '%s | Muhammad Mukarram'
  },
  description: 'Full-stack developer specializing in building modern web and mobile applications with React, Next.js, and React Native.',
  keywords: ['react developer', 'next.js developer', 'frontend engineer', 'muhammad mukarram portfolio', 'web development', 'react native developer'],
  authors: [{ name: 'Muhammad Mukarram' }],
  creator: 'Muhammad Mukarram',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mukarram.dev', // Fallback or placeholder, user can update
    siteName: 'Muhammad Mukarram Portfolio',
    title: 'Muhammad Mukarram | Full-Stack Developer',
    description: 'Transforming ideas into high-performance digital experiences.',
    images: [
      {
        url: '/og-image.png', // User will need to add this to public/
        width: 1200,
        height: 630,
        alt: 'Muhammad Mukarram Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Mukarram | Full-Stack Developer',
    description: 'Transforming ideas into high-performance digital experiences.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
