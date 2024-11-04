import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from 'next/link';

// Importing custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata specific to your store project
export const metadata: Metadata = {
  title: "My Store",
  description: "Discover a variety of quality products available at My Store. Shop with confidence and enjoy great deals!",
  keywords: "online store, ecommerce, quality products, shopping, deals",
  openGraph: {
    title: "My Store",
    description: "Your one-stop shop for quality and affordable products.",
    url: "https://www.mystore.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {/* Main layout for the store */}
        <header>
          <nav className="navbar">
            <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/Books">Books</Link>
              </li>
              <li>
                <Link href="/Jewelry">Jewelry</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
