import cn from 'classnames';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={cn('container', styles.container)}>
        <p className={cn('caption')}>Copyright © 2022 Angel Uriostegui</p>
      </div>
    </footer>
  );
}
