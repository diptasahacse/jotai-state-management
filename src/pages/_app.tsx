import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import "@/styles/globals.css";
import { Provider } from "jotai";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <>
        <Header/>
        <div className=" w-11/12 mx-auto">
          <Component {...pageProps} />
        </div>
        <Footer/>
      </>
    </Provider>
  );
}
