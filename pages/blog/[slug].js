import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import GlobalLayout from '../../components/layouts/GlobalLayout';
import PostLayout from '../../components/layouts/PostLayout';
import mdxPrism from 'mdx-prism';

export default function BlogPage({ data, content }) {
    return (
        <GlobalLayout
            meta={data}
        >
            <PostLayout meta={data} content={content} />
        </GlobalLayout>
    );
};

export async function getStaticPaths() {
    const mdxs = fs.readdirSync('contents/posts');
    const paths = mdxs.map(mdx => ({
        params: { slug: mdx.replace('.mdx','') }
    }));
    return {
        paths,
        fallback: false
    };
};

export async function getStaticProps({ params: { slug } }) {
    const mdx = fs.readFileSync(path.join('contents/posts', slug + '.mdx')).toString();
    const { content, data } = matter(mdx);
    const serializedContent = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [mdxPrism]
        }
    });
    return {
        props: {
            content: serializedContent,
            data
        }
    };
};