import React from 'react';
import { useRouter } from 'next/router';

const Nav = () => {
  const { pathname } = useRouter();
  const pages = [
    {
      slug: '/',
      title: 'Home'
    },
    {
      slug: '/visa',
      title: 'Visa Help'
    }
  ];

  return (
    <nav className="navbar navbar-expand navbar-light nav-override mb-4 justify-content-center">
      <ul className="navbar-nav">
        { pages.map(({ slug, title }) => (
          <li key={slug} className={`nav-item ${pathname === slug ? 'active' : ''}`}>
            <a className="nav-link" href={slug}>{title}</a>
          </li>
        )) }
      </ul>
    </nav>
  )
};

export default Nav;
