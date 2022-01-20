import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import {remark} from 'remark'
import html from 'remark-html'
import { getAllPageSlugs, getPageBySlug } from '@/lib/pages'
import generalData from '../_settings/general.json'

type Props = {
    content: string,
    title: string,
    description: string,
    metaTitle: string,
    metaDescription: string,
    metaKeywords: string
}

const Page: NextPage<Props> = ({content, title, description, metaTitle, metaDescription, metaKeywords}) => {
  return (
    <div>
        <Head>
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription}/>
            <meta name="keywords" content={metaKeywords}/>
        </Head>
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="my-2">
            <div dangerouslySetInnerHTML={{ __html: content }}/>
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
            title: page.data.title,
            description: "",
            metaTitle: page.data.metaTitle + ' | ' + generalData.meta_title,
            metaDescription: page.data.metaDescription,
            metaKeywords: page.data.metaKeywords
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
