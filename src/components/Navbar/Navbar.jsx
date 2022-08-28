import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './Navbar.scss';

const UserButton = ({ styleClass }) => (
  <div className={styleClass}>
    <p>Sign In</p>
    <button type='button'>Sign Up</button>
  </div>
);

export default function Navbar({ data }) {
  const { links, logo } = data;
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuLinks = links.map((link) => (<p key={link.title}><a href={link.url}>{link.title}</a></p>));
  const iconProps = { color: '#fff', size: 27, onClick: () => setToggleMenu(!toggleMenu) };

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3__navbar-links_container'>{menuLinks}</div>
      </div>

      <UserButton styleClass='gpt3__navbar-sign' />

      {/* MOBILE MENU */}
      <div className='gpt3__navbar-menu'>
        {toggleMenu ? <RiCloseLine {...iconProps} /> : <RiMenu3Line {...iconProps} />}
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              {menuLinks}
              <UserButton styleClass='gpt3__navbar-menu_container-links-sign' />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}