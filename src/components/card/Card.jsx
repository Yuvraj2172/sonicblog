import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
const Card = ({ key, item }) => {
  console.log(item);
  
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="image" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.23 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1 className={styles.title}>{item.title}</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          natus placeat iure voluptatibus maxime dolorem at voluptates vel minus
          assumenda.
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
