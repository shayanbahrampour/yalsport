import styles from "./gallery.module.css";
import cn from "classnames";
import { motion } from "framer-motion";
import { useState } from "react";
import CardII from "../../../components/CardII";
import Dropdown from "../../../components/Dropdown";

const gallery = [
  {
    image: "/images/01.jpg",
    title: "Life",
    galleries: [
      {
        image: "images/01.jpg",
        title: "By the sea",
        date: "April 22, 2022",
      },
      {
        image: "images/02.jpg",
        title: "Black sand",
        date: "April 18, 2022",
      },
      {
        image: "images/03.jpg",
        title: "Plants",
        date: "April 17, 2022",
      },
      {
        image: "images/04.jpg",
        title: "Sea",
        date: "April 15, 2022",
      },
      {
        image: "images/05.jpg",
        title: "Spian",
        date: "April 14, 2022",
      },
      {
        image: "images/06.jpg",
        title: "Interior",
        date: "April 12, 2022",
      },
      {
        image: "images/07.jpg",
        title: "Triangle",
        date: "April 10, 2022",
      },
      {
        image: "images/08.jpg",
        title: "Paint",
        date: "April 09, 2022",
      },
      {
        image: "images/09.jpg",
        title: "Autumn",
        date: "April 09, 2022",
      },
      {
        image: "images/10.jpg",
        title: "Squares",
        date: "April 06, 2022",
      },
      {
        image: "images/11.jpg",
        title: "Mountains",
        date: "April 03, 2022",
      },
      {
        image: "images/12.jpg",
        title: "Dark Sea",
        date: "April 02, 2022",
      },
    ],
  },
  {
    image: "/images/16.jpg",
    title: "Videos",
    galleries: [
      {
        image: "images/16.jpg",
        title: "By the sea",
        date: "April 22, 2022",
      },
      {
        image: "images/17.jpg",
        title: "Black sand",
        date: "April 18, 2022",
      },
      {
        image: "images/18.jpg",
        title: "Plants",
        date: "April 17, 2022",
      },
      {
        image: "images/19.jpg",
        title: "Sea",
        date: "April 15, 2022",
      },
      {
        image: "images/20.jpg",
        title: "Spian",
        date: "April 14, 2022",
      },
      {
        image: "images/21.jpg",
        title: "Interior",
        date: "April 12, 2022",
      },
      {
        image: "images/22.jpg",
        title: "Triangle",
        date: "April 10, 2022",
      },
      {
        image: "images/23.jpg",
        title: "Paint",
        date: "April 09, 2022",
      },
      {
        image: "images/24.jpg",
        title: "Autumn",
        date: "April 09, 2022",
      },
      {
        image: "images/25.jpg",
        title: "Squares",
        date: "April 06, 2022",
      },
      {
        image: "images/26.jpg",
        title: "Mountains",
        date: "April 03, 2022",
      },
      {
        image: "images/27.jpg",
        title: "Dark Sea",
        date: "April 02, 2022",
      },
    ],
  },
  {
    image: "/images/28.jpg",
    title: "Projects",
    galleries: [
      {
        image: "images/28.jpg",
        title: "By the sea",
        date: "April 22, 2022",
      },
      {
        image: "images/29.jpg",
        title: "Black sand",
        date: "April 18, 2022",
      },
      {
        image: "images/30.jpg",
        title: "Plants",
        date: "April 17, 2022",
      },
      {
        image: "images/31.jpg",
        title: "Sea",
        date: "April 15, 2022",
      },
      {
        image: "images/32.jpg",
        title: "Spian",
        date: "April 14, 2022",
      },
      {
        image: "images/33.jpg",
        title: "Interior",
        date: "April 12, 2022",
      },
      {
        image: "images/34.jpg",
        title: "Triangle",
        date: "April 10, 2022",
      },
      {
        image: "images/35.jpg",
        title: "Paint",
        date: "April 09, 2022",
      },
      {
        image: "images/36.jpg",
        title: "Autumn",
        date: "April 09, 2022",
      },
      {
        image: "images/37.jpg",
        title: "Squares",
        date: "April 06, 2022",
      },
      {
        image: "images/38.jpg",
        title: "Mountains",
        date: "April 03, 2022",
      },
      {
        image: "images/39.jpg",
        title: "Dark Sea",
        date: "April 02, 2022",
      },
    ],
  },
  {
    image: "/images/40.jpg",
    title: "Travel",
    galleries: [
      {
        image: "images/40.jpg",
        title: "By the sea",
        date: "April 22, 2022",
      },
      {
        image: "images/41.jpg",
        title: "Black sand",
        date: "April 18, 2022",
      },
      {
        image: "images/42.jpg",
        title: "Plants",
        date: "April 17, 2022",
      },
      {
        image: "images/43.jpg",
        title: "Sea",
        date: "April 15, 2022",
      },
      {
        image: "images/44.jpg",
        title: "Spian",
        date: "April 14, 2022",
      },
      {
        image: "images/45.jpg",
        title: "Interior",
        date: "April 12, 2022",
      },
      {
        image: "images/46.jpg",
        title: "Triangle",
        date: "April 10, 2022",
      },
      {
        image: "images/47.jpg",
        title: "Paint",
        date: "April 09, 2022",
      },
      {
        image: "images/48.jpg",
        title: "Autumn",
        date: "April 09, 2022",
      },
      {
        image: "images/49.jpg",
        title: "Squares",
        date: "April 06, 2022",
      },
      {
        image: "images/50.jpg",
        title: "Mountains",
        date: "April 03, 2022",
      },
      {
        image: "images/51.jpg",
        title: "Dark Sea",
        date: "April 02, 2022",
      },
    ],
  },
];

const Gallery = () => {
  const options = [];
  gallery.map((item) => options.push(item.title));

  const [direction, setDirection] = useState(options[0]);

  return (
    <motion.section className={styles.section}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <div className={styles.nav}>
            {gallery.map((item, index) => (
              <div
                className={styles.tab}
                onClick={() => setDirection(item.title)}
              >
                <div className={styles.image_container}>
                  <img src={item.image} className={styles.image} />
                </div>
                <button
                  className={cn(styles.button, {
                    [styles.active]: item.title === direction,
                  })}
                  key={index}
                >
                  {item.title}
                </button>
              </div>
            ))}
          </div>
          <Dropdown
            className={styles.dropdown}
            value={direction}
            options={options}
            setValue={setDirection}
          />
        </div>

        <div className={styles.wrapper}>
          {gallery
            .find((item) => item.title === direction)
            .galleries.map((item, index) => (
              <CardII key={index} {...item} />
            ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Gallery;
