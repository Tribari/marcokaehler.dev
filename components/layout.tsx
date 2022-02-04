import Head from 'next/head'
import Link from 'next/link'
import ThemeChangerComponent from './themechanger'

type Props = {
    children: React.ReactNode,
    siteTitle: string,
    siteSlogan: string,
    metaTitle: string,
    metaDescription: string,
    metaKeywords: string,
    mainMenu: {title: string, url: string}[]
}

export default function LayoutComponent({ children, siteTitle, siteSlogan, metaTitle, metaDescription, metaKeywords, mainMenu }: Props) {
    const currentYear = new Date().getFullYear() 

    return (
        <>
            <Head>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <title>{metaTitle}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content={metaDescription}/>
                <meta name="keywords" content={metaKeywords}/>
            </Head>
            <div className="min-h-screen bg-gradient-to-tr from-blue-400 to-slate-100 dark:from-blue-900 dark:to-slate-800 transition-colors">

                <div className="container mx-auto font-vt323 text-xl text-slate-900 dark:text-white bg-white dark:bg-black transition-colors">
                    
                    <header className="sticky top-0 z-10 grid lg:grid-cols-2 py-6 px-12 bg-white dark:bg-black transition-colors">
                        <div className="uppercase group ">
                            <div className="text-5xl">
                                <Link href="/">
                                    {siteTitle}
                                </Link>
                            </div>
                            <div className="text-2xl">
                                <Link href="/">
                                    {siteSlogan}
                                </Link>
                            </div>
                        </div>

                        <div className="lg:text-right lg:pt-3">
                            <div className="inline lg:pr-4 text-3xl uppercase tracking-wide">
                                {mainMenu && mainMenu.map((item, index) => {
                                    return (
                                        <span key={index} className="pr-4">
                                            <Link href={item.url}>
                                                {item.title}
                                            </Link>
                                        </span>
                                    )
                                })}
                            </div>
                            <ThemeChangerComponent/>
                        </div>
                    </header>
                    
                    <main className="p-4 sm:p-8 md:p-12">
                        {children}
                    </main>

                    <footer className="py-4 px-12 text-md text-center uppercase bg-white dark:bg-black transition-colors">
                        <span className="mx-4">
                            ©{currentYear} - <Link href="/">{siteTitle}</Link> - <Link href="/legal-notice">Legal Notice</Link> - <Link href="/privacy-policy">Privacy Policy</Link>
                        </span>
                    </footer>

                </div>
                
            </div>
        </>
    )
}