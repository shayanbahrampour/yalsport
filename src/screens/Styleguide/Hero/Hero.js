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

const primaryColors = [
  { number: 1, color: "#2a85ff" },
  { number: 2, color: "#83bf6e" },
  { number: 3, color: "#ff6a55" },
  { number: 4, color: "#8e59ff" },
];

const secondaryColors = [
  { number: 1, color: "#ffbc99" },
  { number: 2, color: "#cabdff" },
  { number: 3, color: "#b1e5fc" },
  { number: 4, color: "#b5e4ca" },
];

const neutralColors = [
  { id: "#141416", number: 1, color: "#ffffff" },
  { number: 2, color: "#141416" },
  { number: 3, color: "#23262f" },
  { number: 4, color: "#353945" },
  { number: 5, color: "#777e90" },
  { number: 6, color: "#b1b5c3" },
  { number: 7, color: "#e6e8ec" },
  { number: 8, color: "#f4f5f6" },
];

const Hero = () => {
  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.sizes}>
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
        <div className={styles.colors}>
          <h4 className={cn("body-bold")}>Colors</h4>

          <div className={styles.content}>
            <p className={cn("body-2-bold")}>Primary</p>
            <div className={styles.colors_wrapper}>
              {primaryColors.map((item, index) => (
                <div
                  key={index}
                  className={cn("body-2", styles.color)}
                  style={{ background: item.color }}
                >
                  {item.number}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.content}>
            <p className={cn("body-2-bold")}>Secondary</p>
            <div className={styles.colors_wrapper}>
              {secondaryColors.map((item, index) => (
                <div
                  key={index}
                  id={item.id}
                  className={cn(`body-2 ${item.id}`, styles.color)}
                  style={{ background: item.color }}
                >
                  {item.number}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.content}>
            <p className={cn("body-2-bold")}>Neutrals</p>
            <div className={styles.neutral_colors_wrapper}>
              {neutralColors.map((item, index) => (
                <div
                  key={index}
                  className={cn("body-2", styles.color)}
                  style={{ background: item.color }}
                >
                  {item.number}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
