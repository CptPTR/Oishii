"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();
  const t = useTranslations("Home");

  return (
    <section className={styles.hero}>
      {/* <span className={styles.oishii_welcome}>Welcome to Oishii</span> */}
      <span className={styles.oishii_welcome}>{t("welcome")}</span>

      <br />
      <span className={styles.oishii_desc}>{t("authentic_japanese_food")}</span>
      <br />
      <span className={styles.oishii_desc_2}>
        {t("most_popular_eatery_ny")}
      </span>
      <br />
      <Link href="/downloadapp" passHref className={styles.download}>
        {t("download_our_app")} {t("here")}!
      </Link>
      <div className={styles.opening_hours}>
        <span>{t("open_all_days")}</span>
        <span>12.00u - 19.00u</span>
      </div>
    </section>
  );
}
