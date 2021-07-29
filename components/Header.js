import Link from 'next/link';

export default function Nav() {
    return (
        <header className="flex items-center justify-between w-full max-w-4xl px-4 md:py-10 py-4 mx-auto sticky-nav">
            <nav>
                <ul className="flex justify-between space-x-3">
                    <li><Link href="/"><a className="bg-gray-500 py-1 px-3 rounded-full text-white">Home</a></Link></li>
                    <li><Link href="/"><a className="bg-gray-500 py-1 px-3 rounded-full text-white">Blog</a></Link></li>
                    <li><Link href="/about"><a className="bg-gray-500 py-1 px-3 rounded-full text-white">About</a></Link></li>
                </ul>
            </nav>
            <div>
                <input type="checkbox" className="checkbox" id="checkbox" />
                <label htmlFor="checkbox" className="label">
                    <div className="ball"></div>
                </label>
            </div>
        </header>
    );
};

