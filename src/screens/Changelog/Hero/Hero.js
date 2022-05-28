import cn from "classnames";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={cn("section")}>
      <div className={cn("container")}>
        <h1 className={cn("h2")}>Changelog</h1>
        <p className={cn("hairline", styles.text)}>Version 1.0 APR 20, 2022</p>
        <p className={cn("caption")}>This template has been released</p>
      </div>
    </div>
  );
};

export default Hero;
