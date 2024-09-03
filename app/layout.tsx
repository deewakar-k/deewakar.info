import "./globals.css";
import localFont from "next/font/local";

const berkeley = localFont({
  src: [
    {
      path: "../public/fonts/BerkeleyMonoRegular.woff2",
      weight: "100",
    },
  ],
  variable: "--font-berkeley",
});

const grotesk = localFont({
  src: [
    {
      path: "../public/fonts/FoundersGrotesk-Light.woff2",
      weight: "400",
    },
  ],
  variable: "--font-grotsek",
});

export const metadata = {
  title: "deewakar kumar",
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
      className={`${berkeley.variable} ${grotesk.variable} font-mono`}
    >
      <body>{children}</body>
    </html>
  );
}
