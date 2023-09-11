import React from "react";
import styles from "./menu.module.css";
import MenuPosts from "../menuposts/MenuPosts";
import MenuCategory from "../menuCategories/MenuCategory";
const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{`What's Hot`}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />

      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>

      <MenuCategory />

      <h1 className={styles.title}>Editors Pick</h1>
      <div className={styles.items}>
        <MenuPosts withImage={true} />
      </div>
    </div>
  );
};

export default Menu;
