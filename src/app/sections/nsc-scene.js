"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { horizontalLoop } from '../assets/horizontalLoop';
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
    const outerTitle = useRef(null);
    const title0 = useRef(null);
    const title1 = useRef(null);
    const title2 = useRef(null);
    const poster1 = useRef(null);
    const poster2 = useRef(null);
    const poster3 = useRef(null);
    const poster4 = useRef(null);
    const poster5 = useRef(null);
    const poster6 = useRef(null);
    const poster7 = useRef(null);
    const poster8 = useRef(null);
    
    useEffect(() => {
        let ctx = gsap.context(() => {

            gsap
            .timeline({
                scrollTrigger: {
                    trigger: nscContainer.current,
                    start: "top top",
                    pin: true,
                    scrub: true,
                    end: () => "+=" + scrollContainer.current.offsetWidth,
                }
            })
            .to(scrollContainer.current, {
                xPercent: -100
            }, 0)
            
            gsap
            .timeline({
                scrollTrigger: {
                    trigger: nscContainer.current,
                    start: "top top",
                    scrub: true,
                    end: () => '+=' + scrollContainer.current.offsetWidth,
                    markers: true
                }
            })
            .fromTo([titleTop.current, titleBot.current], {
                xPercent: 0
            }, {
                xPercent: -100,
            }, 0)
            .fromTo(titleMid.current, {
                xPercent: -100
            }, {
                xPercent: 0,
            }, 0)
            .to(poster1.current, {
                xPercent: 60
            },0)
            .to(poster2.current, {
                xPercent: 10.5
            },0)
            .to(poster3.current, {
                xPercent: 35
            })
            .to(poster4.current, {
                xPercent: -25.5
            },0)
            // .to(poster5.current, {
            //     xPercent: 55.5
            // },0)
            .to(poster7.current, {
                xPercent: -88
            },0)
            .to(poster6.current, {
                xPercent: -18
            },0)
            .to(poster8.current, {
                xPercent: -65
            })

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
                x: '-100%'
            },
            {
                x: '0%',
                stagger: 0.2,
            })
            .fromTo(titleSection.current, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                duration: 1.5
            }, 0.6)
            .fromTo(scrollContainer.current, {
                autoAlpha: 0,
            }, {
                autoAlpha: 1,
                ease: 'none',
                duration: 0.8
            }, 0.8)

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
                        <img className='nsc-poster1' ref={poster1} src='/7_Caitlin_jqpqb3.jpg' alt='Night Snack Club poster image'/>
                        <img className='nsc-poster2 size-sm fl-end' ref={poster2} src='/25_Leah_qiqsp1.png' alt='Night Snack Club poster image'/>
                        <img className='nsc-poster3 fl-start size-md' ref={poster3} src='/19_Poster_Tarot_wyyemj.jpg' alt='Night Snack Club poster image'/>
                        <img className='nsc-poster4 fl-end' ref={poster4} src='/34_Hui_sudefj.jpg' alt='Night Snack Club poster image'/>
                        <img className='nsc-poster5 fl-start' ref={poster5} src='/12_Ale_b7io9j.jpg' alt='Night Snack Club poster image'/>
                        <img className='nsc-poster7 size-sm fl-end' ref={poster7} src='/nsc-page-blog.png' alt='Night Snack Club poster image'/>
                        <img className='nsc-poster8 fl-end size-xl' ref={poster8} src='/17_Caitlin_v6uwf7.png ' alt='Night Snack Club poster image'/>
                        <img className='nsc-poster6 size-md fl-start' ref={poster6} src='/37_Jenn_hcxmxl.jpg' alt='Night Snack Club poster image'/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NscScene;