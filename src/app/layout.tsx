import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans  } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luma. | Build skills that actually move you forward",
  description:
    "Luma is an online learning platform with practical courses taught by people who do the work every day. Learn design, technology, business and more.",
  openGraph: {
    title: "Luma. | Build skills that actually move you forward",
    description:
      "Practical courses taught by people who do the work every day.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
