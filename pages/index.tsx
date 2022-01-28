import SummaryComponent, {Summary} from '@/components/summary'
import SkillsComponent, {Skills} from '@/components/skills'
import AboutComponent, {About} from '@/components/about'
import CareerComponent, {Career} from '@/components/career'
import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import generalData from '../_settings/general.json'
import summaryData from '../_frontpage/summary.json'
import skillsData from '../_frontpage/skills.json'
import aboutData from '../_frontpage/about.json'
import careerData from '../_frontpage/career.json'

type Props = {
  metaTitle: string,
  summary: Summary,
  skills: Skills,
  about: About,
  career: Career
}

const Home: NextPage<Props> = ({metaTitle, summary, skills, about, career}: Props) => {
  return (
    <div>
        <Head>
            <title>{metaTitle}</title>
        </Head>

        <div className="lg:pb-16 lg:px-16 xl:pb-24 xl:px-80">
          <SummaryComponent summary={summary}/>
        </div>

        <div className="lg:pb-16 lg:px-16 xl:py-24 xl:px-80">
          <AboutComponent about={about}/>
        </div>

        <div className="lg:pb-16 lg:px-16 xl:py-24 xl:px-80">
          <SkillsComponent skills={skills}/>
        </div>

        <div className="lg:pb-16 lg:px-16 xl:py-24 xl:px-80">
          <CareerComponent career={career}/>
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
          skills: skillsData,
          about: aboutData,
          career: careerData
      }
  }
}

export default Home
