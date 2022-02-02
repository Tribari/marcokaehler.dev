export type Career = {
    content: string,
    data: {
        position: string,
        type: string,
        company: string,
        location: string,
        from: string,
        to: string
    }
}

type Props = {
    career: Career[]
}

const CareerComponent = ({career}: Props) => {

    const steps = career.reverse().map((step, index) => {
        return (
            <div key={index} className="py-4">
                <h4 className="border-b-2 border-slate-100 dark:border-slate-800">
                    <span className="block md:inline-block md:w-52 normal-case italic font-jost font-thin text-xl leading-9 ">
                        {step.data.from} to {step.data.to}
                    </span>
                    <span className="block md:inline-block lg:tracking-wide">
                        {step.data.position}
                    </span>
                </h4>
                <p className="md:ml-52 py-2 font-jost font-bold text-base ">
                    {step.data.type} @ {step.data.company} - {step.data.location}
                </p>
                <p className="md:ml-52 jost text-justify">
                    {step.content}
                </p>

            </div>
        )
    })

    return (
        <>
            <h2>Career</h2>
            <div className="">
                {steps}
            </div>
        </>
    )
}

export default CareerComponent