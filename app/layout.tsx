import type { Metadata } from "next";
import { ThemeProvider } from "@/features/theme";
import "./globals.css";

export const metadata: Metadata = {
  title: "Senior React Native Developer | Portfolio",
  description: "Cross-platform architecture, performance optimization, and high-impact mobile development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
