import { Poppins } from "next/font/google";

import { Header } from "@/components";
import "@/static/css/tailwind.config.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Spectraflix",
  description: "Spectraflix",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} bg-dark text-lightAlt antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
