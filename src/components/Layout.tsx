import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import css from './Layout.module.css';
import logo from '../logo.svg';

type LayoutProps = {
  children: ReactNode;
};

type urlStr = '/button' | '/button-group' | '/icon';

export const PATH: Record<string, urlStr> = {
  BUTTON: '/button',
  BUTTON_GROUP: '/button-group',
  ICON: '/icon',
};

const setActive = ({ isActive }: { isActive: boolean }): string | undefined => {
  return isActive ? css.active : undefined;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={css.container}>
      <aside className={css.sidebar}>
        <div className={css['logo-box']}>
          <img src={logo} className={css.logo} alt='logo' />
        </div>
        <nav>
          <ul className={css['nav-list']}>
            <li>
              <NavLink to={PATH.BUTTON} className={setActive}>
                Button
              </NavLink>
            </li>
            <li>
              <NavLink to={PATH.BUTTON_GROUP} className={setActive}>
                Button Group
              </NavLink>
            </li>
            <li>
              <NavLink to={PATH.ICON} className={setActive}>
                Icon
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      <main className={css['main-box']}>{children}</main>
    </div>
  );
};

export default Layout;
