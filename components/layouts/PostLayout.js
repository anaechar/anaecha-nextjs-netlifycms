import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import Link from 'next/link';

const components = {
    img: (props) => <Image {...props} width={1200} height={800} />,
    a: (props) => {
        const href = props.href;
        const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));
        if(isInternalLink) {
            return (
                <Link href={href}>
                    <a {...props}>{props.children}</a>
                </Link>
            );
        }
        return <a {...props} />
    }
};

export default function BlogPost({ meta, content }) {
    return (
        <article className="w-full max-w-2xl mx-auto p-4">
            <section className="py-8">
                <h1 className="py-2 text-5xl font-medium">{meta.title}</h1>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <Link href="/about">White</Link>
                        <span> · {meta.date}</span>
                    </div>
                    <div>{meta.category}</div>
                </div>
            </section>
            <section>
                <MDXRemote 
                    {...content} 
                    components={components} 
                />
            </section>
        </article>
    );
};