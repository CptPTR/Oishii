import styles from "@/styles/MenuOptions.module.css";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";
import { FunctionComponent } from "react";
import MenuItem from "./MenuItem";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
  price: number;
};

type MenuOptionProps = {
  id: string;
  title: string;
  menuItems: any[];
};

const MenuOption: FunctionComponent<MenuOptionProps> = (props) => {
  const t = useTranslations("Menu");

  return (
    <section className={styles.menu_option} id={props.id}>
      <h2>{t(props.title.toLowerCase()).toUpperCase()}</h2>
      <div className={styles.menu_items}>
        {props.menuItems.map((item: MenuItem) => (
          <MenuItem
            key={item.id}
            item={item.name}
            image={item.image}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuOption;
