export type Career = {
    title: string,
    steps: {
        from: string,
        to: string,
        position: string,
        company: string,
        description: string
    }[]
}

type Props = {
    career: Career
}

const CareerComponent = ({career}: Props) => {

    const steps = career.steps.map((step, index) => {
        return (
            <div key={index} className="py-4">
                <h4 className="border-b-2 border-slate-100 dark:border-slate-800">
                    <span className="block md:inline-block md:w-52 normal-case italic font-jost font-thin text-xl leading-9 ">
                        {step.from} to {step.to}
                    </span>
                    <span className="block md:inline-block lg:tracking-wide">
                        {step.position}
                    </span>
                </h4>
                <p className="md:ml-52 py-2 font-jost bold text-base ">
                    {step.company}
                </p>
                <p className="md:ml-52 jost text-justify">
                    {step.description}
                </p>

            </div>
        )
    })

    return (
        <>
            <h2>{career.title}</h2>
            <div className="">
                {steps}
            </div>
        </>
    )
}

export default CareerComponent