import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Philip N. Ogboh | Fullstack Engineer",
  description:
    "Portfolio of Philip N. Ogboh — Fullstack Engineer, Frontend Specialist, and Founder. Building PropTech, FinTech, and SaaS platforms with React, Next.js, and TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AnimatePresence>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </AnimatePresence>
      </body>
    </html>
  );
}
