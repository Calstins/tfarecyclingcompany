import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/sonner';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'TFA - Sustainable Furniture From Recycled Tyres',
    template: '%s | TFA',
  },
  description:
    'TFA transforms waste tyres into beautiful, functional furniture for homes and workspaces. Explore our eco-friendly chairs, tables, and custom décor.',
  keywords: [
    'recycled furniture',
    'sustainable furniture',
    'tyre furniture',
    'eco-friendly furniture',
    'upcycled tyres',
    'Lagos furniture',
  ],
  authors: [{ name: 'TFA' }],
  creator: 'TFA',
  publisher: 'TFA',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tfa.com',
    title: 'TFA - Sustainable Furniture From Recycled Tyres',
    description:
      'TFA transforms waste tyres into beautiful, functional furniture for homes and workspaces. Explore our eco-friendly chairs, tables, and custom décor.',
    siteName: 'TFA',
    images: [
      {
        url: 'https://barattini.coffee/wp-content/uploads/2025/05/table.jpeg',
        width: 1200,
        height: 630,
        alt: 'TFA - Sustainable Furniture',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'verification_token',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
