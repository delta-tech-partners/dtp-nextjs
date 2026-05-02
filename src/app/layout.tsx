import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Delta Tech Partners | Your Technical Allies",
  description: "Delta Tech Partners is a consulting and software engineering services firm aiming to help business owners navigate complex technical projects.",
};

const themeScript = `
(() => {
  try {
    const savedTheme = window.localStorage.getItem("dtp-theme");
    const theme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch {
    document.documentElement.dataset.theme = "dark";
    document.documentElement.style.colorScheme = "dark";
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
