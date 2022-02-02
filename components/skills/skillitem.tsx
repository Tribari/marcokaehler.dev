import { FaStar, FaRegStar, FaRegBuilding, FaBookmark } from "react-icons/fa"

export type SkillItem = {
    title: string,
    knowledge: {
        level: number,
        production: boolean,
        upToDate: boolean
    }
}

type Props = {
    skill: SkillItem
}

export const createStars = (num: number) => {
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

const SkillItemComponent = ({skill}: Props) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-5 border-b px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 jost">
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
}

export default SkillItemComponent