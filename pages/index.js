import NextLink from 'next/link'
import { getAllFilesFrontMatter } from '../lib/mdx';
import LayoutWrapper from '../components/LayoutWrapper';

export default function HomePage({ allFilesFrontMatter }) {
  const meta = {
    title: 'anaecha',
    description: 'my description...',
    robots: true
  };
  return (
    <LayoutWrapper meta={meta}>
      <section>
        <h2 className="text-5xl font-bold my-4">Hi, I'm White.</h2>
        <p className="mb-1rem">I'm a hobbyist web developer who also interested in Blockchain, Investment and Animation. To know me more, visit <NextLink href={'/about'}>About me page</NextLink>.</p>
      </section>
      <section>
        <h2 className="text-3xl font-bold my-4">Latest Articles:</h2>
        {
          allFilesFrontMatter.map((fileFrontMatter) => {
            const { title, slug, publishedDate, category, tags } = fileFrontMatter;
            return (
              <div key={slug} className="my-3">
                <h4 className="text-base font-normal"><NextLink href={`/blog/${slug}`}>{title}</NextLink></h4>
                <div className="text-xs text-gray-500">{publishedDate}, {category} {tags}</div>
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