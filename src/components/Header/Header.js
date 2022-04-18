import cn from 'classnames';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Modal from '../Modal';
import styles from './header.module.css';
import Menu from './Menu';

const Header = () => {
  const [modal, setModal] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const location = useLocation();
  const { pathname } = location;

  const splitLocation = pathname.split('/');

  const closeModal = () => {
    setModal(false);
  };

  const openModal = () => {
    setModal(!modal);
  };

  const closeDropdown = () => {
    setDropdown(false);
  };

  const openDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <header className={styles.section}>
      <div className={cn('container', styles.container)}>
        <div className={styles.main_wrapper}>
          <NavLink className={cn('body-2-bold', styles.logo)} to='/'>
            Uriostegui<span>.</span>
          </NavLink>
          <div className={styles.break} />
          <div className={styles.mini_wrapper}>
            <NavLink
              className={cn(
                splitLocation[1] === '' ? 'button-small active' : 'button-small'
              )}
              to=''
            >
              Home V1
            </NavLink>
            <NavLink
              className={cn(
                splitLocation[1] === 'homev2'
                  ? 'button-small active'
                  : 'button-small'
              )}
              to='/homev2'
            >
              Home V2
            </NavLink>
            <NavLink
              className={cn(
                splitLocation[1] === 'homev3'
                  ? 'button-small active'
                  : 'button-small'
              )}
              to='/homev3'
            >
              Home V3
            </NavLink>
          </div>
        </div>

        <div className={styles.wrapper}>
          <button
            onClick={openDropdown}
            className={cn('', styles.responsive_button)}
          >
            <svg
              width='44'
              height='44'
              viewBox='0 0 44 44'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12.8334 13.9167C12.4192 13.9167 12.0834 14.2524 12.0834 14.6667C12.0834 15.0809 12.4192 15.4167 12.8334 15.4167V13.9167ZM22 15.4167C22.4143 15.4167 22.75 15.0809 22.75 14.6667C22.75 14.2524 22.4143 13.9167 22 13.9167V15.4167ZM12.8334 21.25C12.4192 21.25 12.0834 21.5858 12.0834 22C12.0834 22.4142 12.4192 22.75 12.8334 22.75V21.25ZM31.1667 22.75C31.5809 22.75 31.9167 22.4142 31.9167 22C31.9167 21.5858 31.5809 21.25 31.1667 21.25V22.75ZM22 28.5833C21.5858 28.5833 21.25 28.9191 21.25 29.3333C21.25 29.7475 21.5858 30.0833 22 30.0833V28.5833ZM31.1667 30.0833C31.5809 30.0833 31.9167 29.7475 31.9167 29.3333C31.9167 28.9191 31.5809 28.5833 31.1667 28.5833V30.0833ZM12.8334 15.4167H22V13.9167H12.8334V15.4167ZM12.8334 22.75H31.1667V21.25H12.8334V22.75ZM22 30.0833H31.1667V28.5833H22V30.0833Z'
                fill='#28303F'
              />
            </svg>
          </button>

          <a
            className={cn('button button-stroke')}
            href='https://ui8.net'
            target='_blank'
          >
            Purchase $20
          </a>
          <button
            className={cn('button-svg', styles.message_button)}
            onClick={openModal}
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8 9.25C7.58579 9.25 7.25 9.58579 7.25 10C7.25 10.4142 7.58579 10.75 8 10.75V9.25ZM16 10.75C16.4142 10.75 16.75 10.4142 16.75 10C16.75 9.58579 16.4142 9.25 16 9.25V10.75ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75V13.25ZM12 14.75C12.4142 14.75 12.75 14.4142 12.75 14C12.75 13.5858 12.4142 13.25 12 13.25V14.75ZM11 3.75H13V2.25H11V3.75ZM2.75 17V12H1.25V17H2.75ZM13 20.25H6V21.75H13V20.25ZM1.25 17C1.25 19.6234 3.37665 21.75 6 21.75V20.25C4.20507 20.25 2.75 18.7949 2.75 17H1.25ZM21.25 12C21.25 16.5563 17.5563 20.25 13 20.25V21.75C18.3848 21.75 22.75 17.3848 22.75 12H21.25ZM13 3.75C17.5563 3.75 21.25 7.44365 21.25 12H22.75C22.75 6.61522 18.3848 2.25 13 2.25V3.75ZM11 2.25C5.61522 2.25 1.25 6.61522 1.25 12H2.75C2.75 7.44365 6.44365 3.75 11 3.75V2.25ZM8 10.75H16V9.25H8V10.75ZM8 14.75H12V13.25H8V14.75Z'
                fill='#FCFCFD'
              />
            </svg>
          </button>
        </div>
      </div>

      {dropdown ? (
        <section className={styles.background}>
          <div className={styles.align}>
            <Menu
              openModal={openModal}
              closeModal={closeDropdown}
              setModal={setDropdown}
            />
          </div>
        </section>
      ) : null}

      {modal ? (
        <section className={styles.background}>
          <div className={styles.align}>
            <Modal closeModal={closeModal} setModal={setModal} />
          </div>
        </section>
      ) : null}
    </header>
  );
};

export default Header;
