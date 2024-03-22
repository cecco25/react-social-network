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
        <div className='nav'>
            <div className='home'>
                <Link href={"/"}>
                    <Image src={changeIcon(usePathname(), "home")} alt='Home' width={40} height={40} />
                    Home
                </Link>
            </div>
            <div className='notification'>
                <Link href={"/notifications"}>
                    <Image src={changeIcon(usePathname(), "notifications")} alt='Home' width={40} height={40} />
                    Notifiche
                </Link>
            </div>
        </div>
    );
}