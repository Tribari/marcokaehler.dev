import React, { useEffect, useState } from "react"
import { useTheme } from 'next-themes'
import { FaSun, FaMoon, FaToggleOn, FaToggleOff } from 'react-icons/fa'

const ThemeChangerComponent = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
  
    useEffect(() => setMounted(true), [])
  
    if (!mounted) return null

    return (
        <div className="inline-block rounded-full bg-slate-200 dark:bg-slate-900">
            <div className="flex justify-center items-center gap-x-2 p-1">
                <button onClick={() => setTheme('light')} className="inline-block bg-white dark:bg-slate-900 rounded-full p-2">
                    <FaSun className="text-yellow-500 dark:text-gray-500"/>
                </button>
                <button onClick={() => setTheme('dark')} className="inline-block bg-slate-200 dark:bg-slate-600 rounded-full p-2">
                    <FaMoon className="text-black dark:text-yellow-100"/>
                </button>
            </div>
        </div>

    )

}

export default ThemeChangerComponent