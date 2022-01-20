import Head from 'next/head'
import ThemeChanger from './themechanger'

type Props = {
    children: React.ReactNode
}

export default function LayoutComponent({ children }: Props) {

    return (
        <>
            <Head>
                <link rel="icon" type="image/svg+xml" href="favicon.svg" />
                <title></title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content=""/>
            </Head>
            <div className="min-h-screen bg-gradient-to-tr from-blue-400 to-slate-200 dark:from-blue-900 dark:to-slate-800 ">
                <div className="container mx-auto text-slate-900 dark:text-white bg-white dark:bg-slate-900">
                    <header className="py-4 px-8 bg-slate-300 dark:bg-black">
                        <div className="right">
                            <ThemeChanger/>
                        </div>
                    </header>
                    
                    <main className="p-8">
                        {children}
                    </main>

                    <footer className="">

                    </footer>
                </div>
            </div>
        </>
    )
}