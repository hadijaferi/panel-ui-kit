import type { AppProps } from 'next/app'
// import "../../src/Resources/css/main.sass";
import "@/src/Resources/css/main.sass";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
