import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ChatWidget } from "@/components/chat/chat-widget";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Professional Portfolio | Full-Stack & DevOps Engineer",
  description:
    "Portfolio website showcasing skills, projects, and professional experience in software development and DevOps.",
  keywords: [
    "developer",
    "portfolio",
    "full-stack",
    "devops",
    "software engineer",
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Professional Portfolio | Full-Stack & DevOps Engineer",
    description:
      "Portfolio website showcasing skills, projects, and professional experience in software development and DevOps.",
    siteName: "Your Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Portfolio | Full-Stack & DevOps Engineer",
    description:
      "Portfolio website showcasing skills, projects, and professional experience in software development and DevOps.",
    creator: "@yourusername",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <ChatWidget />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
