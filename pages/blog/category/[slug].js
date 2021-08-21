import categoriesJSON from '../../../contents/categories.json';
import LayoutWrapper from '../../../components/LayoutWrapper';
import CategoryLayout from '../../../layouts/CategoryLayout';
import { filterPostsByCategory } from '../../../lib/mdx';
import { getCategoryFieldByInput } from '../../../lib/category';

const categories = categoriesJSON.categories;

export async function getStaticPaths() {
    const paths = categories.map(category => ({
            params: { slug: category.slug }
        }));
    return {
        paths,
        fallback: false
    };
};

export async function getStaticProps({ params: { slug } }) {
    const name = getCategoryFieldByInput('slug', categories, slug).name;
    const postsFrontMattersByCategory = await filterPostsByCategory(name);
    return { props: { name, frontMatters: postsFrontMattersByCategory } };
};

export default function CategoryPage({ name, frontMatters }) {
    const meta = {
        title: `Category: ${name}`,
        description: `The ${name} category page`,
        robots: false
    }
    return (
        <LayoutWrapper meta={meta}>
            <CategoryLayout name={name} frontMatters={frontMatters} />
        </LayoutWrapper>
    );
};