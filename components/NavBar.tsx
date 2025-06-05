import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">
            <a className="hover:underline">首页</a>
          </Link>
        </li>
        <li>
          <Link href="/events">
            <a className="hover:underline">活动</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="hover:underline">关于我们</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
