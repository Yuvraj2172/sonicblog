import Image from "next/image";
import styles from "./comments.module.css";
import Link from "next/link";
const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write} >
            <textarea placeholder="write a comment" className={styles.input} />
            <button className={styles.button} >Send</button>
        </div>
      ) : (
        <Link href="/login">login to write a comment</Link>
      )}
      <div className={styles.comments} >
        <div className={styles.comment} >
            <div className={styles.user} >
                <Image className={styles.image} alt="" src="/p1.jpeg" width={50} height={50} />
                <div className={styles.userInfo} >
                    <span className={styles.username} >John Doe</span>
                    <span className={styles.date} >01.01.2023</span>
                </div>
            </div>
            <p className={styles.desc} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni iure aperiam at debitis suscipit quibusdam sint voluptates ad cum.</p>
        </div>
        
        <div className={styles.comment} >
            <div className={styles.user} >
                <Image className={styles.image} alt="" src="/p1.jpeg" width={50} height={50} />
                <div className={styles.userInfo} >
                    <span className={styles.username} >John Doe</span>
                    <span className={styles.date} >01.01.2023</span>
                </div>
            </div>
            <p className={styles.desc} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni iure aperiam at debitis suscipit quibusdam sint voluptates ad cum.</p>
        </div>

        <div className={styles.comment} >
            <div className={styles.user} >
                <Image className={styles.image} alt="" src="/p1.jpeg" width={50} height={50} />
                <div className={styles.userInfo} >
                    <span className={styles.username} >John Doe</span>
                    <span className={styles.date} >01.01.2023</span>
                </div>
            </div>
            <p className={styles.desc} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni iure aperiam at debitis suscipit quibusdam sint voluptates ad cum.</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
