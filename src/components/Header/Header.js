import cn from 'classnames';
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Modal from '../Modal';
import styles from './header.module.css';

const Header = () => {
  const [modal, setModal] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  const splitLocation = pathname.split('/');

  const closeModal = () => {
    setModal(false);
  };

  const openModal = () => {
    setModal(!modal);
  };

  return (
    <header className={styles.section}>
      <div className={cn('container', styles.container)}>
        <div className={styles.main_wrapper}>
          <NavLink className={cn('body-2-bold', styles.logo)} to='/'>
            Angel Uriostegui<span>.</span>
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
          <NavLink className={cn('button button-stroke')} to='/writings'>
            Purchase $20
          </NavLink>
          <button className={cn('button-svg')} onClick={openModal}>
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
