import { FaStar, FaCheckCircle } from "react-icons/fa"

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

    const createStars = (num: number) => {
        var elements = []
        for(var i=0; i < num; i++) {
            elements.push(
                <FaStar key={i} className="inline text-yellow-300 dark:text-yellow-400"/>
            )
        }
        return elements
    }

    const groups = skills.groups.map((group, index) => {

        const skills = group.skills.map((skill, i) => {
            return (
                <div key={i} className="grid grid-cols-6 border-b py-2">
                    <div className="col-span-3">
                        {skill.title}
                    </div>
                    <div>
                        {createStars(skill.knowledge.level)}
                    </div>
                    <div>
                        {skill.knowledge.production &&
                            <FaCheckCircle className="inline text-lime-500 dark:text-lime-400"/>
                        }
                    </div>
                    <div>
                        {skill.knowledge.upToDate &&
                            <FaCheckCircle className="inline text-lime-500 dark:text-lime-400"/>
                        }
                    </div>
                </div>
            )
        })

        return(
            <div key={index} className="py-4">
                <h2 className="text-4xl uppercase">{group.title}</h2>
                {skills}
            </div>
        )
    })

    return (
        <div className="font-vt323 lg:mx-48">
            <h1 className="text-6xl uppercase text-center">{skills.title}</h1>
            {groups}
        </div>
    )
}

export default SkillsComponent