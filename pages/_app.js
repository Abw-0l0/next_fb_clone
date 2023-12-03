import '../styles/globals.css'
// import { Provider } from "next-auth/client"
// import { SessionProvider } from "next-auth/react"

function MyApp({ Component,
  pageProps: { ...pageProps }, }) {
  return (
    // <SessionProvider session={session}>
    <Component {...pageProps} />
    // </SessionProvider>
  );

}

export default MyApp