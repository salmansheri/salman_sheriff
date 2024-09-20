const navLinks = [
  {
    id: 1,
    title: "Home",
    href: "#",
  },
  {
    id: 2,
    title: "Projects",
    href: "#projects",
  },
  {
    id: 3,
    title: "About",
    href: "#about",
  },
  {
    id: 4,
    title: "Contact",
    href: "#contact",
  },
];
export const Header = () => {
  return (
    <header className="flex justify-center items-center fixed w-full top-3">
      <nav className="flex gap-1 p-0.5 border items-center border-white/15 rounded-full bg-white/10 backdrop-blur ">
        {navLinks.map((link) => (
          <a className="nav-item" href={link.href} key={link.id}>
            {link.title}
          </a>
        ))}
      </nav>
    </header>
  );
};
