import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import generalData from './api/general.json'

type Props = {
    title: string,
    description: string,
    metaTitle: string,
    metaDescription: string,
    metaKeywords: string
}

const Page: NextPage<Props> = ({title, description, metaTitle, metaDescription, metaKeywords}) => {
  return (
    <div>
        <Head>
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription}/>
            <meta name="keywords" content={metaKeywords}/>
        </Head>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({params}) => {

    const page = await import(`./api/pages/${params?.slug}.json`)
    
    return {
        props: {
            title: page.title,
            description: page.description,
            metaTitle: page.meta_title + ' | ' + generalData.meta_title,
            metaDescription: page.meta_description,
            metaKeywords: page.meta_keywords
        },
        revalidate: 60
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const dir = path.resolve('./pages/api/pages')
    const files = fs.readdirSync(dir)
    const paths = files.map((file) => ({
        params: { slug: file.replace(/\.[^/.]+$/, "") }
    }))
    return {
        paths,
        fallback: 'blocking'
    }
}

export default Page
