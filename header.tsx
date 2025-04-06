import Link from "next/link"

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4">
      <h1 className="text-2xl font-bold">Pete Thinkful | Artist</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="#about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="#portfolio" className="hover:underline">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

