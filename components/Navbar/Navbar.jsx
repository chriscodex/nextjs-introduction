import Link from 'next/link'

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/" legacyBehavior prefetch={ false }>
            <a>Home</a>
          </Link>
        </li>
        <li>
        </li>
      </ul>
    </nav>
  )
}

export { Navbar }