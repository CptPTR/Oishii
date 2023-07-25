import styles from "@/styles/MenuItem.module.css";
import { StaticImageData } from "next/image";
import { FunctionComponent } from "react";

type MenuItemPropType = {
  image: StaticImageData;
  item: string;
  description: string;
  price: number;
};

const MenuItem: FunctionComponent<MenuItemPropType> = (props) => {
  return (
    <div
      className={styles.menu_item}
      style={{
        background: `url(${props.image.src}), rgba(0, 0, 0, 0.6)`,
        backgroundBlendMode: "overlay",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <span>{props.item}</span>
        <p>{props.description}</p>
      </div>
      <span className={styles.price}>${props.price.toFixed(2)}</span>
    </div>
  );
};

export default MenuItem;
