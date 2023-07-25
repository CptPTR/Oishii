import styles from "@/styles/MenuOptionCard.module.css";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Dispatch, FunctionComponent } from "react";

type MenuOptionCardPropType = {
  bg: string;
  name: string;
  setCurrentMenuOption: Dispatch<string>;
};

const MenuOptionCard: FunctionComponent<MenuOptionCardPropType> = ({
  name,
  bg,
  setCurrentMenuOption,
}) => {
  const t = useTranslations("Menu");

  return (
    <div
      className={styles.menu_option_card}
      title={`${name}`}
      style={{
        background: `url(${bg}), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Link href={`#${name}`} onClick={() => setCurrentMenuOption(name)}>
        <p>{t(name.toLowerCase())}</p>
      </Link>
    </div>
  );
};

export default MenuOptionCard;
