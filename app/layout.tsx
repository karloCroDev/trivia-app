import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.scss";
import FirebaseC from "./contexes/FireabseC";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trivia quizz",
  description: "Cool app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FirebaseC>
          {children}
          <Toaster />
        </FirebaseC>
      </body>
    </html>
  );
}
