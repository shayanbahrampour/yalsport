import cn from 'classnames';
import styles from './hero.module.css';
import { container, item } from '../../../variants/animations';
import { motion } from 'framer-motion';
import Network from './Network';

const networks = [
  {
    href: 'https://twitter.com/vazurio_',
    title: 'Twitter',
  },
  {
    href: 'https://www.linkedin.com/in/angel-vazquez-332a05192/',
    title: 'LinkedIn',
  },
  {
    href: 'https://www.instagram.com/',
    title: 'Instagram',
  },
  {
    href: 'https://www.github.com/vazurio',
    title: 'Github',
  },
];

export default function Hero() {
  return (
    <motion.div variants={container} initial='hidden' animate='show'>
      <div className={cn('section', styles.section)}>
        <div className={cn('container', styles.container)}>
          <div className={styles.wrapper}>
            <motion.div variants={item}>
              <h1 className={cn('hero', styles.title)} variants={item}>
                Angel Uriostegui
              </h1>
            </motion.div>
            <motion.div variants={item}>
              <p className={cn('body', styles.subtitle)}>
                Your goal is to throw the most epic party for your friends and
                family? I am in! If you’re interested in having me photograph
                your wedding, I’d love for you to get in touch.
              </p>
            </motion.div>
            <motion.div variants={item}>
              <button className={cn('button button-stroke')}>
                View Builds
              </button>
            </motion.div>
          </div>
          <div className={styles.image_background}>
            <img className={styles.image} src='/reading.png' />
          </div>

          <div className={styles.networks}>
            {networks.map((item, index) => (
              <Network key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
