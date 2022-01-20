import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import LayoutComponent from '@/components/layout'
import generalData from '../_settings/general.json'
import mainMenuData from '../_settings/mainmenu.json'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
      <LayoutComponent 
        siteTitle={generalData.site_title} 
        siteSlogan={generalData.site_slogan} 
        metaTitle={generalData.meta_title}
        metaDescription={generalData.meta_description}
        metaKeywords={generalData.meta_keywords}
        mainMenu={mainMenuData}
        >
        <Component {...pageProps} />
      </LayoutComponent>
    </ThemeProvider>
  )
}

export default MyApp
