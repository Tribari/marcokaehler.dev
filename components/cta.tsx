import Link from 'next/link'

type Props = {
    title: string,
    buttonHref: string,
    buttonText?: string
}

const CTAComponent = ({title, buttonHref, buttonText = 'Contact me'}: Props) => {
    return (
        <div className="mt-12 lg:mt-20 -mx-4 xl:-mx-12 p-8 bg-gray-50 dark:bg-slate-900 text-center">
            <p className="font-vt323 text-xl xl:text-2xl mb-6">{title}</p>
            <Link href={buttonHref} className="button-green">
                {buttonText}
            </Link>
        </div>
    )
}

export default CTAComponent