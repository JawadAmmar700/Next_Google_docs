import { Provider } from 'next-auth/client'
import '../styles/globals.css'
import '@material-tailwind/react/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
