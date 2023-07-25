"use client";

import styles from "@/styles/SideMenuNav.module.css";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Dispatch, FunctionComponent } from "react";
import BackToTopButton from "./BackToTopButton";

type SideMenuNavPropType = {
  menu: {
    id: string;
  }[];
  currentMenuOption: string;
  setCurrentMenuOption: Dispatch<string>;
};

const SideMenuNav: FunctionComponent<SideMenuNavPropType> = ({
  menu,
  currentMenuOption,
  setCurrentMenuOption,
}) => {
  const t = useTranslations("Menu");

  return (
    <ul className={styles.side_menu_nav}>
      {menu.map((option) => (
        <li
          key={option.id}
          className={
            currentMenuOption === option.id
              ? `${styles.side_menu_nav_item} ${styles.selected}`
              : `${styles.side_menu_nav_item} ${styles.not_selected}`
          }
        >
          <Link
            href={`#${option.id}`}
            onClick={() => setCurrentMenuOption(option.id)}
          >
            {t(option.id.toLowerCase())}
          </Link>
        </li>
      ))}
      <li>
        <BackToTopButton />
      </li>
    </ul>
  );
};

export default SideMenuNav;
