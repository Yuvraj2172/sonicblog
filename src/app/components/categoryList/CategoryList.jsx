import React from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "./categorylist.module.css";
// const getData = async()=>{
//   const res = await fetch("https://localhost:3000/api/categories",{
//     cache : "no-store",
//   });
// }
const CategoryList = () => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>Popular Categories</h1>
      <div className={Styles.categories}>
          <Link href="/blog?cat=style" className={`${Styles.category} ${Styles.style}`} >
            <Image
              src="/style.png"
              alt=""
              width={32}
              height={32}
              className={Styles.image}
            />
            style
          </Link>
          <Link href="/blog?cat=fashion" className={`${Styles.category} ${Styles.fashion}`} >
            <Image
              src="/fashion.png"
              alt=""
              width={32}
              height={32}
              className={Styles.image}
            />
            style
          </Link>
          <Link href="/blog?cat=style" className={`${Styles.category} ${Styles.food}`} >
            <Image
              src="/food.png"
              alt=""
              width={32}
              height={32}
              className={Styles.image}
            />
            style
          </Link>
          <Link href="/blog?cat=style" className={`${Styles.category} ${Styles.travel}`} >
            <Image
              src="/style.png"
              alt=""
              width={32}
              height={32}
              className={Styles.image}
            />
            style
          </Link>
          <Link href="/blog?cat=style" className={`${Styles.category} ${Styles.culture}`} >
            <Image
              src="/style.png"
              alt=""
              width={32}
              height={32}
              className={Styles.image}
            />
            style
          </Link>
          <Link href="/blog?cat=style" className={`${Styles.category} ${Styles.coding}`} >
            <Image
              src="/style.png"
              alt=""
              width={32}
              height={32}
              className={Styles.image}
            />
            style
          </Link>
      </div>
    </div>
  );
};

export default CategoryList;
