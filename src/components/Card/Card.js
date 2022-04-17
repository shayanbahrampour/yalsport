import styles from './card.module.css';
import cn from 'classnames';

const Card = (props) => {
  return (
    <article className={styles.container}>
      <div className={styles.image_container}>
        <img className={styles.image} src={props.image} />
      </div>
      <div className={styles.gradient} />

      <div className={styles.content}>
        <span className={cn('hairline', styles.price)}>{props.price}</span>
        <h3 className={cn('h3', styles.title)}>{props.title}</h3>
        <p className={cn('caption', styles.subtitle)}>{props.subtitle}</p>
        <a
          href='https://www.iframe.club'
          target='_blank'
          className={cn('button', styles.button)}
        >
          Live Preview
        </a>
      </div>
    </article>
  );
};

export default Card;
