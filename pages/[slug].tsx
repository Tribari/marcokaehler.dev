import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {remark} from 'remark'
import html from 'remark-html'
import { getAllPageSlugs, getPageBySlug } from '@/lib/pages'
import generalData from '@/data/general.json'

type Props = {
    content: string,
    title: string,
    metaTitle: string,
    metaDescription: string,
    metaKeywords: string,
    imageUrl?: string
}

const Page: NextPage<Props> = ({content, title, metaTitle, metaDescription, metaKeywords, imageUrl}) => {
  return (
    <>
        <Head>
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription}/>
            <meta name="keywords" content={metaKeywords}/>
        </Head>

        {imageUrl &&
            <div className="-m-12 mb-12">
                <div className="relative w-full h-80">
                    <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" loading="eager" priority/>
                </div>
            </div>
        }

        <main id="about" className="lg:px-16 xl:px-80">
            <h1 className="text-center my-12 border-b-2 border-slate-100 dark:border-slate-800">
                {title}
            </h1>
            <div className="markdown jost" dangerouslySetInnerHTML={{ __html: content }}/>
        </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({params}: any) => {
    const page = getPageBySlug(params.slug)
    const result = await remark().use(html).process(page.content)
    return {
        props: {
            content: result.toString(),
            title: page.data.title,
            description: "",
            metaTitle: (page.data.metaTitle ? page.data.metaTitle : page.data.title) + ' | ' + generalData.meta_title,
            metaDescription: page.data.metaDescription,
            metaKeywords: page.data.metaKeywords,
            imageUrl: page.data.imageUrl ? page.data.imageUrl : ''
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = getAllPageSlugs()

    const paths = slugs.map((slug) => ({
        params: { slug: slug }
    }))
    return {
        paths,
        fallback: false
    }
}

export default Page
