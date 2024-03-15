"use client"

import './post-style.css';
import Image from 'next/image';

export default function Post({ username, imagePath, text }) {
    return (
        <div className='post-bg'>
            <div className='user-info'>
                <Image src={imagePath} width={40} height={40} alt='user pic'
                    onError={(e) => {
                        e.currentTarget.src = "/assets/user-pic.jpeg";
                        e.currentTarget.onerror = null;
                    }} />
                <span>{username}</span>
            </div>
            <div className='post-text'>
                <p>
                    {text}
                </p>
            </div>
            <div className='post-actions'>
                <button id='like'>
                    <Image src={"/assets/mi-piace.png"} alt='Mi Piace' width={40} height={40} />
                </button>
                <button id='comment'>
                    <Image src={"/assets/comment.png"} alt='Commenta' width={40} height={40} />
                </button>
            </div>
        </div>
    );
}