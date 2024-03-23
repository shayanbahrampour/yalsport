import cn from "classnames";
import styles from "./hero.module.css";
import { container, item } from "../../../variants/animations";
import { motion } from "framer-motion";
import VideoModal from "../../../components/VideoModal";
import { useState } from "react";
import { Link } from "react-router-dom";

const socials = [
  {
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="4"
          stroke="#777E91"
          stroke-width="1.5"
        />
        <circle cx="18" cy="6" r="1" fill="#777E91" />
        <circle cx="12" cy="12" r="5" stroke="#777E91" stroke-width="1.5" />
      </svg>
    ),
  },
];

export default function Hero() {
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  const openModal = () => {
    setModal(!modal);
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.wrapper}>
            <div className={styles.social_wrapper}>
              {socials.map((item, index) => (
                <Link to="https://www.instagram.com/yaallldda/">
                  <motion.div
                    variants={item}
                    key={index}
                    className={styles.social_icon}
                  >
                    {item.svg}
                  </motion.div>
                </Link>
              ))}
            </div>

            <motion.div variants={item}>
              <h1 className={cn("hero", styles.title)} variants={item}>
                Yalda Shahmoradi
              </h1>
            </motion.div>
            <motion.div variants={item}>
              <p className={cn("body", styles.subtitle)}>
                Creative student with online art shop, skilled in painting,
                watercolor, drawing, and silver jewelry design Material
                Engineering background merges technical expertise with artistic
                flair. Passionate about integrating creativity and engineering.
              </p>
            </motion.div>
          </div>
          <div className={styles.image_background}>
            <img className={styles.image} src="/yalda.jpg" />
          </div>
          {modal ? (
            <section className={cn("background")}>
              <div className={cn("align")}>
                <VideoModal
                  embed="https://www.youtube.com/embed/KCONWLnm7FQ"
                  closeModal={closeModal}
                  setModal={setModal}
                />
              </div>
            </section>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}
