import cn from 'classnames';
import Card from '../../../components/Card';
import styles from './gallery.module.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const gallery = [
  {
    image: 'images/01.jpg',
    title: 'By the sea',
    date: 'April 22, 2022',
  },
  {
    image: 'images/02.jpg',
    title: 'Black sand',
    date: 'April 18, 2022',
  },
  {
    image: 'images/03.jpg',
    title: 'Plants',
    date: 'April 17, 2022',
  },
  {
    image: 'images/04.jpg',
    title: 'Sea',
    date: 'April 15, 2022',
  },
  {
    image: 'images/05.jpg',
    title: 'Spian',
    date: 'April 14, 2022',
  },
  {
    image: 'images/06.jpg',
    title: 'Interior',
    date: 'April 12, 2022',
  },
  {
    image: 'images/07.jpg',
    title: 'Triangle',
    date: 'April 10, 2022',
  },
  {
    image: 'images/08.jpg',
    title: 'Paint',
    date: 'April 09, 2022',
  },
  {
    image: 'images/09.jpg',
    title: 'Autumn',
    date: 'April 09, 2022',
  },
  {
    image: 'images/10.jpg',
    title: 'Squares',
    date: 'April 06, 2022',
  },
  {
    image: 'images/11.jpg',
    title: 'Mountains',
    date: 'April 03, 2022',
  },
  {
    image: 'images/12.jpg',
    title: 'Dark Sea',
    date: 'April 02, 2022',
  },
];

export default function Gallery() {
  return (
    <motion.section className={cn('section section-pb')}>
      <div className={cn('container')}>
        <h1 className={cn('h4')}>Tabs</h1>

        <div className={styles.wrapper}>
          {gallery.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
