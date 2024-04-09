"use client"

import './post-style.css';
import Image from 'next/image';
import { useState } from 'react';

export default function Post({ username, imagePath, text }) {

    const [likes, setLikes] = useState(0);

    function handleClick() {
        if (likes > 0) {
            setLikes(likes - 1)
        } else {
            setLikes(likes + 1)
        }
    }

    return (
        <div className='post-bg'>
            <div className='user-info'>
                <Image src={imagePath} width={48} height={48} alt='user pic' draggable="false"
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
                <button id='like' onClick={handleClick}>
                    {(likes > 0) ?
                        <Image src={"/assets/like-filled.svg"} alt='Mi Piace' width={32} height={32} draggable="false" /> :
                        <Image src={"/assets/like.svg"} alt='Mi Piace' width={32} height={32} draggable="false" />
                    }
                    <label>{likes}</label>
                </button>
                <button id='comment'>
                    <Image src={"/assets/comment.svg"} alt='Commenta' width={32} height={32} draggable="false" />
                </button>
            </div>
        </div>
    );
}