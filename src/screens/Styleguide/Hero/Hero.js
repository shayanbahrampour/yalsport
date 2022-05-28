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
  {
    className: "h3",
    name: "Heading 3",
    size: "40/48",
  },
  {
    className: "h4",
    name: "Heading 4",
    size: "32/40",
  },
  {
    className: "body",
    name: "Body",
    size: "24/32",
  },
  {
    className: "body-bold",
    name: "Body Bold",
    size: "24/32",
  },
  {
    className: "body-2",
    name: "Body 2",
    size: "24/16",
  },
  {
    className: "body-2-bold",
    name: "Body 2 Bold",
    size: "24/16",
  },
  {
    className: "caption",
    name: "Caption",
    size: "14/24",
  },
  {
    className: "caption-bold",
    name: "Caption Bold",
    size: "14/24",
  },
  {
    className: "caption-2",
    name: "Caption 2",
    size: "12",
  },
  {
    className: "caption-2-bold",
    name: "Caption 2 Bold",
    size: "12",
  },
  {
    className: "hairline",
    name: "Hairline ",
    size: "16",
  },
  {
    className: "hairline-2",
    name: "Hairline 2",
    size: "12",
  },
  {
    className: "button-default",
    name: "Button Default",
    size: "16",
  },
  {
    className: "button-2",
    name: "Button 2",
    size: "14",
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
