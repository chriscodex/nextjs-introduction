import Link from 'next/link'

function Navbar() {
  return (
    <nav className='navbar-color'>
      <ul>
        <li>
          <Link href="/" legacyBehavior prefetch={ false }>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about" legacyBehavior prefetch={ false } >
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export { Navbar }