"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Archivo_Black } from 'next/font/google';
import '../globals.css';
import '../styles/scene-film.scss';
gsap.registerPlugin(ScrollTrigger);

const archivo = Archivo_Black({
    subsets: ['latin'],
    weight: '400'
});

const FilmScene = () => {
    const filmContainer = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {

            

        }, filmContainer);

        return () => ctx.revert();
    }, [])

    return (
        <section id="film" className="section-boundary" ref={filmContainer}>
            <div className="film-grid">
                <span className="film-container">

                </span>
            </div>
        </section>
    );
}

export default FilmScene;