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
    <ul className="nav nav-pills nav-override mb-4 justify-content-center">
      { pages.map(({ slug, title }) => (
        <li className="nav-item" key={slug}>
          <a className={`nav-link ${slug === pathname ? 'active' : ''}`} href={slug}>{title}</a>
        </li>
      )) }
    </ul>
  )
};

export default Nav;
