import cn from 'classnames';
import Card from '../../../components/Card';
import styles from './gallery.module.css';

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
    date: 'April 10, 2022',
  },
];

export default function Gallery() {
  return (
    <section className={cn('section section-pb')}>
      <div className={cn('container')}>
        <h1 className={cn('h4')}>Tabs</h1>

        <div className={styles.wrapper}>
          {gallery.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
