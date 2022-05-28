import styles from "./card.module.css";
import cn from "classnames";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const variants = {
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  hidden: { opacity: 0 },
};

const photos = [
  {
    name: `Param`,
  },
  {
    name: `Vennila`,
  },
  {
    name: `Afrin`,
  },
];

const Card = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <motion.article
      variants={variants}
      initial="hidden"
      ref={ref}
      animate={controls}
      className={styles.container}
    >
      <div className={styles.image_container}>
        <img className={styles.image} src={props.image} />
      </div>

      <div className={styles.content}>
        <h3 className={cn("body-2-bold", styles.title)}>{props.title}</h3>
        <p className={cn("caption-2")}>{props.date}</p>
      </div>
    </motion.article>
  );
};

export default Card;
