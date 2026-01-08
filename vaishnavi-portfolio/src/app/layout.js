import React from 'react';
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from 'next/dynamic';


const inter = Inter({ subsets: ["latin"] });

const MotionNav = dynamic(() => import('../components/MotionNav'), { 
  ssr: false,
  loading: () => <div className="h-16 bg-transparent"></div> // Transparent placeholder
});

export const metadata = {
  title: "Vaishnavi Lokhande's Portfolio",
  description: "Portfolio of Vaishnavi Lokhande",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-b from-white via-pink-50 to-white`}>
   <header className="sticky top-0 z-50 bg-pink-50 shadow-md border-b border-pink-200">



  <MotionNav />
</header>


<main className="flex min-h-screen flex-col items-center justify-between p-0">

          {children}
        </main>
      </body>
    </html>
  );
}
