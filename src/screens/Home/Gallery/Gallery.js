import cn from 'classnames';
import Card from '../../../components/Card';
import styles from './gallery.module.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useEffect, useState } from 'react';

const gallery = [
  {
    title: 'Life',
    galleries: [
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
    ],
  },
  {
    title: 'Videos',
    galleries: [
      {
        image: 'images/13.jpg',
        title: 'By the sea',
        date: 'April 22, 2022',
      },
      {
        image: 'images/14.jpg',
        title: 'Black sand',
        date: 'April 18, 2022',
      },
      {
        image: 'images/15.jpg',
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
    ],
  },
  {
    title: 'Projects',
    galleries: [
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
    ],
  },
  {
    title: 'Travel',
    galleries: [
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
    ],
  },
];

export default function Gallery() {
  const options = [];
  gallery.map((item) => options.push(item.title));

  const [direction, setDirection] = useState(options[0]);

  return (
    <motion.section className={cn('section section-pb')}>
      <div className={cn('container', styles.container)}>
        {gallery.map((item, index) => (
          <button
            className={cn(styles.button, {
              [styles.active]: item.title === direction,
            })}
            onClick={() => setDirection(item.title)}
            key={index}
          >
            {item.title}
          </button>
        ))}

        <div className={styles.wrapper}>
          {gallery
            .find((item) => item.title === direction)
            .galleries.map((item, index) => (
              <Card key={index} {...item} />
            ))}
        </div>
      </div>
    </motion.section>
  );
}
