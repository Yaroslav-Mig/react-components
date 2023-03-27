import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import css from './Layout.module.css';
import logo from '../logo.svg';

type LayoutProps = {
  children: ReactNode;
};

export const PATH = {
  BUTTON: '/button',
  BUTTON_GROUP: '/button-group',
  ICON: '/icon',
  IMAGE: '/image',
	CHIP: '/chip',
	BADGE: '/badge'
} as const;

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
						<li>
              <NavLink to={PATH.IMAGE} className={setActive}>
                Image
              </NavLink>
						</li>
						<li>
							<NavLink to={PATH.CHIP} className={setActive}>
                Chip
              </NavLink>
						</li>
						<li>
							<NavLink to={PATH.BADGE} className={setActive}>
                Badge
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
