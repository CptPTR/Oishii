"use client";

import { useLocale } from "next-intl";
import { usePathname } from "next-intl/client";
import Link from "next-intl/link";
import styles from "./../styles/LanguagePicker.module.css";

const LanguagePicker = () => {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className={styles.languagepicker}>
      <Link
        href={pathname}
        locale="en"
        className={locale == "en" ? styles.current : undefined}
      >
        EN
      </Link>
      <Link
        href={pathname}
        locale="nl"
        className={locale == "nl" ? styles.current : undefined}
      >
        NL
      </Link>
    </div>
  );
};

export default LanguagePicker;
