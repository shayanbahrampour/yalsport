import styles from './network.module.css';

export default function Network(props) {
  return (
    <a href={props.href} target='_blank' className={styles.network}>
      {props.title}
    </a>
  );
}
