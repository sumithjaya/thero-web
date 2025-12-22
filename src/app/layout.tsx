// No "use client" directive here. This file is a Server Component by default.

import "./globals.css";
import RootLayoutClient from "./RootLayoutClient"; // Import the client component

// --- Metadata Definition (MUST be in a Server Component) ---
export const metadata = {
  // --- Title (The primary <title> tag)
  title: 'THERO: Retirement Planning & Investment Optimizer', 
  
  // --- Description (The <meta name="description"> tag)
  description: 'Optimize your retirement plan with confidence. THERO helps you plan & manage your retirement income, investments, and projections with expert, easy-to-understand guidance.',
  
  // --- Open Graph / Social Sharing (Optional but highly recommended)
  openGraph: {
    title: 'THERO: Retirement Planning & Investment Optimizer',
    description: 'Optimize your retirement plan with confidence. THERO helps you plan & manage your retirement income, investments, and projections with expert, easy-to-understand guidance.',
    url: 'https://thero.com.au', // Replace with your actual URL
    siteName: 'THERO',
    type: 'website',
  },
    
};
// -----------------------------------------------------------

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* The actual content and client logic is now handled by the imported 
        RootLayoutClient component.
      */}
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}