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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat&family=Poppins&display=swap"
          rel="stylesheet"
        />
        <FirebaseC>
          {children}
          <Toaster />
        </FirebaseC>
      </body>
    </html>
  );
}
