import Post from "@/components/Post/Post";
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <Post />
    </main>
  );
}
