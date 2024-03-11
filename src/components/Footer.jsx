import React, { useState } from "react";
import styles from "./Footer.module.css";
import { pillars } from "../utils/constraints";
import Pillar from "./Pillar";

const Footer = () => {
  const [activePillar, setActivePillar] = useState(0);
  console.log(activePillar)

  return (
    <div className={styles.footer}>
      <div>
        <div className={styles.container}>
          <div className={styles.keyword}>HOW IT WORKS</div>
          <div className={styles.directionContainer}>
            <div className={styles.title}>
              <span className={styles.mainTitle}>Lifestyle as medicine:</span> The six pillars
            </div>
            <div className={styles.arrows}>
              <button
                className={styles.arrow}
                onClick={() =>
                  setActivePillar((pre) => (pre == 0 ? pre : pre - 1))
                }
              >
                <img
                  src="/assets/footer_section/left-arrow.svg"
                  alt="left-arrow"
                />
              </button>
              <button
                className={styles.arrow}
                onClick={() =>
                  setActivePillar((pre) => (pre == 5 ? pre : pre + 1))
                }
              >
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
    </div>
  );
};

export default Footer;
