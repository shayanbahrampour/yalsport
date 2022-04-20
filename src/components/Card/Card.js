import styles from './card.module.css';
import cn from 'classnames';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const variants = {
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  hidden: { opacity: 0 },
};

const Card = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.article
      variants={variants}
      initial='hidden'
      ref={ref}
      animate={controls}
      className={styles.container}
    >
      <div className={styles.image_container}>
        <img className={styles.image} src={props.image} />
      </div>

      <div className={styles.content}>
        <h3 className={cn('body-2-bold', styles.title)}>{props.title}</h3>
        <p className={cn('caption-2')}>{props.date}</p>
      </div>
    </motion.article>
  );
};

export default Card;
