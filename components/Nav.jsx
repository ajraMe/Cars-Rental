"use client";

import Link from "next/Link";
import { usePathname } from "next/navigation";


const links = [
  {
    name: 'welcome',
    path: '/'
  },
  {
    name: 'Cars',
    path: '/home'
  },
  {
    name: 'services',
    path: '/services'
  },
  {
    name: 'About us',
    path: '/aboutus'
  },

]
const Nav = () => {
  const pathname = usePathname();
  return (
  <nav className="flex gap-8">
    {links.map((link, index)=> {
      return (
        <Link
        href={link.path}
        key={index}
        className={`${
        link.path === pathname && "text-red-600 border-b-2 border-red-600"
        } capitalize font-medium hover:text-red-600 transition-all`}
        >
        {link.name}
      </Link>
      );
    })}
  </nav>
);
};

export default Nav
