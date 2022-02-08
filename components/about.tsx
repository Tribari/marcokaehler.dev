import Typewriter from 'typewriter-effect'

export type About = {
    content: string,
    data: {
        title: string,
        slogan: string[],
        quote: string
    }
}

type Props = {
    about: About[]
}

const AboutComponent = ({about}: Props) => {

    const blocks = about.map((block, index) => {
        return (
            <div key={index} className="py-4">
                <h3>
                    {block.data.title} 
                    <span className="block border-t-2 border-slate-100 dark:border-slate-800 text-2xl leading-9">
                        <Typewriter
                                options={{
                                    strings: block.data.slogan,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                    </span>
                </h3>
                <div className="markdown jost ">
                    <div dangerouslySetInnerHTML={{ __html: block.content }} />
                    {block.data.quote &&
                        <blockquote>{block.data.quote}</blockquote>
                    }
                </div>
            </div>
        )
    })

    return (
        <>
            <h2>About</h2>
            <div className="">
                {blocks}
            </div>
        </>
    )
}

export default AboutComponent