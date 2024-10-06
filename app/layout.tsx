import "./globals.css";
import { Inter } from "next/font/google"
import { Navbar } from "./ui/navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "deewakar",
  description: "portfolio",
  icons: {
    icon: "/deewakar.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} antialiased`}
    >
      <body className="app-width px-8 py-16 sm:px-0 flex flex-col gap-24">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
