import "@/styles/globals.css";
import { Provider } from "jotai";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <div>
        <div className=" w-11/12 mx-auto">
          <Component {...pageProps} />
        </div>
      </div>
    </Provider>
  );
}
