import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {remark} from 'remark'
import html from 'remark-html'
import { getAllPageSlugs, getPageBySlug } from '@/lib/pages'
import generalData from '../_settings/general.json'

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
    <div>
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

        <h1 className="font-vt323 text-6xl font-light uppercase tracking-widest text-center text-transparent bg-clip-text bg-gradient-to-b from-fuchsia-600 to-teal-400">
            {title}
        </h1>
        <div className="my-2 text-fuchsia-800 dark:text-teal-500">
            <div className="markdown" dangerouslySetInnerHTML={{ __html: content }}/>
        </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({params}: any) => {
    const page = getPageBySlug(params.slug)
    const result = await remark().use(html).process(page.content)
    return {
        props: {
            content: result.toString(),
            title: '>>' + page.data.title + '<<',
            description: "",
            metaTitle: (page.data.metaTitle ? page.data.metaTitle : page.data.title) + ' | ' + generalData.meta_title,
            metaDescription: page.data.metaDescription,
            metaKeywords: page.data.metaKeywords,
            imageUrl: page.data.imageUrl ? page.data.imageUrl : ''
        },
        revalidate: 60
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = getAllPageSlugs()

    const paths = slugs.map((slug) => ({
        params: { slug: slug }
    }))
    return {
        paths,
        fallback: 'blocking'
    }
}

export default Page
