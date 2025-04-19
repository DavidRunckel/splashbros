import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Splash Bros. Pressure and Softwash",
  description: "Professional pressure washing and soft washing services in Athens, GA. Residential and commercial cleaning solutions with 100% satisfaction guaranteed.",
  keywords: 'pressure washing Athens GA, soft washing, house washing, driveway cleaning, Athens pressure washing service, commercial pressure washing',
  openGraph: {
    title: 'Pressure Washing in Athens GA | Splash Bros',
    description: 'Professional pressure washing services in Athens, GA with 100% satisfaction guarantee',
    url: 'https://splashbros.vercel.app',
    siteName: 'Splash Bros Pressure and Softwash',
    locale: 'en_US',
    type: 'website',
  },
};

// Create a component for the SEO schema
const SchemaMark = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Splash Bros Pressure and Softwash",
          "description": "Professional pressure washing and soft washing services in Athens, GA.",
          "url": "https://splashbros.vercel.app",
          "telephone": "(720) 682-1853",
          "email": "clayton.faasen@thesplashbros.com",
          "areaServed": ["Athens-Clarke County, GA", "Oconee County, GA", "Oglethorpe County, GA", "Madison County, GA", "Jackson County, GA", "Barrow County, GA"],
          "serviceType": ["Pressure Washing", "Soft Washing", "Roof Cleaning", "Driveway Cleaning"]
        })
      }}
    />
  );
};

// Add this to your layout.jsx or page.jsx component
<head>
  <SchemaMark />
</head>

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
