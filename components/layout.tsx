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
                <link rel="icon" type="image/svg+xml" href="images/favicon.svg" />
                <title>{metaTitle}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content={metaDescription}/>
                <meta name="keywords" content={metaKeywords}/>
            </Head>
            <div className="min-h-screen bg-gradient-to-tr from-blue-400 to-slate-100 dark:from-blue-900 dark:to-slate-800 ">
                <div className="container mx-auto font-montserrat text-xl text-slate-900 dark:text-white bg-white dark:bg-slate-900">
                    <header className="grid lg:grid-cols-2 py-4 px-8 bg-slate-200 dark:bg-black">
                        <div className="text-3xl font-montserrat-alternates">
                            {siteTitle}
                            <span className="block text-base font-montserrat uppercase text-blue-900 dark:text-blue-600">{siteSlogan}</span>
                        </div>
                        <div className="lg:text-right lg:pt-3">
                            <div className="inline lg:pr-4">
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
                            <ThemeChanger/>
                        </div>
                    </header>
                    
                    <main className="p-8">
                        {children}
                    </main>

                    <footer className="py-4 px-8 text-sm text-center bg-slate-200 dark:bg-black">
                        ©{currentYear} - {siteTitle}
                    </footer>
                </div>
            </div>
        </>
    )
}