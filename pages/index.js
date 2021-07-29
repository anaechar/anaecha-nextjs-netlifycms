import NextLink from 'next/link';
import fs from 'fs';
import path from 'path';
import GlobalLayout from '../components/layouts/GlobalLayout';
import matter from 'gray-matter';

export default function Home({ posts }) {
  return (
    <GlobalLayout>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <div className="text-5xl font-bold py-6">Hi! I am White.</div>
        <p className="mb-6">I am the founder of anaecha.com, a pilot, and also interested in coding, animation, and investing. To know me more, visit <NextLink href="/about">about me</NextLink>.</p>
        
        <h2 className="text-2xl py-2">Latest Articles</h2>
          {posts.map(post => {
            return (
              <div key={post.slug}>
                <NextLink href={`/blog/${post.slug}`}>
                  {post.title}
                </NextLink>
              </div>
            )
          })}
      </div>
    </GlobalLayout>
  );
};

export async function getStaticProps() {
  const slugs = fs.readdirSync('contents/posts');
  const posts = slugs.map(slug => {
    const post = fs.readFileSync(path.join('contents/posts', slug));
    const { data } = matter(post);
    slug = slug.replace('.mdx','');
    const items = {
      slug,
      title: data.title,
      publishedDate: data.publishedDate
    };
    return items;
  });

  return {
    props: {
      posts
    }
  };
};