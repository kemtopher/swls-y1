"use client";
import { useRef, useState } from 'react';



export const FilmLeader = () => {
    const [position, setPosition] = useState();
    const countdownChar = useRef(null);

    return (
        <div className="film-leader-container">
            <div className="circle-outer">
                <div className="circle-inner">
                    <div className="countdown-container">
                        <h1 className="countdown-char" ref={countdownChar}>4</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}