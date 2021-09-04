import NextLink from 'next/link';
import { MDXRemote } from 'next-mdx-remote';

export default function PostLayout({ meta, content }) {
    return (
        <article>
            <section className="mb-12">
                <h1 className="py-2 text-5xl font-medium">{meta.title}</h1>
                <div className="flex justify-between">
                    <div className="flex items-center text-gray-500 dark:text-gray-500 text-sm">
                        {meta.publishedDate}
                    </div>
                </div>
            </section>
            <section className="post-body">
                <MDXRemote 
                    {...content} 
                    components={components} 
                />
            </section>
        </article>
    );
};