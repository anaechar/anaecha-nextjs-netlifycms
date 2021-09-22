import NextLink from 'next/link';
import ThemeSwitch from './ThemeSwitch';

export default function Nav() {
    return (
        <header className="w-full sticky-nav bg-gray-50 dark:bg-gray-900">
            <div className="flex items-center justify-between w-full max-w-4xl px-4 py-4 mx-auto">
                <div>@</div>
                <nav>
                    <ul className="flex justify-between space-x-4 text-sm list-none p-0 m-0">
                        <li><NextLink href="/">Home</NextLink></li>
                        <li><NextLink href="/blog">Blog</NextLink></li>
                        <li><NextLink href="/projects">Projects</NextLink></li>
                        <li><NextLink href="/about">About</NextLink></li>
                    </ul>
                </nav>
                <ThemeSwitch />
            </div>
        </header>
    );
};

