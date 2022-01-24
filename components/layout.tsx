import Head from 'next/head'
import Link from 'next/link'
import ThemeChanger from './themechanger'

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

                <div className="container mx-auto font-montserrat text-xl text-slate-900 dark:text-white bg-white dark:bg-black transition-colors">
                    
                    <header className="sticky top-0 z-50 grid lg:grid-cols-2 py-6 px-12 bg-white dark:bg-black transition-colors">
                        <div className="font-vt323 uppercase group transition-colors hover:text-fuchsia-700 active:text-teal-500 dark:hover:text-teal-500 dark:active:text-fuchsia-600">
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
                            <div className="inline lg:pr-4 font-vt323 text-3xl uppercase tracking-wide">
                                {mainMenu && mainMenu.map((item, index) => {
                                    return (
                                        <span key={index} className="pr-4 transition-colors hover:text-fuchsia-700 active:text-teal-500 dark:hover:text-teal-500 dark:active:text-fuchsia-600">
                                            <Link href={item.url}>
                                                {item.title}
                                            </Link>
                                        </span>
                                    )
                                })}
                            </div>
                            <ThemeChanger/>
                        </div>
                    </header>
                    
                    <main className="p-12">
                        {children}
                    </main>

                    <footer className="py-4 px-12 text-md font-vt323 text-center uppercase bg-white dark:bg-black transition-colors">
                        ©{currentYear} - {siteTitle}
                    </footer>

                </div>
                
            </div>
        </>
    )
}