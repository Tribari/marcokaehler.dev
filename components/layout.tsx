import Head from 'next/head'
import Link from 'next/link'
import ThemeChangerComponent from './themechanger'
import { FaEnvelope, FaGithub, FaXing, FaLinkedin } from "react-icons/fa"

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
                        <div className="uppercase group">
                            <div className="pt-4 text-5xl">
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

                        <div className="lg:text-right">
                            <ThemeChangerComponent/>

                            <div className="pt-4 pr-1 text-3xl uppercase tracking-wide">
                                {mainMenu && mainMenu.map((item, index) => {
                                    return (
                                        <span key={index} className="pr-4">
                                            <Link href={item.url}>
                                                {item.title}
                                            </Link>
                                        </span>
                                    )
                                })}
                                {contact && 
                                    <div className="inline-block">
                                        {contact.mail && 
                                            <span className="pr-4">
                                                <Link href={contact.mail}>
                                                    <a target="_blank" rel="noreferrer" className="hover:bg-white dark:hover:bg-black">
                                                        <FaEnvelope className="inline-block cursor-pointer hover:text-lime-300 dark:hover:text-lime-700"/>
                                                    </a>
                                                </Link>
                                            </span>
                                        }
                                        {contact.xing && 
                                            <span className="pr-4">
                                                <Link href={contact.xing}>
                                                    <a target="_blank" rel="noreferrer" className="hover:bg-white dark:hover:bg-black">
                                                        <FaXing className="inline-block cursor-pointer hover:text-lime-300 dark:hover:text-lime-700"/>
                                                    </a>
                                                </Link>
                                            </span>
                                        }
                                        {contact.linkedin && 
                                            <span className="pr-4">
                                                <Link href={contact.linkedin}>
                                                    <a target="_blank" rel="noreferrer" className="hover:bg-white dark:hover:bg-black">
                                                        <FaLinkedin className="inline-block cursor-pointer hover:text-lime-300 dark:hover:text-lime-700"/>
                                                    </a>
                                                </Link>
                                            </span>
                                        }
                                        {contact.github && 
                                            <span className="">
                                                <Link href={contact.github}>
                                                    <a target="_blank" rel="noreferrer" className="hover:bg-white dark:hover:bg-black">
                                                        <FaGithub className="inline-block cursor-pointer hover:text-lime-300 dark:hover:text-lime-700"/>
                                                    </a>
                                                </Link>
                                            </span>
                                        }
                                    </div>
                                }
                            </div>
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