import { Inter } from "next/font/google";
import SmoothScroll from "./smooth-scroll";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Since We Last Spoke",
  description: "A yearly review (sort of)",
};


export default function RootLayout({ children }) {
  return (
    
      <html lang="en">
        <body className={inter.className}>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </body>
      </html>
  );
}
