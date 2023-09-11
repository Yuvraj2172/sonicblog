import React from "react";
import styles from "./blogpage.module.css";
import CardList from "../components/cardList/CardList";
import Menu from "../components/menu/Menu";
const Blog = () => {
  return <div className={styles.container}>
    <h1 className={styles.title} >{cat}</h1>
    <div className={styles.content} >
        <CardList page={page} cat={cat}/>
        <Menu/>
    </div>
  </div>;
};

export default Blog;
