import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css';
import getSortedPostsData from '/lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData
        }
    }
}

const Home = ({ allPostsData }) => {
    const introduction = "United States Army veteran and professional with over 7 years of experience providing solutions in the areas of implementation of database systems; incident response and custom software development using Python, Linux Shell Scripting, Java, and JavaScript; implementation of cloud computing services using Chef Automation Infrastructure and Ruby; large-scale cloning and tuning of systems for disaster recovery using Site Recovery Manager, vSphere, WebSphere, and Linux Shell Script.";
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p className={utilStyles.introduction}>{ introduction }</p>
        </section>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
              <h2 className={utilStyles.headingLg}>Blog Section</h2>
              <ul className={utilStyles.list}>
                  {allPostsData.map(({ id, date, title }) => (
                      <li className={utilStyles.listItem} key={id}>
                          <Link href={`/posts/${id}`}>
                              <a>{title}</a>
                          </Link>
                          <br />
                          <small className={utilStyles.lightText}>
                              <Date dateString={date} />
                          </small>
                      </li>
                  ))}
              </ul>
          </section>
      </Layout>
  )
}

export default Home;
