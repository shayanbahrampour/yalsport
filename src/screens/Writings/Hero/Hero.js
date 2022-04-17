import cn from 'classnames';
import styles from './hero.module.css';

const Hero = () => {
  return (
    <div className={cn('section', styles.section)}>
      <div className={cn('container')}>
        <h1 className={cn('hero')}>Writings in progress...</h1>
      </div>
    </div>
  );
};

export default Hero;
