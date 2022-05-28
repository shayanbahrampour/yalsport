import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={cn("container", styles.container)}>
        <div className={styles.links}>
          <Link to="/styleguide" className={cn("caption-bold", styles.link)}>
            Styleguide
          </Link>
          <Link to="/styleguide" className={cn("caption-bold", styles.link)}>
            Licenses
          </Link>
          <Link to="/styleguide" className={cn("caption-bold", styles.link)}>
            Changelog
          </Link>
        </div>

        <p className={cn("caption")}>Copyright © 2022 Angel Uriostegui</p>
      </div>
    </footer>
  );
}
