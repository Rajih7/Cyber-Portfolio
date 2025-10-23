import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Rajih N - Penetration Testing Enthusiast",
  description:
    "This is the portfolio of Rajih N. I am an enthusiastic Penetration Testing and Cybersecurity learner. I am passionate about ethical hacking, IT audits, Linux, and network security. Always open to collaboration and new challenges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen w-full mx-auto px-0 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
      </body>
    </html>
  );
}
