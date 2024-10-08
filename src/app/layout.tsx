import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Inner Circle",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body
          className={`${inter.className} bg-[#f5f9f5] w-[100vw] px-[20px] overflow-x-hidden`}
        >
          <nav className="mb-28">
            <Navbar />
          </nav>
          {children}
          <footer className="mt-24">
            <Footer />
          </footer>
        </body>
      </ClerkProvider>
    </html>
  );
}
