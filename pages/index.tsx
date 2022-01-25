import SummaryComponent, {Summary} from '@/components/summary'
import SkillsComponet, {Skills} from '@/components/skills'
import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import generalData from '../_settings/general.json'
import summaryData from '../_settings/summary.json'
import skillsData from '../_settings/skills.json'
import SkillsComponent from '@/components/skills'

type Props = {
  metaTitle: string,
  summary: Summary,
  skills: Skills
}

const Home: NextPage<Props> = ({metaTitle, summary, skills}: Props) => {
  return (
    <div>
        <Head>
            <title>{metaTitle}</title>
        </Head>

        <div className="lg:my-12 lg:mx-24 ">
          <SummaryComponent summary={summary}/>
        </div>

        <div className="lg:my-12 lg:mx-24 ">
          <SkillsComponent skills={skills}/>
        </div>

        <div className="my-2 text-fuchsia-800 dark:text-teal-500 transition-colors">
            <div className="markdown">
              
            </div>
        </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({params}) => {

  return {
      props: {
          metaTitle: 'Home | ' + generalData.meta_title,
          summary: summaryData,
          skills: skillsData
      },
      revalidate: 60
  }
}

export default Home
