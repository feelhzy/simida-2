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
          <Link href="/community">
            <a className="hover:underline">社区</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="hover:underline">关于我们</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className="hover:underline">联系我们</a>
          </Link>
        </li>
        <li>
          <Link href="/faq">
            <a className="hover:underline">FAQ</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
