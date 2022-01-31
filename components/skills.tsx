import { FaStar, FaRegStar, FaAngleDown, FaAngleRight, FaRegBuilding, FaBookmark } from "react-icons/fa"
import { useState } from 'react'

export type Skills = {
    title: string,
    groups: {
        title: string,
        skills: {
            title: string,
            knowledge: {
                level: number,
                production: boolean,
                upToDate: boolean
            }
        }[]
    }[]
}

type Props = {
    skills: Skills
}

const SkillsComponent = ({skills}: Props) => {
    const [active, setActive] = useState(true)

    const toggle = () => {
        setActive((active) => !active)

    }

    const createStars = (num: number) => {
        var elements = []
        for(var i=0; i < num; i++) {
            elements.push(
                <FaStar key={i} className="inline text-yellow-300 dark:text-yellow-400"/>
            )
        }
        for(var i=5; i > num; i--) {
            elements.push(
                <FaRegStar key={i} className="inline text-yellow-200 dark:text-yellow-900"/>
            )
        }
        return elements
    }

    const groups = skills.groups.map((group, index) => {
        const [active, setActive] = useState(false)

        const toggle = () => {
            setActive((active) => !active)

        }

        const skills = group.skills.map((skill, i) => {
            return (
                <div key={i} className="grid grid-cols-1 sm:grid-cols-5 border-b px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 jost">
                    <div className="sm:col-span-3 md:col-span-3 xxl:col-span-4">
                        {skill.title}
                    </div>
                    <div className="sm:col-span-2 md:col-span-2 xxl:col-span-1 text-right">
                        {createStars(skill.knowledge.level)}
                        <span className="ml-4 w-4 inline-block">
                            {skill.knowledge.production &&
                                <FaRegBuilding className="inline text-lime-400 dark:text-lime-700"/>
                            }
                        </span>
                        <span className="ml-4 w-4 inline-block">
                            {skill.knowledge.upToDate &&
                                <FaBookmark className="inline text-sky-300 dark:text-blue-700"/>
                            } 
                        </span>
                    </div>
                </div>
            )
        })

        return(
            <div key={index} className="py-2">
                <h3 className="cursor-pointer" onClick={toggle}>
                    <span className="mr-4">
                        {active &&
                            <FaAngleDown className="inline"/>
                        }
                        {!active &&
                            <FaAngleRight className="inline"/>
                        }
                    </span>
                    {group.title}
                </h3>
                <div className={active? 'max-h-screen overflow-hidden transition-max-height duration-700 ease-in-out' : 'max-h-0 overflow-hidden transition-max-height duration-700 ease-in-out'}>
                    {skills}
                </div>
            </div>
        )
    })

    return (
        <div className="">
            <h2>{skills.title}</h2>

            <div className="py-4">
                <h3 className="cursor-pointer" onClick={toggle}>
                    <span className="mr-4">
                        {active &&
                            <FaAngleDown className="inline"/>
                        }
                        {!active &&
                            <FaAngleRight className="inline"/>
                        }
                    </span>
                    Legend
                </h3> 
                <div className={active? 'max-h-screen overflow-hidden transition-max-height duration-700 ease-in-out' : 'max-h-0 overflow-hidden transition-max-height duration-700 ease-in-out'}>
                    <div className="jost">
                        <p className="px-4">
                            {createStars(1)} = Light knowledge<br/>
                            {createStars(2)} = Basic knowledge<br/>
                            {createStars(3)} = Medium knowledge<br/>
                            {createStars(4)} = Advanced knowledge<br/>
                            {createStars(5)} = Profound knowledge<br/>
                        </p>
                        <p className="px-4 pt-4">
                            <FaRegBuilding className="inline text-lime-400 dark:text-lime-700"/> = Used in production environment / customer project(s).<br/>
                            <FaBookmark className="inline text-sky-300 dark:text-blue-700"/> = Actively used in the past 2 years.
                        </p>
                    </div>
                </div>
            </div>

            {groups}
        </div>
    )
}

export default SkillsComponent