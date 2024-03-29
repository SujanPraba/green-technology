import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Green Technology",
  description: "Generated by create next app",
  icons:{
    icon:['/favicon.ico?v=4'],
    apple:['/apple-touch-icon?v=4'],
    shortcut:['/apple-touch-icon'],
  }
  // ima
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head>
      <link rel="icon" href="gtlogo.png" type="image/png" />

      </Head> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
