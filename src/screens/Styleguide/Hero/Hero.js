import styles from "./hero.module.css";
import cn from "classnames";

const Hero = () => {
  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <h1>Hero</h1>
      </div>
    </div>
  );
};

export default Hero;
