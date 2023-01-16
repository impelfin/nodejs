import Head from 'next/head'
import Layout from "../../components/layout";
import Date from "../../components/date";

import styles from '../../styles/Home.module.css';

import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticProps({ params }) {
    const Data = await getPostData(params.id);
    const postData = JSON.parse(JSON.stringify(Data))

    return {
      props: {
        postData,
      },
    };
  }

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.id}</title>
      </Head>
      <article>
        <h1 className={styles.headingXl}>{postData.title}</h1>
        <h3 className={styles.lightText}>{postData.id}</h3>
        <div className={styles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.summary }} />
        <br></br>
        <div dangerouslySetInnerHTML={{ __html: postData.renderTexts }} />
      </article>
    </Layout>
  );
}