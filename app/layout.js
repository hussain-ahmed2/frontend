import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Hussain",
  description: "A Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-pt-12 scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-mono bg-neutral-500`}
      >
        <Header />
        <main className="min-h-screen pt-12 max-w-screen-xl mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
