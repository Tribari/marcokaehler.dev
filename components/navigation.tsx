import Link from 'next/link'
import { useState } from 'react'
import ThemeChangerComponent from './themechanger'
import { FaEnvelope, FaGithub, FaXing, FaLinkedin, FaTimes } from "react-icons/fa"

type Props = {
    siteTitle: string,
    siteSlogan: string,
    mainMenu: {title: string, url: string}[],
    contact?: {
        mail?: string,
        xing?: string,
        linkedin?: string,
        github?: string
    }
}

const NavigationComponent = ({siteTitle, siteSlogan, mainMenu, contact}: Props) => {
    const [open, setOpen] = useState(false)

    const toggleOpen = () => {
        setOpen((open) => !open)
    }
    
    const menuItems = mainMenu.map((item, index) => {
        return (
            <div key={index} className="block xl:inline p-2 xl:p-0 xl:pr-4" onClick={toggleOpen}>
                <Link href={item.url}>
                    {item.title}
                </Link>
            </div>
        )
    })

    const contactIcons = (
        <>
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
        </>
    )

    const mobileNavigation = (
        <div className="visible xl:invisible block xl:hidden">
            <div className="">
                <button name="openMenu" className={open ? 'hamburger open' : 'hamburger'} type="button" onClick={toggleOpen}>
                    <span className="hamburger_top-bun"></span>
                    <span className="hamburger_bottom-bun"></span>
                </button>
            </div>
            <div className={open ? 'mobilemenu open' : 'mobilemenu'}>
                <div className="p-4 text-right">
                    <FaTimes onClick={toggleOpen} className="inline"/>
                </div>
                <div className="text-center text-4xl">
                    {menuItems}
                    <div className="inline-block text-2xl border-t-2 border-black dark:border-white mt-4 p-4">
                        {contactIcons}
                    </div>
                    <div className="mt-2 text-base">
                        <ThemeChangerComponent/>
                    </div>
                </div>
            </div>
        </div>
    )

    const desktopNavigation = (
        <div className="hidden xl:block invisible xl:visible ">
            <ThemeChangerComponent/>
            <nav className="pt-4 pr-1 text-3xl uppercase tracking-wide">
                {menuItems}
                {contactIcons}
            </nav>
        </div>
    )

    return (
        <div className="flex flex-row">
            <div className="flex-none uppercase group">
                <div className="pt-4 text-5xl">
                    <Link href="/">
                        {siteTitle}
                    </Link>
                </div>
                <div className="text-xl xl:text-2xl">
                    <Link href="/">
                        {siteSlogan}
                    </Link>
                </div>
            </div>
            <div className="flex-auto text-right pt-4 xl:pt-0">
                {desktopNavigation}
                {mobileNavigation}
            </div>
        </div>
    )
}

export default NavigationComponent