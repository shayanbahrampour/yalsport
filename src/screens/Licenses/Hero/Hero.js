import styles from "./hero.module.css";
import cn from "classnames";

const photos = [
  "/images/01.jpg",
  "/images/02.jpg",
  "/images/03.jpg",
  "/images/04.jpg",
  "/images/05.jpg",
  "/images/06.jpg",
];

const Hero = () => {
  return (
    <div className={cn("section")}>
      <div className={cn("container")}>
        <h1 className={cn("h2", styles.title)}>Licenses</h1>
        <p className={cn("body-2", styles.subtitle)}>
          All graphical assets in this template are licensed for personal and
          commercial use. If you'd like to use a specific asset, please check
          the license below.
        </p>

        <ul className={styles.list}>
          <li className={styles.item}>Photos are sourced from Unsplash</li>
          <li className={styles.item}>Unsplash license</li>
          <li className={styles.item}>Icons are sourced from Feather icons</li>
          <li className={styles.item}>Feathericons License</li>
        </ul>

        <div className={styles.photos}>
          <p className={cn("body-2-bold")}>Unsplash photos:</p>
          <div className={styles.photos_wrapper}>
            {photos.map((item, index) => (
              <img key={index} src={item} className={styles.photo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
