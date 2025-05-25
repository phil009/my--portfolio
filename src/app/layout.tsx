import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Phil009 Portfolio",
  description: "GitHub-themed portfolio for Phil009",
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
            defaultTheme="dark"
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
