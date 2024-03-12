import HeroFooter from "./HeroFooter";
import styles from "./Hero.module.css";
import { heroSlider1, heroSlider2 } from "../utils/constraints";

const Hero = () => {
  // Concatenating the same array to itself to create a repeated array
  const duplicateSlides = heroSlider1.concat(heroSlider2);
  const mobileSlides = duplicateSlides.concat(duplicateSlides);
  const repeatedSlides1 = heroSlider1.concat(heroSlider1);
  const repeatedSlides2 = heroSlider2.concat(heroSlider2);

  return (
    <div className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.scrollContainer}>
          {/* First Scroller */}
          <div className={`${styles.scroller} ${styles.firstScroller}`}>
            <div className={`${styles.scroller__inner}`} direction="top-to-bottom">
              {repeatedSlides1.map((slide, index) => (
                <img
                  key={index}
                  className={styles.scrollImage}
                  src={slide.path}
                  alt={`hero${index}`} // for unique alt text
                />
              ))}
            </div>
          </div>
          {/* Second Scroller */}
          <div className={`${styles.scroller} ${styles.secondScroller}`}>
            <div className={`${styles.scroller__inner}`} direction="bottom-to-top">
              {repeatedSlides2.map((slide, index) => (
                <img
                  key={index}
                  className={styles.scrollImage}
                  src={slide.path}
                  alt={`hero${index}`} // for unique alt text
                />
              ))}
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Book an appointment with <span> lifestyle medicine </span> experts
          </h1>
          <p className={styles.heroSubtitle}>
            Optimize your lifestyle and reverse chronic diseases.
          </p>
        </div>
      </div>

      {/* Hero Footer */}
      <HeroFooter />

      {/* Horizontal Scrolling for mobile */}
      <div className={styles.mobileHero}>
        <div className={styles.mobileScroller}>
          <div className={styles.mobileScroller__inner}>
            {mobileSlides.map((slide, index) => (
              <img
                key={index}
                className={styles.scrollImage}
                src={slide.path}
                alt={`hero${index}`} // for unique alt text
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
