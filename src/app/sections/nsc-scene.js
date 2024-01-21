"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import localfont from 'next/font/local';
import '../globals.css';
import '../styles/scene-nsc.scss';

gsap.registerPlugin(ScrollTrigger);

const bigCaslon = localfont({
    src: '../fonts/BigCaslon.ttf'
})

const NscScene = () => {
    const nscContainer = useRef();
    const slide0 = useRef();
    const slide1 = useRef();
    const slide2 = useRef();
    const outerTitle = useRef();
    const title0 = useRef();
    const title1 = useRef();
    const title2 = useRef();
    
    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo([slide0.current, slide1.current, slide2.current], {
                x: '-100%'
            },
            {
                x: '0%',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: nscContainer.current,
                    start: "top center",
                    markers: true,
                }
            })
            gsap.fromTo([title0.current, title1.current, title2.current],
            {
                autoAlpha: 0
            },
            {
                autoAlpha: 1,
                delay: 0.55,
                duration: 1.5,
                scrollTrigger: {
                    trigger: nscContainer.current,
                    start: "top center",
                    markers: true,
                }
            })
        }, nscContainer);

        return () => ctx.revert();
    }, [])

    return (
        <section id="nsc" className="section-boundary" ref={nscContainer}>
            <div className="nsc-stage">
                <div className={`nsc-content ${bigCaslon.className}`}>
                    <div className="outer-title-flex" ref={outerTitle}>
                        <div className="title-flex">
                            <span>
                                <h1 className="nsc-title" ref={title0}>
                                    <span className="title-letter">N</span>
                                    <span className="title-letter">I</span>
                                    <span className="title-letter">G</span>
                                    <span className="title-letter">H</span>
                                    <span className="title-letter">T</span>
                                </h1>
                            </span>
                            <span>
                                <h1 className="nsc-title" ref={title1}>
                                    <span className="title-letter">S</span>
                                    <span className="title-letter">N</span>
                                    <span className="title-letter">A</span>
                                    <span className="title-letter">C</span>
                                    <span className="title-letter">K</span>
                                </h1>  
                            </span>  
                        </div>
                        <div>
                            <span>
                                <h1 className="nsc-title" ref={title2}>
                                    <span className="title-letter">C</span>
                                    <span className="title-letter">L</span>
                                    <span className="title-letter">U</span>
                                    <span className="title-letter">B</span>
                                </h1>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="slide-sections">
                    <div className="slide" ref={slide0}></div>
                    <div className="slide" ref={slide1}></div>
                    <div className="slide" ref={slide2}></div>
                </div>
            </div>
        </section>
    );
}

export default NscScene;