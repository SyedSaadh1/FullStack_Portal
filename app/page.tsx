import Link from 'next/link';

export default function Page() {
    return <h1 className="p-4 shadow-2xl">Hello, Next.js! <Link href="/login">Login</Link></h1>
}