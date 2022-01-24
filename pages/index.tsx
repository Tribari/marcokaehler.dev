import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import generalData from '../_settings/general.json'

type Props = {
  metaTitle: string
}

const Home: NextPage<Props> = ({metaTitle}) => {
  const imageUrl = '/images/portrait.jpg'
  const age = Math.floor(((new Date()).valueOf() - (new Date("1983-12-11")).valueOf()) / 31557600000)

  return (
    <div>
        <Head>
            <title>{metaTitle}</title>
        </Head>

        <div className="lg:my-12 lg:mx-24 ">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-36">
            <div className="text-center">
                <div className="relative p-2 border-2 border-black dark:border-white rounded-full shadow-xl">
                  <Image 
                    className="rounded-full"
                    src={imageUrl} 
                    alt={generalData.site_title} 
                    layout="responsive" 
                    width="400" 
                    height="400" 
                    objectFit="cover" 
                    loading="eager" 
                    priority/>
                </div>
            </div>
            <div className="col-span-2 font-vt323 ">
                <h1 className="font-vt323 text-6xl font-light uppercase">
                  Marco Kähler at a glance
                </h1>
                <dl>
                  <dt>Profession</dt>
                  <dd>
                    Fullstack Web Developer (focus on frontend)<br/>
                    Web & Interface Designer<br/>
                    Partner at Internet Agency Kähler (society under civil law)
                    </dd>
                  <dt>Education</dt>
                  <dd>
                    Qualified IT-specialist for application development (IHK)<br/>
                    Media informatics (2 semesters at university of applied science)
                  </dd>
                  <dt>Skillset</dt>
                  <dd>
                    NEXT.js Development (TypeScript, React, Node.js, Prisma ORM, PSQL-DB)<br/>
                    PHP Development (Vanilla, Laravel, MySQL-DB, MongoDB)<br/>
                    CMS Development (Wordpress, Joomla, OctoberCMS, Strapi)<br/>
                    HTML Development (SCSS, Bootstrap-CSS, Tailwind-CSS, JQuery, Vanilla JS)<br/>
                    App Development Android & iOS (C# Xamarin-Framework)
                  </dd>
                  <dt>Spoken Languages</dt>
                  <dd>German (native), English</dd>
                  <dt>Current Age</dt>
                  <dd>{age} years and counting</dd>
                  <dt>Location</dt>
                  <dd>City of Hanover, Lower Saxony, Germany</dd>
                  <dt>Status</dt>
                  <dd><span className="bg-lime-200 dark:bg-lime-700 px-2">Available</span>  for hire/projects in part-time (60%)</dd>
                </dl>
                <p className="py-4">
                  <button className="mr-4 px-6 py-2 bg-sky-200 hover:bg-sky-300 dark:bg-sky-700 dark:hover:bg-sky-500">
                    Hire me
                  </button>
                  <button className="mr-4 px-6 py-2 bg-lime-200 hover:bg-lime-300 dark:bg-lime-700 dark:hover:bg-lime-500">
                    Hire me
                  </button>
                  <button className="mr-4 px-6 py-2 bg-yellow-200 hover:bg-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-500">
                    Hire me
                  </button>
                  <button className="mr-4 px-6 py-2 bg-red-200 hover:bg-red-400 dark:bg-red-800 dark:hover:bg-red-600">
                    Hire me
                  </button>
                  <button className="mr-4 px-6 py-2 bg-purple-200 hover:bg-purple-300 dark:bg-purple-700 dark:hover:bg-purple-500">
                    Hire me
                  </button>
                </p>
            </div>
          </div>
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
      },
      revalidate: 60
  }
}

export default Home
