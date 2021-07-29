import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import GlobalLayout from '../components/layouts/GlobalLayout';
import PageLayout from '../components/layouts/PageLayout';

export default function Blog({ data, content }) {
    return (
        <GlobalLayout
            meta={data}
        >
            <PageLayout meta={data} content={content} />
        </GlobalLayout>
    );
};

export async function getStaticPaths() {
    const mdxs = fs.readdirSync('contents/pages');
    const paths = mdxs.map(mdx => ({
        params: { slug: mdx.replace('.mdx','') }
    }));
    return {
        paths,
        fallback: false
    };
};

export async function getStaticProps({ params: { slug } }) {
    const mdx = fs.readFileSync(path.join('contents/pages', slug + '.mdx')).toString();
    const { content, data } = matter(mdx);
    if(data.date) {
        data.date = data.date.toString();
    }
    const serializedContent = await serialize(content);
    return {
        props: {
            content: serializedContent,
            data
        }
    };
};