import SummaryComponent, {Summary} from '@/components/summary'
import SkillsComponent, {Skills} from '@/components/skills'
import AboutComponent, {About} from '@/components/about'
import CareerComponent, {Career} from '@/components/career'
import PortfolioComponent, { Portfolio } from '@/components/portfolio'
import LaunchIcon from '@/components/icons/launch'
import { getAllPortfolio } from '@/lib/portfolio'
import { getAllCareer } from '@/lib/career'
import { getAllAbout } from '@/lib/about'
import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import generalData from '@/data/general.json'
import summaryData from '@/data/summary.json'
import skillsData from '@/data/skills.json'


type Props = {
  metaTitle: string,
  summary: Summary,
  skills: Skills,
  about: About[],
  career: Career[],
  portfolio: Portfolio[]
}

const Home: NextPage<Props> = ({metaTitle, summary, skills, about, career, portfolio}: Props) => {
  return (
    <div>
        <Head>
            <title>{metaTitle}</title>
        </Head>

        <section className="lg:pb-16 xl:pb-24 grid grid-cols-1 xl:grid-cols-3 lg:gap-24">
          <div className="flex flex-col justify-center ">
              <LaunchIcon/>
          </div>
          <div className="lg:col-span-2">
            <SummaryComponent summary={summary}/>
          </div>
        </section>

        <section id="about" className="py-36 lg:px-16 xl:px-80">
          <AboutComponent about={about}/>
        </section>

        <section id="skills" className="py-36 lg:px-16 xl:px-80">
          <SkillsComponent skills={skills}/>
        </section>

        <section id="career" className="py-36 lg:px-16 xl:px-80">
          <CareerComponent career={career}/>
        </section>

        <section id="portfolio" className="py-36 lg:px-16 xl:px-80">
          <PortfolioComponent portfolio={portfolio}/>
        </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({params}) => {

  const portfolio = getAllPortfolio()
  const career = getAllCareer()
  const about = await getAllAbout()

  return {
      props: {
          metaTitle: 'Home | ' + generalData.meta_title,
          summary: summaryData,
          skills: skillsData,
          about: about,
          career: career,
          portfolio: portfolio
      }
  }
}

export default Home
