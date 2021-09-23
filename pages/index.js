import NextLink from 'next/link';
import { getAllFilesFrontMatter } from '../lib/mdx';
import LayoutWrapper from '../components/LayoutWrapper';
import meta from '../contents/meta.json';

export async function getStaticProps() {
  const allFilesFrontMatter = await getAllFilesFrontMatter('posts', false);
  return { props: { allFilesFrontMatter }};
};

export default function HomePage({ allFilesFrontMatter }) {
  return (
    <LayoutWrapper meta={meta}>
      <section>
        <h2 className="text-5xl font-bold my-4">Hi, I'm White.</h2>
        <p className="mb-1rem">I write articles about Web Development, Blockchain, Animation and Invesment. To know me more, visit <NextLink href={'/about'}>About me</NextLink> page.</p>
      </section>
      <section>
        <h2 className="text-3xl font-bold my-4">Latest Articles:</h2>
        {
          allFilesFrontMatter.map((fileFrontMatter) => {
            const { title, slug, publishedDate, category } = fileFrontMatter;
            return (
              <div key={slug} className="my-3">
                <h4 className="text-base font-normal"><NextLink href={`/blog/${slug}`}>{title}</NextLink></h4>
                <div className="text-xs text-gray-500 dark:text-gray-500">{publishedDate}, {category}</div>
              </div>
            );
          })
        }
      </section>
    </LayoutWrapper>
  );
};