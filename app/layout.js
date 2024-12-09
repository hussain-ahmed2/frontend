import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Hussain",
  description: "A Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-pt-12 scroll-smooth">
      <body
        className={`font-mono bg-neutral-500`}
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
