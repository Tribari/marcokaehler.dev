import SummaryComponent, {Summary} from '@/components/summary'
import SkillsComponent, {Skills} from '@/components/skills'
import AboutComponent, {About} from '@/components/about'
import CareerComponent, {Career} from '@/components/career'
import PortfolioComponent, { Portfolio } from '@/components/portfolio'
import CTAComponent from '@/components/cta'
import { ComputerDesktopIcon, ComputerHeadsetIcon, HelloIcon } from '@/components/icons'
import { getAllPortfolio } from '@/lib/portfolio'
import { getAllCareer } from '@/lib/career'
import { getAllAbout } from '@/lib/about'
import type { NextPage, GetStaticProps } from 'next'
import Image from  'next/image'
import Head from 'next/head'
import generalData from '@/data/general.json'
import summaryData from '@/data/summary.json'
import skillsData from '@/data/skills.json'
import imageLoader from '@/lib/imgloader'

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
    <div className="frontpage">
        <Head>
            <title>{metaTitle}</title>
        </Head>

        <section id="summary">
          <div className="grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-1 text-center lg:pt-24 ">
              <div className="p-4 xl:p-0 max-w-xs mx-auto">
                <Image loader={imageLoader} alt={generalData.site_title} src="/images/portrait.jpg" width={360} height={360} layout="responsive" objectFit="cover" priority className="rounded-full"/>
              </div>
            </div>
            <div className="lg:col-span-2">
              <SummaryComponent summary={summary}/>
            </div>
          </div>
        </section>

        <CTAComponent title="Available part-time as an employee or external!" buttonHref={generalData.contact.mail} />

        <section id="about">
          <div className="grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-1 text-center lg:pt-20">
              <HelloIcon/>
            </div>
            <div className="lg:col-span-2 ">
              <AboutComponent about={about}/>
            </div>
          </div>
        </section>

        <CTAComponent title="Would you like to get to know me?" buttonHref={generalData.contact.mail} />

        <section id="skills">
          <div className="grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-1 text-center lg:pt-20">
              <ComputerHeadsetIcon/>
            </div>
            <div className="lg:col-span-2 ">
              <SkillsComponent skills={skills}/>
            </div>
          </div>
        </section>

        <CTAComponent title="I am an all-rounder and open to new things!" buttonHref={generalData.contact.mail} />

        <section id="career">
          <div className="grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-1 text-center lg:pt-24">
              <ComputerDesktopIcon/>
            </div>
            <div className="lg:col-span-2">
              <CareerComponent career={career}/>
            </div>
          </div>
        </section>

        <CTAComponent title="My experience for your success!" buttonHref={generalData.contact.mail} />

        <section id="portfolio">
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
