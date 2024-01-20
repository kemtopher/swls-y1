"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../globals.css';
import '../styles/scene-intro.scss';
gsap.registerPlugin(ScrollTrigger);

const IntroScene = () => {
    const introContainer = useRef();
    const backgroundText = useRef();

    
    useEffect(() => {
        let ctx = gsap.context(() => {

            gsap.fromTo(backgroundText.current, {
                autoAlpha: 0
            },
            {
                autoAlpha: 1,
                scrollTrigger: {
                    trigger: introContainer.current,
                    pin: backgroundText.current,
                    start: "top top",
                    end: "bottom bottom",
                    markers: true,
                }
            });

        }, introContainer);

        return () => ctx.revert();
    }, [])

    return (
        <section id="intro" className="section-boundary extended" ref={introContainer}>
            <div className="intro-grid">
                <span className="intro-container">
                    <h4 className="intro-body">
                    SWLS is a review of creative projects I've been a part of over the past year. You can think of this as a yearly catch up. It's also a way for me to ensure I document my projects. You know, like accountability or something like that. The first edition will be a little more than just the last year, mainly because I didn't think to document much and I need to fill the space up. BUT HEY, this is not a bad thing! Since I've been so bad about documenting my projects, you've probably not seen them. WIN-WIN if you ask me. 
                    </h4>
                </span>
                <div className="background-title" ref={backgroundText}>
                    <h1 className="intro-title"><bold>WHAT THE HELL AM I LOOKING AT?</bold></h1>
                </div>
            </div>
        </section>
    );
}

export default IntroScene;