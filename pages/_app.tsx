import "@/styles/globals.css";
import { Inter, Quicksand } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });
const quickSand = Quicksand({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <GoogleOAuthProvider clientId="1067474376899-8bn30uk5cl68cv6oqic6u0aopsgngg82.apps.googleusercontent.com">
        <Component {...pageProps} />
        <Toaster />
      </GoogleOAuthProvider>
    </div>
  );
}
