import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import mdxPrism from 'mdx-prism';

export function dateSortDesc(a, b) {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
};

export async function getAllFilesFrontMatter(folder) {
    const slugs = fs.readdirSync(`contents/${folder}`);
    const allFilesFrontMatter = [];
    slugs.forEach((slug) => {
        const post = fs.readFileSync(path.join(`contents/${folder}`, slug));
        const { data } = matter(post);
        if(data.draft !== true) {
            allFilesFrontMatter.push(data);
        }
    })
    return allFilesFrontMatter.sort((a, b) => dateSortDesc(a.timestamp, b.timestamp));
};

export function getFilesPaths(folder) {
    const files = fs.readdirSync(`contents/${folder}`);
    return files.map(file => ({
        params: { slug: file.replace('.mdx','') }
    }));
};

export async function getFileBySlug(folder, slug) {
    const file = fs.readFileSync(path.join(`contents/${folder}`, slug + '.mdx')).toString();
    const { content, data } = matter(file);
    const serializedContent = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [mdxPrism]
        }
    });
    return {
        content: serializedContent,
        data
    };
};

export async function filterPostsByCategory(name) {
    const postsFrontMatters = await getAllFilesFrontMatter('posts');
    const postsFrontMattersByCategory = [];
    postsFrontMatters.forEach(frontMatter => {
        const categories = frontMatter.category;
        categories.forEach((category) => {
            if(category === name) {
                postsFrontMattersByCategory.push(frontMatter);
            }
        });
    });
    return postsFrontMattersByCategory;
};