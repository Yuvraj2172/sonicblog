import React from "react";
import Image from "next/image";
import styles from "./featured.module.css";
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b> Hey, Yuvraj Soni here! </b>Discover some of my ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill></Image>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle} >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio est
            voluptatum similique quos deleniti minima?
          </h1>
          <p className={styles.postDesc} >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            exercitationem odit autem iure voluptate cupiditate, veritatis vel
            modi dicta provident molestiae quos culpa commodi, suscipit officiis
            a dignissimos alias accusantium laborum atque vero? Tempore dicta
            reprehenderit voluptatem unde nostrum animi!
          </p>
          <button className={styles.button} >Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
