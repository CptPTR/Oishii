"use client";

import styles from "@/styles/BackToTopButton.module.css";
import { useRouter } from "next/navigation";
import { FunctionComponent, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

type BackToTopButtonPropType = {};

const BackToTopButton: FunctionComponent<BackToTopButtonPropType> = () => {
  const router = useRouter();
  const [isBttTextVisible, setIsBttTextVisible] = useState(false);

  const goToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    router.refresh();
  };

  return (
    <div className={styles.bttContainer}>
      <div className={styles.bttButton} onClick={goToTop}>
        <FaArrowUp
          onMouseEnter={() => setIsBttTextVisible(true)}
          onMouseLeave={() => setIsBttTextVisible(false)}
          size={20}
        />
      </div>
      <p className={isBttTextVisible ? "" : styles.visible}>Back to Top</p>
    </div>
  );
};

export default BackToTopButton;
