import { Providers } from "@redux/provider";

import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic'

import '../../styles/globals.css';

const Navbar = dynamic(() => import('components/Shared/Navbar'), { ssr: false });

import { store } from "@redux/store";

export const metadata = {
  title: "Esteban Quintana - Freelancer",
  description: "Desarrollo de Software",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers store={store}>
          {children}
        </Providers>
      </body>
    </html>
  )
}
