export const Connect = () => {

  const links = [
    {
      name: "mail",
      link: "mailto:deewakar.tech@gmail.com"
    },
    {
      name: "github",
      link: "https://github.com/deewakar-k"
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/deewakar-kumar-9b026b270/"
    },
    {
      name: "x",
      link: "https://x.com/deewakar01"
    },
  ]

  return (
    <div className="space-x-3">
      {links.map((link, index) => (
        <span key={index} className="hover:clickable">
          <a href={link.link} target="_blank">{link.name}</a>
        </span>
      ))}
    </div>
  )
}
