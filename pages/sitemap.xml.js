import { getAllFilesFrontMatter } from '../lib/mdx';

const Sitemap = () => {};

export async function getServerSideProps({ res }) {
    const baseUrl = process.env.SITE_BASE_URL;

    // Get all "published" pages
    const pages = await getAllFilesFrontMatter('pages', false);
    let pageUrls = pages.map((page) => `/${page.slug}`);
    pageUrls = [ ...pageUrls, '/blog', '/projects' ];

    // Get all "published" posts
    const posts = await getAllFilesFrontMatter('posts', false);
    const postUrls = posts.map((post) => `/blog/${post.slug}`);

    // Get all "published" projects
    const projects = await getAllFilesFrontMatter('projects', false);
    const projectUrls = projects.map((project) => `/projects/${project.slug}`);

    const allUrls = [...pageUrls, ...postUrls, ...projectUrls];
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
        <url>
            <loc>${baseUrl}</loc>
        </url>
        ${allUrls
            .map((url) => {
                return `
                    <url>
                        <loc>${baseUrl}${url}</loc>
                    </url>
                `;
            })
            .join("")}
        </urlset>
        `;
    
        res.setHeader("Content-Type", "text/xml");
        res.write(sitemap);
        res.end();

    return {
        props: {},
    };
};

export default Sitemap;