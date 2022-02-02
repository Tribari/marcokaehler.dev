import { FaRegBuilding, FaBookmark } from "react-icons/fa"
import { createStars } from '@/components/skills/skillitem'
import SkillGroupComponent, { SkillGroup } from "./skillgroup"

export type Skills = {
    title: string,
    groups: SkillGroup[]
}

type Props = {
    skills: Skills
}

const SkillsComponent = ({skills}: Props) => {
    const groups = skills.groups.map((group, index) => {
        return(
            <SkillGroupComponent key={index} title={group.title} skills={group.skills}/>
        )
    })

    return (
        <div className="">
            <h2>{skills.title}</h2>
            <SkillGroupComponent title="Legend" opened={true}>
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
            </SkillGroupComponent>
            {groups}
        </div>
    )
}

export default SkillsComponent