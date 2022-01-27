import Typewriter from 'typewriter-effect'

export type About = {
    title: string,
    blocks: {
        title: string,
        slogan: string[],
        html: string
    }[]
}

type Props = {
    about: About
}

const AboutComponent = ({about}: Props) => {

    const blocks = about.blocks.map((block, index) => {
        return (
            <div key={index} className="py-4">
                <h3>
                    {block.title} 
                    <span className="block border-t-2 border-slate-100 dark:border-slate-800 text-2xl leading-9">
                        <Typewriter
                                options={{
                                    strings: block.slogan,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                    </span>
                </h3>
                <div className="markdown jost text-justify" dangerouslySetInnerHTML={{ __html: block.html }} />
            </div>
        )
    })

    return (
        <>
            <h2>{about.title}</h2>
            <div className="">
                {blocks}
            </div>
        </>
    )
}

export default AboutComponent