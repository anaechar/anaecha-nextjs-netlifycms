import PostLayout from '../../layouts/PostLayout';
import { getFileBySlug, getFilesPaths } from '../../lib/mdx';
import LayoutWrapper from '../../components/LayoutWrapper';

export async function getStaticPaths() {
    const paths = getFilesPaths('posts');
    return {
        paths,
        fallback: false
    };
};

export async function getStaticProps({ params: { slug } }) {
    return {
        props: await getFileBySlug('posts', slug)
    };
};

export default function BlogPage({ data, content }) {
    return (
        <LayoutWrapper meta={data}>
            <PostLayout meta={data} content={content} />
        </LayoutWrapper>
    );
};