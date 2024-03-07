import './post-style.css';
import Image from 'next/image';

export default function Post() {
    return (
        <div className='post-bg'>
            <div className='user-info'>
                <Image src={"/assets/user-pic.jpeg"} width={30} height={30} alt='user pic' />
                <span>Nome Utente</span>
            </div>
            <div className='post-text'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempora sint ad dicta hic, corporis atque. Eius quis blanditiis voluptates, ipsam nesciunt in unde nihil ratione nostrum, facere nulla labore.
                </p>
            </div>
            <div className='post-actions'>
                <button>Mi Piace</button>
                <button>Commenta</button>
            </div>
        </div>
    );
}