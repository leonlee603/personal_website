import type { Metadata } from 'next';
import '@/app/globals.css';
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: 'Leon',
  description: 'Personal Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}
