import { FaAngleDown, FaAngleRight } from "react-icons/fa"
import { useState } from 'react'
import SkillItemComponent, { SkillItem } from '@/components/skills/skillitem'

export type SkillGroup = {
    children?: React.ReactNode,
    title: string,
    skills?: SkillItem[],
    opened?: boolean
}

const SkillGroupComponent= ({children, title, skills, opened = false}: SkillGroup) => {
    const [active, setActive] = useState(opened)

    const toggle = () => {
        setActive((active) => !active)
    }

    const list = skills?.map((skill, index) => {
        return (
            <SkillItemComponent key={index} skill={skill}/>
        )
    })

    return(
        <div className="py-2">
            <h3 className="cursor-pointer" onClick={toggle}>
                <span className="mr-4">
                    {active &&
                        <FaAngleDown className="inline"/>
                    }
                    {!active &&
                        <FaAngleRight className="inline"/>
                    }
                </span>
                {title}
            </h3>
            <div className={active? 'max-h-screen overflow-hidden transition-max-height duration-700 ease-in-out' : 'max-h-0 overflow-hidden transition-max-height duration-700 ease-in-out'}>
                {skills ? list : ''}
                {children? children: ''}
            </div>
        </div>
    )
}

export default SkillGroupComponent