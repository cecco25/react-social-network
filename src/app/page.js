import Post from "@/components/Post/Post";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.post}>
        <Post username={"Utente Prova"} imagePath={"https://images.unsplash.com/photo-1710475512344-853809054d97?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} text={"Lorem Ipsum"} />
      </div>
      {/* <div className={styles.nav}>
        <Navbar />
      </div> */}
    </main>
  );
}
