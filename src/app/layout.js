import { Inter } from "next/font/google";

import "../styles/sass/style-fonts.scss";
import "../styles/sass/style.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Akeshya home page ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body>
        <div className="main">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
