import { SessionProvider } from "next-auth/react"
import "@/styles/globals.css";

export default function App({ Component, pageProps, session }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={session}>
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  )
}
