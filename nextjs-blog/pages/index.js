import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Link from "next/link";
import Date from "../components/date";
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home( allPostsData ) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Read {' '}
          <Link href="first-post">
            this Page!
          </Link>
        </h1>

        <h1 className="profile">
          Show {' '}
          <Link href="profile">
            profile
          </Link>
        </h1>

        {/* 아래 <section> 태그로 감싸진 부분을 추가해준다. */}
        <section >
            <h2>Blog</h2>
            <ul>
                {allPostsData.allPostsData.map(({ id, date, title }) => (
                    <li className={styles.listItem} key={id}>
                    <Link href={`/posts/${id}`}>
                      {title}
                    </Link>
                    <br />
                    <small className={styles.lightText}>
                      <Date dateString={date} />
                    </small>
                  </li>
                ))}
            </ul>
        </section>
      </main>

      <footer>
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}