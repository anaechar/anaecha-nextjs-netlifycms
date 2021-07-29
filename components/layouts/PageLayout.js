import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';

const components = {};

export default function PagePost({ meta, content }) {
    return (
        <article className="w-full max-w-2xl mx-auto p-4">
            <section className="py-6">
                <h1 className="text-5xl font-medium">{meta.title}</h1>
                <div className="flex justify-between ">
                    <div>White · {meta.date}</div>
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