import cn from 'classnames';
import { useRef } from 'react';
import Card from '../../../components/Card';
import styles from './builds.module.css';

const builds = [
  {
    image: '/example.webp',
    price: 'iFrame',
    title: 'Premium templates & components',
    subtitle:
      'Custom-made templates and components for companies, startups and the community.',
  },
];

export default function Builds() {
  return (
    <div className={cn('section section-pb', styles.section)}>
      <div className={cn('container')}>
        <h4 className={cn('h1')}>Builds</h4>
        <div className={styles.wrapper}>
          {builds.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
