"use client";

import styles from "@/app/[locale]/layout.module.css";
import { usePathname } from "next-intl/client";
import Link from "next/link";

const MainNavigation = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <Link
          href="/"
          passHref
          className={`${styles.navlink} ${
            pathname === "/" ? styles.current : ""
          }`}
        >
          home
        </Link>

        <Link
          href="/menu"
          passHref
          className={`${styles.navlink} ${
            pathname === "/menu" ? styles.current : ""
          }`}
        >
          menu
        </Link>

        {/* <Link href="/recensies" passHref className={styles.navlink}>
                  recensies
                </Link> */}

        <Link
          href="/contact"
          passHref
          className={`${styles.navlink} ${
            pathname === "/contact" ? styles.current : ""
          }`}
        >
          contact
        </Link>

        <Link
          href="/downloadapp"
          passHref
          className={`${styles.navlink} ${
            pathname === "/downloadapp" ? styles.current : ""
          }`}
        >
          download onze app
        </Link>
      </ul>
    </nav>
  );
};

export default MainNavigation;
