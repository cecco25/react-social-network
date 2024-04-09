"use client"

import './navbar-style.css';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {

    function changeIcon(pathName, iconType) {
        if (iconType == "home") {
            return pathName == "/" ? "/assets/home-filled.svg" : "/assets/home.svg"
        } else if (iconType == "notifications") {
            return pathName == "/notifications" ? "/assets/notifica-filled.png" : "/assets/notifica.png"
        }
    }

    return (
        <nav className='nav'>
            <div className='home'>
                <Link href={"/"}>
                    <Image src={changeIcon(usePathname(), "home")} alt='Home' width={32} height={32} draggable="false" />
                    Home
                </Link>
            </div>
            <div className='notification'>
                <Link href={"/notifications"}>
                    <Image src={changeIcon(usePathname(), "notifications")} alt='Home' width={32} height={32} draggable="false" />
                    Notifiche
                </Link>
            </div>
        </nav>
    );
}