import { useState } from "react";
import styles from "./Footer.module.css";
import { pillars } from "../utils/constraints";
import Pillar from "./Pillar";

const Footer = () => {
  const [activePillar, setActivePillar] = useState(0);

  const handleLeftArrowClick = () => {
    setActivePillar((prev) => (prev === 0 ? prev : prev - 1));
  };

  const handleRightArrowClick = () => {
    setActivePillar((prev) => (prev === 5 ? prev : prev + 1));
  };

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.keyword}>HOW IT WORKS</div>
        <div className={styles.directionContainer}>
          <div className={styles.title}>
            <span className={styles.mainTitle}>Lifestyle as medicine:</span> The
            six pillars
          </div>
          <div className={styles.arrows}>
            <button className={styles.arrow} onClick={handleLeftArrowClick}>
              <img
                src="/assets/footer_section/left-arrow.svg"
                alt="left-arrow"
              />
            </button>
            <button className={styles.arrow} onClick={handleRightArrowClick}>
              <img
                src="/assets/footer_section/right-arrow.svg"
                alt="right-arrow"
              />
            </button>
          </div>
        </div>
      </div>

      <Pillar activePillar={activePillar} setActivePillar={setActivePillar} />
    </div>
  );
};

export default Footer;
