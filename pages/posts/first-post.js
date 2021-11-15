import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

const FirstPost = () => {
    return (
        <>
            <Layout>
                <Head>
                    <title>First Post</title>
                </Head>
                <h1>First Post!</h1>
                <footer>
                    <Link href="/">
                        <a>Back to home</a>
                    </Link>
                </footer>
            </Layout>
        </>
    );
}

export default FirstPost;