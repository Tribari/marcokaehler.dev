import Link from 'next/link'

type Props = {
    title: string,
    buttonHref: string,
    buttonText?: string
}

const CTAComponent = ({title, buttonHref, buttonText = 'Contact me'}: Props) => {
    return (
        <div className="mt-12 lg:mt-20 -mx-12 p-8 bg-gray-50 dark:bg-slate-900 text-center">
            <h4 className="mb-6">{title}</h4>
            <Link href={buttonHref}>
                <a className="button-green">{buttonText}</a>
            </Link>
        </div>
    )
}

export default CTAComponent