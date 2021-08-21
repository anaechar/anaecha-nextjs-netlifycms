import NextLink from 'next/link';

export default function CategoryLayout({ name, frontMatters }) {
    return (
        <section>
            <h1>Category: {name}</h1>
            {
                frontMatters.map((frontMatter) => {
                    const { title, slug, publishedDate } = frontMatter;
                    return (
                        <div key={slug}>
                            <h2><NextLink href={`/blog/${slug}`}>{title}</NextLink></h2>
                            <div className="text-gray-500 dark:text-gray-500">{publishedDate}</div>
                        </div>
                    );
                })
            }
        </section>
    );
};