import Link from "next/link";

const Navbar = () => {
    return (
        <div className="bg-blue-500 p-4 flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold">Navbar</h1>
            <ul className="flex gap-4">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;