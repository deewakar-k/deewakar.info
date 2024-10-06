import Image from "next/image"

export const NotFound = () => {
  return (
    <>
      <h1 className="font-medium">404 - Page not found</h1>
      <div>
        <Image src='/videos/chemistry.gif' alt="gif" width={223} height={162} />
      </div>
    </>
  )
}
