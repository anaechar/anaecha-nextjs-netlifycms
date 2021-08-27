import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import NextLink from 'next/link';

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

export default function PageLayout({ meta, content }) {
    return (
        <article className="prose dark:prose-dark w-full max-w-2xl mx-auto">
            <section className="mb-12">
                <h1 className="py-2 text-5xl font-medium">{meta.title}</h1>
                <div className="flex justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
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