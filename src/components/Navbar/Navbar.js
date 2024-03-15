import './navbar-style.css';
import Image from 'next/image';

export default function Navbar() {
    return (
        <div className='nav'>
            <div className='home'>
                <button>
                    <Image src={"/assets/home.png"} alt='Home' width={40} height={40}></Image>
                    Home
                </button>
            </div>
            <div className='notification'>
                <button>
                    <Image src={"/assets/notifica.png"} alt='Home' width={40} height={40}></Image>
                    Notifiche
                </button>
            </div>
        </div>
    );
}