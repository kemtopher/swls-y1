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
    const poster1 = useRef();
    const poster2 = useRef();
    const poster3 = useRef();
    const poster5 = useRef();
    
    useEffect(() => {
        let ctx = gsap.context(() => {
            const nscTl = gsap.timeline({
                scrollTrigger: {
                    trigger: nscContainer.current,
                    start: "top 60%",
                    markers: false,
                }
            });

            const posterTl = gsap.timeline({
                scrollTrigger: {
                    trigger: nscContainer.current,
                    start: "top 40%",
                    markers: false,
                }
            });

            gsap.fromTo([slide0.current, slide1.current, slide2.current], {
                x: '-100%'
            },
            {
                x: '0%',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: nscContainer.current,
                    start: "top center",
                    markers: false,
                }
            })

            nscTl
            .fromTo([title0.current, title1.current, title2.current],
            {
                autoAlpha: 0,
                y: "+=50"
            },
            {
                autoAlpha: 1,
                y: 0,
                delay: 0.55,
                duration: 1,
            })

            posterTl
            .from(poster1.current, {
                bottom: '-63%',
                right: '-26%',
                duration: 0.55,
                ease: 'Power1.out'
            }, 0.5)
            .from(poster5.current, {
                top: "-50%",
                duration: 0.55,
                ease: 'Power1.out'
            }, 0.5)
            .from(poster3.current, {
                autoAlpha: 0,
                duration: 0.55,
                ease: 'Power1.out'
            }, 0.65)
            .from(poster2.current, {
                // right: '-50%',
                autoAlpha: 0,
                y: '25px',
                duration: 0.55,
                ease: 'Power1.out'
            }, 0.65)
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
                
                <div className="poster-section">
                    <img className='nsc-poster1' ref={poster1} src='/1_Poster_Asian_Womxn_r83mgp.png' alt='Night Snack Club poster image'/>
                    <img className='nsc-poster2' ref={poster2} src='/nsc-page-blog.png' alt='Night Snack Club poster image'/>
                    <img className='nsc-poster3' ref={poster3} src='/19_Poster_Tarot_wyyemj.jpg' alt='Night Snack Club poster image'/>
                    {/* <img className='nsc-poster4' src='/23_Poster_Blogworms_w8zdvi.png' alt='Night Snack Club poster image'/> */}
                    <img className='nsc-poster5' ref={poster5} src='/35_Poster_Night_Snacks_ssrvzz.png' alt='Night Snack Club poster image'/>
                </div>
            </div>
        </section>
    );
}

export default NscScene;