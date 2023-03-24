import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import s from './PageNavLink.module.scss';

interface Props {
  to: string;
  title: string;
}

export const PageNavLink: React.FC<Props> = React.memo(({ to, title }) => {
  return (
    <NavLink to={to} className={({ isActive }) => cn(
      `${s.nav__link}`,
      { [s.active]: isActive }
    )}>
      {title}
    </NavLink>
  );
});
