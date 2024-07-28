import Layout from "@/layout";
import "@/styles/globals.css";
import { PT_Sans } from "next/font/google";

const sans = PT_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={sans.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
