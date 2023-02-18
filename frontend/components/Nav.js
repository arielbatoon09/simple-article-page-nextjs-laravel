import Link from "next/link";

function Nav() {
    return (
        <nav>
            <ul>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/">Services</Link>
            </ul>
        </nav>
    );
}

export default Nav;
