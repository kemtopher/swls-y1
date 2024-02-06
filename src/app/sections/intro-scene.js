"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Archivo_Black } from 'next/font/google';
import '../globals.css';
import '../styles/scene-intro.scss';
gsap.registerPlugin(ScrollTrigger);

const archivo = Archivo_Black({
    subsets: ['latin'],
    weight: '400'
});

const IntroScene = () => {
    const introContainer = useRef();
    const backgroundText = useRef()
    const bodyText = useRef();

    useEffect(() => {
        let ctx = gsap.context(() => {

            const bgTextTl = gsap.timeline();

            bgTextTl
            .fromTo(backgroundText.current, {
                autoAlpha: 0
            },
            {
                autoAlpha: 0.25,
                scrollTrigger: {
                    trigger: backgroundText.current,
                    start: "top 40%",
                    end: "top top",
                    scrub: true,
                }
            })
            .to(backgroundText.current, {
                scrollTrigger: {
                    trigger: introContainer.current,
                    pin: backgroundText.current,
                    start: "top top",
                    end: "bottom bottom",
                }
            }, 0)

            gsap.from(bodyText.current, {
                autoAlpha: 0,
                scrollTrigger: {
                    trigger: introContainer.current,
                    start: "top top",
                }
            })

        }, introContainer);

        return () => ctx.revert();
    }, [])

    return (
        <section id="intro" className="section-boundary extended" ref={introContainer}>
            <div className="intro-grid">
                <span className="intro-container">
                    <h4 className="intro-body" ref={bodyText}>
                    SWLS is a review of creative projects I've been a part of over the past year. You can think of this as a yearly catch up. It's also a way for me to ensure I document my projects. You know, like accountability or something like that. The first edition will be a little more than just the last year, mainly because I didn't think to document much and I need to fill the space up. BUT HEY, this is not a bad thing! Since I've been so bad about documenting my projects, you've probably not seen them. WIN-WIN if you ask me. 
                    </h4>
                </span>
                <div className="background-title" ref={backgroundText}>
                    <h1 className={`intro-title ${archivo.className}`}>WHAT AM I <br /> LOOKING <br />AT RIGHT <br />NOW?</h1>
                </div>
            </div>
        </section>
    );
}

export default IntroScene;