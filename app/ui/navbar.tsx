import Link from "next/link"

const Nav = [
  {
    path: '/',
    name: 'home'
  },

  {
    path: '/projects',
    name: 'projects'
  },

  {
    path: '/notes',
    name: 'notes'
  },

  {
    path: 'https://read.cv/dazai',
    name: 'cv'
  },
]

export const Navbar = () => {
  return (
    <main className="w-full flex items-center justify-start">
      <nav className="flex items-center gap-3 ">
        {Nav.map((nav) => (
          <>
            <Link href={nav.path} className="hover:clickable">{nav.name}</Link>
          </>
        ))}
      </nav>
    </main>
  )
}
