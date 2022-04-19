import styles from './card.module.css';
import cn from 'classnames';

const Card = (props) => {
  return (
    <article className={styles.container}>
      <div className={styles.image_container}>
        <img className={styles.image} src={props.image} />
      </div>

      <div className={styles.content}>
        <h3 className={cn('body-2-bold', styles.title)}>{props.title}</h3>
        <p className={cn('caption')}>{props.date}</p>
      </div>
    </article>
  );
};

export default Card;
