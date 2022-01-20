import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import LayoutComponent from '@/components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </ThemeProvider>
  )
}

export default MyApp
