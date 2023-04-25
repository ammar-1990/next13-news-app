import Header from "./Header";
import Providers from "./Providers";
import "./globals.css";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The ALPHA News",
  description: "The ALPHA News",
};

export default function RootLayout({ children }) {


  
  return (
    <html lang="en">
        <body className="bg-gray-100 dark:bg-zinc-900 duration-700">
      <Providers>
          <Header />
          <div className="max-w-6xl mx-auto">{children}</div>
      </Providers>
        </body>
    </html>
  );
}
