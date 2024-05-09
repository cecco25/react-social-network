import Post from '../Post/Post'
import './feed-style.css'

export default function Feed() {

    let posts = [
        {
            username: "gatto_amante_87",
            imagePath: "https://source.unsplash.com/random/800x600",
            text: "Oggi ho fatto amicizia con un uccellino nel giardino di casa mia. È incredibile quanto sia bello osservare la natura! 🌿🐦",
        },
        {
            username: "viaggiatore_solitario",
            imagePath: "https://source.unsplash.com/random/800x601",
            text: "Ho camminato per chilometri tra boschi fitti e sentieri tortuosi, solo per scoprire la bellezza nascosta di un piccolo villaggio di montagna. Non c'è niente di più liberatorio che perdersi nella natura. 🏞️🌲",
        },
        {
            username: "foodie_in_cucina",
            imagePath: "https://source.unsplash.com/random/800x602",
            text: "Oggi ho sperimentato una nuova ricetta di pasta fatta in casa e devo dire che è stata un successo! Il profumo che si è diffuso in tutta la casa è stato semplicemente divino. 🍝👩‍🍳",
        },
        {
            username: "artista_di_strada",
            imagePath: "https://source.unsplash.com/random/800x603",
            text: "Ho dipinto un murales sul muro di una strada poco frequentata e la reazione delle persone che passavano è stata sorprendente! È incredibile come l'arte possa unire le persone. 🎨🏙️",
        },
        {
            username: "musicista_appassionato",
            imagePath: "https://source.unsplash.com/random/800x604",
            text: "Ho trascorso la giornata componendo una nuova canzone e finalmente l'ho registrata. Non vedo l'ora di condividerla con il mondo e spero che possa toccare il cuore di chiunque la ascolti. 🎶❤️",
        },
    ];

    return (
        posts.map(post => (
            <Post username={post.username} imagePath={post.imagePath} text={post.text}></Post>
        ))
    );
};