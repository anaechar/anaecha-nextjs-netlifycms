import NextLink from 'next/link';
import { getAllFilesFrontMatter } from '../lib/mdx';
import LayoutWrapper from '../components/LayoutWrapper';
import meta from '../contents/meta.json';
import hero from '../contents/hero.json';

export default function HomePage({ allFilesFrontMatter }) {
  return (
    <LayoutWrapper meta={meta}>
      {
        hero.display 
        ?
        <section>
          <h2 className="text-5xl font-bold my-4">{hero.header}</h2>
          <p className="mb-1rem">{hero.content}</p>
        </section>
        : null
      }
      <section>
        <h2 className="text-3xl font-bold my-4">Latest Articles:</h2>
        {
          allFilesFrontMatter.map((fileFrontMatter) => {
            const { title, slug, publishedDate, category, tags } = fileFrontMatter;
            return (
              <div key={slug} className="my-3">
                <h4 className="text-base font-normal"><NextLink href={`/blog/${slug}`}>{title}</NextLink></h4>
                <div className="text-xs text-gray-400 dark:text-gray-500">{publishedDate}, {category} {tags}</div>
              </div>
            );
          })
        }
      </section>
    </LayoutWrapper>
  );
};

export async function getStaticProps() {
  const allFilesFrontMatter = await getAllFilesFrontMatter('posts');
  return { props: { allFilesFrontMatter }};
};