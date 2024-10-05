import Link from "next/link"

export const Navbar = () => {
  return (
    <main className="w-full flex items-center justify-start">
      <nav className="flex items-center gap-3">
        <Link href='/'>home</Link>
        <Link href='/projects'>projects</Link>
        <Link href='/notes'>notes</Link>
        <Link href='/cv'>cv</Link>
      </nav>
    </main>
  )
}
