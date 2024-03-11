import React, { useRef } from "react";
import styles from "./HeroFooter.module.css";
import { formFields } from "../utils/constraints";

const HeroFooter = () => {
  const inputRefs = useRef({}); // Create an object to hold refs for input fields

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {};
    Object.keys(inputRefs.current).forEach((key) => {
      formData[key] = inputRefs.current[key].value;
    });

    // Handle form submission with formData
    console.log(formData);
  };

  return (
    <div className={styles.heroFooter}>

      <form onSubmit={handleSubmit}>
        {formFields.map((field) => (
          <div key={field.id} className={styles.inputField}>
            <img src={field.icon} alt={field.icon} />
            <input
              type={field.type}
              placeholder={field.placeholder}
              ref={(ref) => (inputRefs.current[field.id] = ref)}
            />
          </div>
        ))}
        <div className={styles.btnContainer}>
          <button type="submit" className={styles.btn}>
            <img
              className={styles.search}
              src="/assets/hero_section/search_white.svg"
              alt="search"
            />
            Find now
          </button>
        </div>
      </form>
    </div>
  );
};

export default HeroFooter;
