import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

const metaDefault = {
    title: 'anaecha',
    description: ''
};

export default function Layout({ meta=metaDefault, children }) {
    return (
        <>
            <Head>
                <title>{meta.title}</title>
            </Head>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};