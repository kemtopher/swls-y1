"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../globals.css';
import '../styles/scene-nsc.scss';

gsap.registerPlugin(ScrollTrigger);

const NscScene = () => {
    const nscContainer = useRef();
    const slide0 = useRef();
    const slide1 = useRef();
    const slide2 = useRef();

    
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
            });

            gsap.to(nscContainer.current, {
                scrollTrigger: {
                    trigger: nscContainer.current,
                    pin: nscContainer.current,
                    start: "top top",
                    end: '+=200%'
                }
            })

        }, nscContainer);

        return () => ctx.revert();
    }, [])

    return (
        <section id="nsc" className="section-boundary" ref={nscContainer}>
            <div className="nsc-stage">
                <div className="slide-sections">
                    <div className="slide" ref={slide0}></div>
                    <div className="slide" ref={slide1}></div>
                    <div className="slide" ref={slide2}></div>
                </div>
                {/* <div className="nsc-content">
                    <h1 className="nsc-title">
                        <span className="title-letter">N</span>
                        <span className="title-letter">I</span>
                        <span className="title-letter">G</span>
                        <span className="title-letter">H</span>
                        <span className="title-letter">T</span>
                    </h1>
                    <h1 className="nsc-title">
                        <span className="title-letter">S</span>
                        <span className="title-letter">N</span>
                        <span className="title-letter">A</span>
                        <span className="title-letter">C</span>
                        <span className="title-letter">K</span>
                    </h1>
                    <h1 className="nsc-title">
                        <span className="title-letter">C</span>
                        <span className="title-letter">L</span>
                        <span className="title-letter">U</span>
                        <span className="title-letter">B</span>
                    </h1>
                </div> */}
            </div>
        </section>
    );
}

export default NscScene;