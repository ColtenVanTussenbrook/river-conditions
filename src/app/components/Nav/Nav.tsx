import Link from 'next/link'

const Nav = () => {
  return (
    <div>
      <nav className="text-right m-8">
        <Link className="mr-4" href="/">
          HOME
        </Link>
        <Link className="mr-4" href="about">
          ABOUT
        </Link>
      </nav>
    </div>
  )
}

export default Nav
