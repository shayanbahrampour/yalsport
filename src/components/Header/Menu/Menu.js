import styles from './menu.module.css';
import OutsideClickHandler from 'react-outside-click-handler';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Menu({ closeModal, setModal, modal }) {
  const location = useLocation();
  const { pathname } = location;

  const splitLocation = pathname.split('/');

  return (
    <OutsideClickHandler onOutsideClick={() => setModal(false)}>
      <div modal={modal} className={styles.responsive_menu}>
        <button
          className={cn('button-tiny', styles.close_button)}
          onClick={closeModal}
        >
          <svg
            width='44'
            height='44'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M8 12H16M12 8L12 16'
              strokeWidth='1'
              strokeLinecap='round'
            />
          </svg>
        </button>
        <ul className={styles.menu}>
          <NavLink
            className={cn(
              splitLocation[1] === '/' ? 'button-small active' : 'button-small'
            )}
            to='/'
            onClick={closeModal}
          >
            Home V1
          </NavLink>

          <NavLink
            className={cn(
              splitLocation[1] === '/homev2'
                ? 'button-small active'
                : 'button-small'
            )}
            to='/homev2'
            onClick={closeModal}
          >
            Home V2
          </NavLink>
          <NavLink
            className={cn(
              splitLocation[1] === '/homev3'
                ? 'button-small active'
                : 'button-small'
            )}
            to='/homev3'
            onClick={closeModal}
          >
            Home V3
          </NavLink>
        </ul>
      </div>
    </OutsideClickHandler>
  );
}
