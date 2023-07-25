"use client";

import styles from "@/app/[locale]/menu/menu.module.css";
import MenuOption from "@/components/MenuOption";
import MenuOptionCard from "@/components/MenuOptionCard";
import SideMenuNav from "@/components/SideMenuNav";
import { images } from "@/constants";
import { StaticImageData } from "next/image";
import { FunctionComponent, useState } from "react";

type MenuPagePropType = {};

type Menu = {
  id: string;
  bg: StaticImageData;
  items: {
    id: number;
    name: string;
    description?: string;
    image: StaticImageData;
    price: number;
  }[];
}[];

const theMenu: Menu = [
  {
    id: "Drinks",
    bg: images.BEVERAGES,
    items: [
      {
        id: 1,
        name: "Matcha",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptate amet ea iste laudantium impedit incidunt necessitatibus reprehenderit assumenda molestiae minus quae alias expedita dolore omnis voluptas repellat, eum ex.,",
        image: images.MATCHA,
        price: 2.9,
      },
      {
        id: 2,
        name: "Genmaicha",
        description: "",
        image: images.GENMAICHA,
        price: 2.9,
      },
      {
        id: 3,
        name: "Ryokucha",
        description: "",
        image: images.RYOKUCHA,
        price: 3.5,
      },
      {
        id: 4,
        name: "Sakura Tea",
        description: "",
        image: images.SAKURA_TEA,
        price: 3.95,
      },
      {
        id: 5,
        name: "Kombucha",
        description: "",
        image: images.KOMBUCHA,
        price: 3.95,
      },
      {
        id: 6,
        name: "Sake",
        description: "",
        image: images.SAKE,
        price: 3.95,
      },
      {
        id: 7,
        name: "Amazake",
        description: "",
        image: images.AMAZAKE,
        price: 4.3,
      },
    ],
  },
  {
    id: "Appetizers",
    bg: images.APPETIZERS,
    items: [
      {
        id: 8,
        name: "Harumaki",
        description: "",
        image: images.HARUMAKI,
        price: 5.0,
      },
      {
        id: 9,
        name: "Gyoza",
        description: "",
        image: images.GYOZA,
        price: 5.1,
      },
      {
        id: 10,
        name: "Spicy Edamame",
        description: "",
        image: images.SPICY_EDAMAME,
        price: 5.4,
      },
      {
        id: 11,
        name: "Agedashi Tofu",
        description: "",
        image: images.AGEDASHI_TOFU,
        price: 5.9,
      },
      {
        id: 12,
        name: "Shumai",
        description: "",
        image: images.SHUMAI,
        price: 6.3,
      },
      {
        id: 13,
        name: "Teba Shio",
        description: "",
        image: images.TEBA_SHIO,
        price: 6.5,
      },
      {
        id: 14,
        name: "Karaage",
        description: "",
        image: images.KARAAGE,
        price: 6.5,
      },
    ],
  },
  {
    id: "Sushi",
    bg: images.SUSHI,
    items: [
      {
        id: 15,
        name: "",
        image: images.SUSHI_TUNA,
        price: 8.5,
      },
      {
        id: 16,
        name: "",
        image: images.SUSHI_SALMON,
        price: 8.5,
      },
      {
        id: 17,
        name: "",
        image: images.SUSHI_SQUID,
        price: 8.5,
      },
      {
        id: 18,
        name: "",
        image: images.SUSHI_FRESHWATER_EEL,
        price: 8.5,
      },
      {
        id: 19,
        name: "",
        image: images.SUSHI_SHRIMP,
        price: 8.7,
      },
      {
        id: 20,
        name: "",
        image: images.SUSHI_EGG,
        price: 8.7,
      },
      {
        id: 21,
        name: "",
        image: images.SUSHI_SEA_EEL,
        price: 9.0,
      },
    ],
  },
  {
    id: "Noodle soups",
    bg: images.NOODLESOUPS,
    items: [
      {
        id: 22,
        name: "Champon",
        description: "",
        image: images.CHAMPON,
        price: 10.9,
      },
      {
        id: 23,
        name: "Hoto",
        description: "",
        image: images.HOTO,
        price: 11.9,
      },
      {
        id: 24,
        name: "Okinawa Soba",
        description: "",
        image: images.OKINAWA_SOBA,
        price: 12.9,
      },
      {
        id: 25,
        name: "Udon Noedels",
        description: "",
        image: images.UDON_NOODLES,
        price: 12.9,
      },
      {
        id: 26,
        name: "Butajiru",
        description: "",
        image: images.BUTAJIRU,
        price: 13.5,
      },
    ],
  },
  {
    id: "Desserts",
    bg: images.DESSERTS,
    items: [
      {
        id: 27,
        name: "Daifuku",
        description: "",
        image: images.DAIFUKU,
        price: 6.1,
      },
      {
        id: 28,
        name: "Dorayaki",
        description: "",
        image: images.DORAYAKI,
        price: 6.1,
      },
      {
        id: 29,
        name: "Dango",
        description: "",
        image: images.DANGO,
        price: 6.3,
      },
      {
        id: 30,
        name: "Anmitsu",
        description: "",
        image: images.ANMITSU,
        price: 7.0,
      },
      {
        id: 31,
        name: "Anko",
        description: "",
        image: images.ANKO,
        price: 7.0,
      },
      {
        id: 32,
        name: "Ohagi",
        description: "",
        image: images.OHAGI,
        price: 7.2,
      },
    ],
  },
];

const MenuPage: FunctionComponent<MenuPagePropType> = () => {
  const [currentMenuOption, setCurrentMenuOption] = useState<string>(
    theMenu[0].id
  );

  const selectedMenuOptionObjectData = theMenu.find(
    (obj) => obj.id === currentMenuOption
  );

  return (
    <div className={styles.menu}>
      <div
        className={styles.oishiiMenuOptionsWrapper}
        style={{
          background: `url(${images.JAPANESE_RESTAURANT.src}), rgba(0, 0, 0, 0.75)`,
          backgroundBlendMode: "overlay",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <h1>menu</h1>

        <div className={styles.oishiiMenuOptions}>
          {theMenu.map((card) => (
            <MenuOptionCard
              key={card.id}
              name={card.id}
              bg={card.bg.src}
              setCurrentMenuOption={setCurrentMenuOption}
            />
          ))}
        </div>
      </div>
      <div className={styles.menuContent}>
        <SideMenuNav
          menu={theMenu}
          currentMenuOption={currentMenuOption}
          setCurrentMenuOption={setCurrentMenuOption}
        />

        <div className="main-content">
          {selectedMenuOptionObjectData && (
            <MenuOption
              id={selectedMenuOptionObjectData.id}
              title={selectedMenuOptionObjectData.id}
              menuItems={selectedMenuOptionObjectData.items}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
