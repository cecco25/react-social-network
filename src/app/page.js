import Post from "@/components/Post/Post";
import styles from "./page.module.css"

export default function Home() {

  let posts = [
    {
      username: "gatto_amante_87",
      imagePath: "https://source.unsplash.com/random/800x600",
      text: "Oggi ho fatto amicizia con un uccellino nel giardino di casa mia. È incredibile quanto sia bello osservare la natura! 🌿🐦"
    },
    {
      username: "viaggiatore_solitario",
      imagePath: "https://source.unsplash.com/random/800x601",
      text: "Ho camminato per chilometri tra boschi fitti e sentieri tortuosi, solo per scoprire la bellezza nascosta di un piccolo villaggio di montagna. Non c'è niente di più liberatorio che perdersi nella natura. 🏞️🌲"
    },
    {
      username: "foodie_in_cucina",
      imagePath: "https://source.unsplash.com/random/800x602",
      text: "Oggi ho sperimentato una nuova ricetta di pasta fatta in casa e devo dire che è stata un successo! Il profumo che si è diffuso in tutta la casa è stato semplicemente divino. 🍝👩‍🍳"
    },
    {
      username: "artista_di_strada",
      imagePath: "https://source.unsplash.com/random/800x603",
      text: "Ho dipinto un murales sul muro di una strada poco frequentata e la reazione delle persone che passavano è stata sorprendente! È incredibile come l'arte possa unire le persone. 🎨🏙️"
    },
    {
      username: "musicista_appassionato",
      imagePath: "https://source.unsplash.com/random/800x604",
      text: "Ho trascorso la giornata componendo una nuova canzone e finalmente l'ho registrata. Non vedo l'ora di condividerla con il mondo e spero che possa toccare il cuore di chiunque la ascolti. 🎶❤️"
    }
  ];

  return (
    <main className={styles.main}>
      <div className={styles.post}>

        <Post username={"Utente Prova"} imagePath={"https://images.unsplash.com/photo-1710475512344-853809054d97?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} text={"Lorem Ipsum"} />

        {posts.map((post) => (
          <Post username={post.username} imagePath={post.imagePath} text={post.text} />
        ))}

      </div>
    </main>
  );
}
