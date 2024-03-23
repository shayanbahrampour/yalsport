import cn from "classnames";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Modal from "../Modal";
import styles from "./header.module.css";
import Menu from "./Menu";

const Header = () => {
  const [modal, setModal] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const location = useLocation();
  const { pathname } = location;

  const splitLocation = pathname.split("/");

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
      <div className={cn("container", styles.container)}>
        <div className={styles.main_wrapper}>
          <NavLink className={cn("body-2-bold", styles.logo)} to="/">
            Welcome<span>.</span>
          </NavLink>
          <div className={styles.break} />
        </div>

        <div className={styles.wrapper}>
          <button
            onClick={openDropdown}
            className={cn("", styles.responsive_button)}
          >
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8334 13.9167C12.4192 13.9167 12.0834 14.2524 12.0834 14.6667C12.0834 15.0809 12.4192 15.4167 12.8334 15.4167V13.9167ZM22 15.4167C22.4143 15.4167 22.75 15.0809 22.75 14.6667C22.75 14.2524 22.4143 13.9167 22 13.9167V15.4167ZM12.8334 21.25C12.4192 21.25 12.0834 21.5858 12.0834 22C12.0834 22.4142 12.4192 22.75 12.8334 22.75V21.25ZM31.1667 22.75C31.5809 22.75 31.9167 22.4142 31.9167 22C31.9167 21.5858 31.5809 21.25 31.1667 21.25V22.75ZM22 28.5833C21.5858 28.5833 21.25 28.9191 21.25 29.3333C21.25 29.7475 21.5858 30.0833 22 30.0833V28.5833ZM31.1667 30.0833C31.5809 30.0833 31.9167 29.7475 31.9167 29.3333C31.9167 28.9191 31.5809 28.5833 31.1667 28.5833V30.0833ZM12.8334 15.4167H22V13.9167H12.8334V15.4167ZM12.8334 22.75H31.1667V21.25H12.8334V22.75ZM22 30.0833H31.1667V28.5833H22V30.0833Z"
                fill="#28303F"
              />
            </svg>
          </button>
        </div>
      </div>

      {dropdown ? (
        <section className={cn("background")}>
          <div className={cn("align")}>
            <Menu
              openModal={openModal}
              closeModal={closeDropdown}
              setModal={setDropdown}
            />
          </div>
        </section>
      ) : null}

      {modal ? (
        <section className={cn("background")}>
          <div className={cn("align")}>
            <Modal closeModal={closeModal} setModal={setModal} />
          </div>
        </section>
      ) : null}
    </header>
  );
};

export default Header;
