import Header from './Header';
import Footer from './Footer';
import { useRouter } from 'next/router';
import Head from 'next/head';

const LayoutWrapper = ({ children, meta }) => {
    const router = useRouter();
    const asPath = router.asPath;
    let isAdminPage = false;
    if(router.pathname.includes('/admin')) {
        isAdminPage = true;
    }
    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <link rel="canonical" href={`${process.env.SITE_BASE_URL}${asPath}`} />
                <meta name="description" content={meta.description} />
                <meta name="robots" content={meta.robots ? 'index, follow' : 'noindex, nofollow'} />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            { isAdminPage ? null : <Header /> }
            <main className={isAdminPage ? '' : 'w-full max-w-2xl mx-auto px-4 py-12' }>{children}</main>
            { isAdminPage ? null : <Footer /> }
        </>
    );
};

export default LayoutWrapper;