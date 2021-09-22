import ProjectLayout from '../../layouts/PostLayout';
import { getFileBySlug, getFilesPaths } from '../../lib/mdx';
import LayoutWrapper from '../../components/LayoutWrapper';

export async function getStaticPaths() {
    const paths = getFilesPaths('projects');
    return {
        paths,
        fallback: false
    };
};

export async function getStaticProps({ params: { slug } }) {
    return {
        props: await getFileBySlug('projects', slug)
    };
};

export default function ProjectPage({ data, content }) {
    return (
        <LayoutWrapper meta={data}>
            <ProjectLayout meta={data} content={content} />
        </LayoutWrapper>
    );
};