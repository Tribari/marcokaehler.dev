import { getAllPortfolioSlugs, getPortfolioBySlug } from '@/lib/portfolio'
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {remark} from 'remark'
import html from 'remark-html'
import { FaExternalLinkAlt } from "react-icons/fa"
import generalData from '@/data/general.json'
import GalleryComponent from '@/components/gallery'
import imageLoader from '@/lib/imgloader'

type Props = {
    content: string,
    title: string,
    url: string,
    imageUrl?: string,
    images?: string[],
    metaTitle: string,
    metaDescription: string,
    metaKeywords: string
}

const Portfolio: NextPage<Props> = ({content, title, url, metaTitle, metaDescription, metaKeywords, imageUrl, images}) => {
  return (
    <div>
        <Head>
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription}/>
            <meta name="keywords" content={metaKeywords}/>
        </Head>

        <div className="text-center border-b-2">
            <h1>{title}</h1>
        </div>

        <div className="flex flex-row flex-wrap">
            <div className="lg:p-4 mt-4 w-full lg:w-1/3">
                {imageUrl &&
                    <div className="relative w-full h-80 lg:h-40 xl:h-80">
                        <Image loader={imageLoader} src={imageUrl} alt={title} layout="fill" objectFit="cover" loading="eager" priority/>
                    </div>
                }
                {images && 
                    <GalleryComponent images={images}/>
                }
                <p className="text-right mt-4">
                    <Link href={url}>
                        <a target="_blank" className="button-blue mb-4">
                            <FaExternalLinkAlt className="inline text-sm -mt-1"/> Visit Project
                        </a>
                    </Link>
                </p>
            </div>

            <div className="lg:p-4 w-full lg:w-2/3 ">
                <div className="jost">
                    <div className="markdown" dangerouslySetInnerHTML={{ __html: content }}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({params}: any) => {
    const portfolio = getPortfolioBySlug(params.slug)
    const result = await remark().use(html).process(portfolio.content)
    return {
        props: {
            content: result.toString(),
            title: portfolio.data.title,
            url: portfolio.data.url,
            metaTitle: (portfolio.data.metaTitle ? portfolio.data.metaTitle : portfolio.data.title) + ' | ' + generalData.meta_title,
            metaDescription: portfolio.data.metaDescription,
            metaKeywords: portfolio.data.metaKeywords,
            imageUrl: portfolio.data.imageUrl ? portfolio.data.imageUrl : '',
            images: portfolio.gallery ? portfolio.gallery : ''
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = getAllPortfolioSlugs()

    const paths = slugs.map((slug) => ({
        params: { slug: slug }
    }))
    return {
        paths,
        fallback: false
    }
}

export default Portfolio
