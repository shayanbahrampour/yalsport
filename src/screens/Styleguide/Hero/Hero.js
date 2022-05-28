import styles from "./hero.module.css";
import cn from "classnames";

const sizes = [
  {
    className: "hero",
    name: "Hero",
    size: "96/96",
  },
  {
    className: "h1",
    name: "Heading 1",
    size: "64/64",
  },
  {
    className: "h2",
    name: "Heading 2",
    size: "48/56",
  },
];

const Hero = () => {
  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <h4 className={cn("body-bold")}>Typography | Outfit</h4>

        {sizes.map((item, index) => (
          <div className={styles.wrapper}>
            <h4 key={index} className={cn(item.className)}>
              {item.name}
            </h4>
            <p className={cn("body-2")}>{item.size}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
