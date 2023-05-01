import "@/styles/globals.css";
import { Inter, Quicksand } from "next/font/google";
import type { AppProps } from "next/app";

const inter = Inter({ subsets: ["latin"] });
const quickSand = Quicksand({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}
