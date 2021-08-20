import PageLayout from '../layouts/PageLayout';
import { getFileBySlug, getFilesPaths } from '../lib/mdx';
import LayoutWrapper from '../components/LayoutWrapper';

export async function getStaticPaths() {
    const paths = getFilesPaths('pages');
    return {
        paths,
        fallback: false
    };
};

export async function getStaticProps({ params: { slug } }) {
    return {
        props: await getFileBySlug('pages', slug)
    };
};

export default function BlogPage({ data, content }) {
    return (
        <LayoutWrapper meta={data}>
            <PageLayout meta={data} content={content} />
        </LayoutWrapper>
    );
};