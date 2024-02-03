"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Oswald } from 'next/font/google';
import '../globals.css';
import '../styles/scene-film.scss';
import { FilmLeader } from '../components/film-leader';
gsap.registerPlugin(ScrollTrigger);

const archivo = Oswald({
    subsets: ['latin'],
    weight: '600'
});

const FilmScene = () => {
    const filmContainer = useRef(null);

    useEffect(() => {
        // gsap.set(img, { attr: { src: newSRC } });
        let ctx = gsap.context(() => {

            

        }, filmContainer);

        return () => ctx.revert();
    }, [])

    return (
        <section id="film" className="section-boundary" ref={filmContainer}>
            <div className="film-grid">
                <span className="film-container">
                    <FilmLeader status='' />
                </span>
            </div>
        </section>
    );
}

export default FilmScene;