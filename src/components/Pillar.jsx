import React, { useState } from "react";

import styles from "./Footer.module.css";
import { pillars } from "../utils/constraints";

const Pillar = ({ activePillar, setActivePillar }) => {
  return (
    <div>
      <div className={styles.categories}>
        {pillars.map((pillar, index) => (
          <button
            key={index}
            className={`${styles.category} ${
              index == activePillar ? styles.activeCategory : ""
            }`}
            onClick={() => setActivePillar(index)}
          >
            <div>{pillar.title}</div>
          </button>
        ))}
      </div>

      <div className={styles.pillars}>
        {pillars.map((pillar, index) => (
          <div
            key={index}
            style={{
              transform: `translateX(calc(${-100 * activePillar}% - ${
                activePillar * 40
              }px))`,
            }}
            className={styles.pillar}
          >
            <div className={styles.imgContainer}>
              <img
                src={pillar.image}
                alt={pillar.title}
                className={styles.pillarImage}
              />
              <div className={styles.tagline}>
                <img
                  src={pillar.keyIcon}
                  alt={pillar.keyHeading}
                  className={styles.keyIcon}
                />
                <div>
                  <span className={styles.keyHeading}>{pillar.keyHeading}</span>
                  <span className={styles.keySubHeading}>
                    {pillar.keyDescription}
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.pillarText}>
              <div className={styles.pillarTitle}>{pillar.title}</div>
              <div className={styles.pillarDescription}>
                {pillar.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pillar;
