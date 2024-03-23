import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={cn("container", styles.container)}>
        <p className={cn("caption")}>Copyright © 2024 Salivan</p>
      </div>
    </footer>
  );
}
