import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import NextLink from 'next/link';
import { getCategoryFieldByInput } from '../lib/category';
import categoriesJSON from '../contents/categories.json';

const components = {
    a: (props) => {
        const href = props.href;
        const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));
        if(isInternalLink) {
            return (
                <NextLink href={href}>
                    <a {...props}>{props.children}</a>
                </NextLink>
            );
        }
        return <a {...props} />
    }
};

export default function PostLayout({ meta, content }) {
    const categories  = categoriesJSON.categories;
    return (
        <article className="prose dark:prose-dark w-full max-w-2xl mx-auto">
            <section className="mb-12">
                <div className="text-sm">
                    {
                        meta.category.map((category, i) => {
                            const categorySlug = getCategoryFieldByInput('name', categories, category).slug;
                            return (
                                <span key={categorySlug}><NextLink href={`/blog/category/${categorySlug}`}>{category}</NextLink>{i < meta.category.length - 1 ? ', ' : ''}</span>
                            );
                        })
                    }
                </div>
                <h1 className="py-2 text-5xl font-medium">{meta.title}</h1>
                <div className="flex justify-between">
                    <div className="flex items-center text-gray-500 dark:text-gray-500 text-sm">
                        <NextLink href="/about">White</NextLink>, {meta.publishedDate}
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