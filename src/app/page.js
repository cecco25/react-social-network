import Post from "@/components/Post/Post";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.post}>
        <Post />
      </div>
      <div className={styles.nav}>
        <Navbar />
      </div>
    </main>
  );
}
