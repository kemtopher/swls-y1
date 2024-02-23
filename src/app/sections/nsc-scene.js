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
    const nscContainer = useRef(null);
    const scrollContainer = useRef(null);
    const titleSection = useRef(null);
    const titleTop = useRef(null);
    const titleMid = useRef(null);
    const titleBot = useRef(null);
    const stage = useRef(null);
    const slide0 = useRef(null);
    const slide1 = useRef(null);
    const slide2 = useRef(null);
    const poster1 = useRef(null);
    const poster2 = useRef(null);
    const poster3 = useRef(null);
    const poster4 = useRef(null);
    const poster5 = useRef(null);
    const poster6 = useRef(null);
    const poster7 = useRef(null);
    const poster8 = useRef(null);
    const poster9 = useRef(null);
    const posterA = useRef(null);

    const wrap1 = useRef(null);
    const wrap2 = useRef(null);
    const wrap3 = useRef(null);
    const wrap4 = useRef(null);
    
    useEffect(() => {
        let ctx = gsap.context(() => {

            const containerTl = gsap.timeline({
                scrollTrigger: {
                    trigger: nscContainer.current,
                    start: "top top",
                    end: "+=" + scrollContainer.current.offsetWidth,
                    pin: true,
                    scrub: 3,
                }
            });
            
            containerTl
            .to(scrollContainer.current, {
                x: "-" + (scrollContainer.current.offsetWidth - nscContainer.current.offsetWidth)
            }, 0);


            gsap
            .timeline({
                scrollTrigger: {
                    trigger: wrap1.current,
                    containerAnimation: containerTl,
                    start: "left right",
                    end: "right left",
                    scrub: true,
                }
            })
            .to(poster1.current, {
                xPercent: 60,
                
            },0)
            .to(poster2.current, {
                xPercent: 10.5
            },0)

            gsap
            .timeline({
                scrollTrigger: {
                    trigger: wrap2.current,
                    containerAnimation: containerTl,
                    start: "left right",
                    end: "right left",
                    scrub: true,
                }
            })
            .to(poster3.current, {
                xPercent: 35
            })
            .to(poster4.current, {
                xPercent: -25.5
            },0)

            gsap
            .timeline({
                scrollTrigger: {
                    trigger: wrap3.current,
                    containerAnimation: containerTl,
                    start: "left right",
                    end: "right left",
                    scrub: true,
                }
            })
            .to(poster7.current, {
                xPercent: -88
            },0)
            .to(poster6.current, {
                xPercent: -48
            },0)

            // gsap
            // .timeline({
            //     scrollTrigger: {
            //         trigger: wrap4.current,
            //         containerAnimation: containerTl,
            //         start: "left right",
            //         end: "right left",
            //         scrub: true,
            //         markers: true,
            //     }
            // })
            // .to(poster8.current, {
            //     xPercent: -65
            // })
            // .to(posterA.current, {
            //     xPercent: -26
            // }, 0)

            
            // TITLE TL STUFF
            containerTl
            .fromTo([titleTop.current, titleBot.current], {
                xPercent: 0
            }, {
                xPercent: -100
            }, 0)
            .fromTo(titleMid.current, {
                xPercent: -100
            }, {
                xPercent: 0,
            }, 0);

            // TITLE SECTION
            gsap
            .timeline({
                scrollTrigger: {
                    trigger: nscContainer.current,
                    start: "top 65%",
                }
            })
            .set([titleTop.current, titleBot.current], {
                right: 0
            })
            .set(titleMid.current, {
                right: 0
            })
            .fromTo([slide0.current, slide1.current, slide2.current], {
                xPercent: -100
            },
            {
                xPercent: 0,
                stagger: 0.2,
            })
            .fromTo(scrollContainer.current, {
                autoAlpha: 0,
            }, {
                autoAlpha: 1,
                ease: 'none',
                duration: 0.8
            })
            .fromTo(titleSection.current, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                duration: 1.2
            }, 1.2)

        }, nscContainer);

        return () => ctx.revert();
    }, [])

    return (
        <section id="nsc" className="section-boundary" ref={nscContainer}>
            <div ref={stage} className="nsc-stage">
                
                <div className="slide-sections">
                    <div className="slide" ref={slide0}></div>
                    <div className="slide" ref={slide1}></div>
                    <div className="slide" ref={slide2}></div>
                </div>

                <div ref={titleSection} className={`title-sections ${bigCaslon.className}`}>
                    <div className="title-slide">
                        <div ref={titleTop} className="slide-container">
                            <span className="title">NIGHTNIGHTNIGHTNIGHTNIGHTNIGHTNIGHTNIGHTNIGHTNIGHTNIGHTNIGHTNIGHTNIGHTNIGHTNIGHTNIGHTNIGHT</span>
                        </div>
                    </div>
                    <div className="title-slide">
                        <div ref={titleMid} className="slide-container slideOpposite">
                            <span className="title title2">SNACKSNACKSNACKSNACKSNACKSNACKSNACKSNACKSNACKSNACKSNACKSNACKSNACKSNACKSNACKSNACKSNACK</span>
                        </div>
                    </div>
                    <div className="title-slide">
                        <div ref={titleBot} className="slide-container">
                            <span className="title">CLUBCLUBCLUBCLUBCLUBCLUBCLUBCLUBCLUBCLUBCLUBCLUBCLUBCLUBCLUBCLUBCLUBCLUBCLUBCLUBCLUBCLUBCLUB</span>
                        </div>
                    </div>
                </div>

                <div className="horizontal-container">
                    <div ref={scrollContainer} className="scroll-container">
                        <div ref={wrap1} className="poster-container">
                            <span ref={poster1} className='nsc-poster1 size-ml poster-wrapper'>
                                <img src='/7_Caitlin_jqpqb3.jpg' alt='Night Snack Club poster image'/>
                            </span>
                            <span ref={poster2} className='nsc-poster2 size-sm fl-end poster-wrapper'>
                                <img src='/25_Leah_qiqsp1.png' alt='Night Snack Club poster image'/>
                            </span>
                        </div>
                        <div ref={wrap2} className="poster-container">
                            <span ref={poster3} className='nsc-poster3 fl-start size-md poster-wrapper'>
                                <img src='/19_Poster_Tarot_wyyemj.jpg' alt='Night Snack Club poster image'/>
                            </span>
                            <span ref={poster4} className='nsc-poster4 size-ml fl-end pos-fr poster-wrapper'>
                                <img src='/34_Hui_sudefj.jpg' alt='Night Snack Club poster image'/>
                            </span>
                        </div>
                        <div ref={wrap3} className="poster-container">
                            <span ref={poster5} className='nsc-poster5 fl-start size-md poster-wrapper'>
                                <img src='/12_Ale_b7io9j.jpg' alt='Night Snack Club poster image'/>
                            </span>
                            <span ref={poster7} className='nsc-poster7 size-sm fl-end pos-fr poster-wrapper'>
                                <img src='/nsc-page-blog.png' alt='Night Snack Club poster image'/>
                            </span>
                        </div>
                        <div ref={wrap4} className="poster-container">
                            <span ref={poster8} className='nsc-poster8 fl-end size-ml poster-wrapper'>
                                <img src='/17_Caitlin_v6uwf7.png ' alt='Night Snack Club poster image'/>
                            </span>
                            <span ref={poster6} className='nsc-poster6 size-md fl-start poster-wrapper'>
                                <img src='/37_Jenn_hcxmxl.jpg' alt='Night Snack Club poster image'/>
                            </span>
                        </div>
                        {/* <div ref={wrap5} className="poster-container">
                            <span ref={poster9} className='nsc-poster9 fl-center size-ml pos-fr poster-wrapper'>
                                <img src='/11_Enle_tkvmma.jpg' alt='Night Snack Club poster image'/>
                            </span>
                            
                            <span ref={posterA} className='nsc-posterA fl-start size-sm poster-wrapper'>
                                <img src='/18_Jocelyn_ow53xy.jpg' alt='Night Snack Club poster image'/>
                            </span>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NscScene;