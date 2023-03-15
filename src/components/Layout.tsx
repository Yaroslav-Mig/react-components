import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

type LayoutProps = {
  children: ReactNode;
};

type urlStr = '/button';

export const PATH: Record<string, urlStr> = {
  BUTTON: '/button',
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <aside>
        <nav>
          <ul className='nav'>
            <li>
              <NavLink to={PATH.BUTTON}>Button</NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      <main>{children}</main>
    </>
  );
};

export default Layout;
