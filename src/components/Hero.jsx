import React from "react";
import HeroFooter from "./HeroFooter";
import styles from "./Hero.module.css";
import { heroSlider1, heroSlider2 } from "../utils/constraints";

const Hero = () => {
  // Concatenating the same array to itself to create a repeated array
  const repeatedSlides1 = heroSlider1.concat(heroSlider1);
  const repeatedSlides2 = heroSlider2.concat(heroSlider2);

  return (
    <div className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.scrollContainer}>
          <div className={`${styles.scroller} ${styles.firstScroller}`}>
            <div
              className={`${styles.scroller__inner}`}
              direction="top-to-bottom"
            >
              {repeatedSlides1.map((slide, index) => (
                <img
                  key={index} // Used index as key since IDs might clash in duplicates
                  className={styles.scrollImage}
                  src={slide.path}
                  alt={`hero${index}`} // for unique alt text
                />
              ))}
            </div>
          </div>
          <div className={`${styles.scroller} ${styles.secondScroller}`}>
            <div
              className={`${styles.scroller__inner}`}
              direction="bottom-to-top"
            >
              {repeatedSlides2.map((slide, index) => (
                <img
                  key={index} // Used index as key since IDs might clash in duplicates
                  className={styles.scrollImage}
                  src={slide.path}
                  alt={`hero${index}`} // for unique alt text
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Book an appointment with <span> lifestyle medicine </span> experts
          </h1>
          <p className={styles.heroSubtitle}>
            Optimize your lifestyle and reverse chronic diseases.
          </p>
        </div>
      </div>

      <HeroFooter />
    </div>
  );
};

export default Hero;
