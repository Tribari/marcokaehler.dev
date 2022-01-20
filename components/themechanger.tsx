import React, { useEffect, useState } from "react"
import { useTheme } from 'next-themes'
import { FaSun, FaMoon, FaToggleOn, FaToggleOff } from 'react-icons/fa'

const ThemeChanger = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
  
    useEffect(() => setMounted(true), [])
  
    if (!mounted) return null

    return (
        <div className="inline-block p-2 rounded-full bg-white dark:bg-slate-800">
            <div className="flex justify-center items-center gap-x-1">
                <FaSun className="text-yellow-500 dark:text-gray-500"/>
                <button onClick={() => setTheme('dark')} className="inline-block dark:hidden">
                    <FaToggleOff/>
                </button>
                <button onClick={() => setTheme('light')} className="hidden dark:inline-block">
                    <FaToggleOn/>
                </button>
                <FaMoon className="text-black dark:text-blue-500"/>
            </div>
        </div>
    )
}

export default ThemeChanger