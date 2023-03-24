import React from 'react';
import { PageNavLink } from './PageNavLink';
import s from './NavBar.module.scss';

export const NavBar: React.FC = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.nav__list}>
        <li className={s.nav__item}>
          <PageNavLink to="/" title="Products" />
        </li>

        <li className={s.nav__item}>
          <PageNavLink to="product_add_form" title="Product add form" />
        </li>
      </ul>
    </nav>
  );
};
