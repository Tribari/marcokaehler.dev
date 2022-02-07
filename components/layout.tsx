import Head from 'next/head'
import Link from 'next/link'

import NavigationComponent from './navigation'

type Props = {
    children: React.ReactNode,
    siteTitle: string,
    siteSlogan: string,
    metaTitle: string,
    metaDescription: string,
    metaKeywords: string,
    mainMenu: {title: string, url: string}[],
    contact?: {
        mail?: string,
        xing?: string,
        linkedin?: string,
        github?: string
    }
}

export default function LayoutComponent({ children, siteTitle, siteSlogan, metaTitle, metaDescription, metaKeywords, mainMenu, contact }: Props) {
    const currentYear = new Date().getFullYear() 

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription}/>
                <meta name="keywords" content={metaKeywords}/>
            </Head>
            <div className="min-h-screen bg-gradient-to-tr from-blue-400 to-slate-100 dark:from-blue-900 dark:to-slate-800 transition-colors">
                <div className="container mx-auto font-vt323 text-xl text-slate-900 dark:text-white bg-white dark:bg-black transition-colors">
                    <header className="sticky top-0 z-10 p-4 lg:py-6 lg:px-12 bg-white dark:bg-black transition-colors">
                        <NavigationComponent siteTitle={siteTitle} siteSlogan={siteSlogan} mainMenu={mainMenu} contact={contact} />
                    </header>
                    <main className="p-4 xl:p-12">
                        {children}
                    </main>
                    <footer className="p-4 xl:px-12 text-md text-center uppercase bg-white dark:bg-black transition-colors">
                        <span className="mx-4">
                            ©{currentYear} - <Link href="/">{siteTitle}</Link> - <Link href="/legal-notice">Legal Notice</Link> - <Link href="/privacy-policy">Privacy Policy</Link>
                        </span>
                    </footer>
                </div>
            </div>
        </>
    )
}