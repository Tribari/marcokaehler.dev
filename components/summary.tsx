import Image from 'next/image'
import Typewriter from 'typewriter-effect'

export type Summary = {
    title: string,
    birthday: string,
    status: {
        available: boolean,
        data: string[]
    },
    portrait: {
        url: string,
        title: string
    },
    informations: {
        title: string,
        data: string[]
    }[],
    buttons: {
        text: string,
        class: string,
        url: string
    }[]
}

type Props = {
    summary: Summary
}

const SummaryComponent = ({summary}: Props) => {
    const age = Math.floor(((new Date()).valueOf() - (new Date(summary.birthday)).valueOf()) / 31557600000)

    return (
        <div className="">

            {summary.portrait.url &&
                <div className="mx-44 mb-24 text-center">
                    <div className="relative p-2 border-2 border-black dark:border-white rounded-full shadow-xl">
                        <Image 
                        className="rounded-full"
                        src={summary.portrait.url} 
                        alt={summary.portrait.title} 
                        layout="responsive" 
                        width="400" 
                        height="400" 
                        objectFit="cover" 
                        loading="eager" 
                        priority/>
                    </div>
                </div>
            }

            <div className="">
                <h2>
                    {summary.title} 
                </h2>
                <div className="py-4">
                    <div className="my-2 grid grid-cols-4">
                        <div className="uppercase">
                            Age
                        </div>
                        <div className="col-span-3 jost">
                            {age} years and counting
                        </div>
                    </div>
                    {summary.informations && summary.informations.map((entry, index) => {
                        return (
                            <div key={index} className="my-2 grid grid-cols-4">
                                <div className="uppercase">
                                    {entry.title}
                                </div>
                                <div className="col-span-3 jost">
                                    {entry.data.map((i, k) => {
                                        return (
                                            <p key={k}>{i}</p>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                    <div className="my-2 grid grid-cols-4">
                        <div className="uppercase">
                            Status
                        </div>
                        <div className="col-span-3 ">
                            {summary.status.available && 
                                <span className="bg-lime-200 dark:bg-lime-700 px-2">Available</span>
                            }
                            {!summary.status.available && 
                                <span className="bg-red-200 dark:bg-red-700 px-2">Actually not available</span>
                            }
                            &nbsp;
                            <Typewriter
                                options={{
                                    strings: summary.status.data,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                    </div>
                </div>

                <p className="py-4">
                    {summary.buttons && summary.buttons.map((button, index) => {
                        return (
                            <a key={index} className={button.class} href={button.url}>
                                {button.text}
                            </a>
                        )
                    })}
                </p>
            </div>
        </div>
    )
}

export default SummaryComponent