import Image from 'next/image'
import Link from 'next/link'
import { FaAngleRight } from "react-icons/fa"

export type Portfolio = {
    slug: string,
    content: string,
    data: {
        title: string,
        introduction: string,
        url: string,
        imageUrl: string,
        metaTitle: string,
        metaDescription: string,
        metaKeywords: string
    }
}

type Props = {
    portfolio: Portfolio[]
}

const PortfolioComponent = ({portfolio}: Props) => {

    const items = portfolio.map((item, index) => {
        return (
            <div key={index} className="p-4 w-full md:w-1/2">
                <div className="flex relative shadow hover:shadow-xl">
                    <div className="relative w-full h-64 bg-gray-200 dark:bg-gray-700">
                        {item.data.imageUrl &&
                            <Image src={item.data.imageUrl} alt={item.data.title} layout="fill" objectFit="cover" loading="eager" priority/>
                        }
                    </div>
                    <div className="p-4 absolute inset-0 bg-lime-200 dark:bg-lime-700 opacity-0 hover:opacity-90 transition-opacity duration-500">
                        <h3 className="">{item.data.title}</h3>
                        <p className="jost text-justify">
                            {item.data.introduction}
                        </p>
                        <p className="pt-4 text-right">
                            <Link href={'/portfolio/'+item.slug}>
                                <a className="uppercase p-4 -mr-4">
                                    <FaAngleRight className="inline -mt-1"/> Read more
                                </a>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            <h2 className="text-center">Portfolio</h2>
            <div className="mt-8 flex flex-row flex-wrap -m-4">
                {items}
            </div>
        </>
    )
}

export default PortfolioComponent