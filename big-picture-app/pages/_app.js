import "/styles.css";
import Navbar from "/components/Navbar";

import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Navbar />
      <Component {...pageProps} />
    </SWRConfig>
  );
}
