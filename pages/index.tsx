import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import generalData from './api/general.json'

type Props = {
  metaTitle: string
}

const Home: NextPage<Props> = ({metaTitle}) => {
  return (
    <div>
        <Head>
            <title>{metaTitle}</title>
        </Head>
        <h1 className="text-3xl font-bold">Welcome home</h1>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({params}) => {

  return {
      props: {
          metaTitle: 'Home | ' + generalData.meta_title,
      },
      revalidate: 60
  }
}

export default Home
