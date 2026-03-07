import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Delta Tech Partners | Your Technical Allies",
  description: "Delta Tech Partners is a consulting and software engineering services firm aiming to help business owners navigate complex technical projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
