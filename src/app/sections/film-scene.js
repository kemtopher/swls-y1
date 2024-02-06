"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Oswald } from 'next/font/google';
import useWindowDimensions from '../components/useWindowDimensions';
import { VideoControls } from '../assets/video-controls';
import '../globals.css';
import '../styles/scene-film.scss';
gsap.registerPlugin(ScrollTrigger);

const oswald = Oswald({
    subsets: ['latin'],
    weight: '700'
});

const FilmScene = () => {
    // const { height, width } = useWindowDimensions();

    const sectionContainer = useRef(null);
    const filmContainer = useRef(null);
    const iconStage = useRef(null);
    const videoControl = useRef(null);
    const charA = useRef(null);
    const charF = useRef(null);
    const charP = useRef(null);
    const charZ = useRef(null);
    const charI = useRef(null);
    const charN = useRef(null);
    const charE = useRef(null);
    const pbrTile = useRef(null);
    const aboutText = useRef(null);
    const crewPhoto = useRef(null);
    const photoRow = useRef(null);
    const stickersIcon = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const filmTitleTl = gsap.timeline({
                scrollTrigger: {
                    trigger: filmContainer.current,
                    start: "top 200px",
                }
            });

            ScrollTrigger.create({
                trigger: sectionContainer.current,
                pin: filmContainer.current,
                start: "top top",
                // end: "bottom bottom",
                // end: () => filmContainer.current.offsetHeight + window.innerHeight
                // onUpdate: () => console.log(window.innerHeight)
            })

            filmTitleTl
            .fromTo([
                charA.current, 
                charF.current, 
                charP.current, 
                charZ.current, 
                charI.current, 
                charN.current, 
                charE.current
            ], {
                left: '-100%'
            },{
                left: 0,
                stagger: 0.05,
            })

            gsap
            .timeline()
            .to(pbrTile.current, {
                y: -pbrTile.current.offsetHeight / 2,
                ease: 'none',
                scrollTrigger: {
                    trigger: pbrTile.current,
                    start: "top bottom",
                    scrub: true,
                }
            })
            .to(crewPhoto.current, {
                y: crewPhoto.current.offsetHeight / -2,
                ease: 'none',
                scrollTrigger: {
                    trigger: crewPhoto.current,
                    start: "top bottom",
                    scrub: true,
                }
            })
            
            gsap.fromTo(videoControl.current, {
                autoAlpha: 0
            },{
                autoAlpha: 1,
                duration: 0.5,
                reversed: true,
                scrollTrigger: {
                    trigger: videoControl.current,
                    pin: videoControl.current,
                    start: "top top",
                    // end: "bottom bottom",
                    markers: true
                }
            })
        });

        return () => ctx.revert();
    }, []);

    return (
        <section id="film" ref={sectionContainer} className="section-boundary">
            <div className="film-grid">
                <div ref={filmContainer} className="film-title-grid">
                    <div className="grid-character-wrap">
                        <div ref={charA} className={`grid-character ${oswald.className}`}>A</div>
                    </div>
                    <div className="grid-character-wrap">
                        <div ref={charF} className={`grid-character ${oswald.className}`}>F</div>
                    </div>
                    <div className="grid-character-wrap">
                        <div ref={charP} className={`grid-character ${oswald.className}`}>P</div>
                    </div>
                    <div className="grid-character-wrap line-2">
                        <div ref={charZ} className={`grid-character ${oswald.className}`}>Z</div>
                    </div>
                    <div className="grid-character-wrap line-2">
                        <div ref={charI} className={`grid-character ${oswald.className}`}>I</div>
                    </div>
                    <div className="grid-character-wrap line-2">
                        <div ref={charN} className={`grid-character ${oswald.className}`}>N</div>
                    </div>
                    <div className="grid-character-wrap line-2">
                        <div ref={charE} className={`grid-character ${oswald.className}`}>E</div>
                    </div>
                </div>
            
                <div className="paralax-container">
                    <div ref={iconStage} className="paralax-stage">
                        <div className="para-row fl-end">
                            <span className="para-card">
                                <div ref={aboutText} className={`about-text ${oswald.className}`}>
                                    <p>ATLFilmParty (AFP) is a free local Atlanta film competition and industry networking event with a goal of transforming ATL's film industry into a real a$$ community that is accessible to all.</p>
                                </div>
                            </span>
                        </div>
                        <div className="para-row pbr-row">
                            <span className="para-card pbr-card md left">
                                <img ref={pbrTile} className='icon-pbr' src='/afp_pbr.png' alt='ATLFilmParty icon'/>
                            </span>
                        </div>
                        <div ref={photoRow} className="para-row fl-end no-r-pad">
                            <span className="para-card right afp-crew">
                                <img ref={crewPhoto} className='afp-icon' src='/afp_crew.png' alt='ATLFilmParty icon'/>
                            </span>
                        </div>
                        {/* <div className="para-row center">
                            <span className="para-card">
                                <img ref={stickersIcon} className='afp-icon afp-icon7' src='/afp_stickers.png' alt='ATLFilmParty icon'/>
                            </span>
                        </div> */}
                    </div>
                </div>

                <div ref={videoControl} className="video-control">
                    <img ref={stickersIcon} className='afp-icon afp-icon7' src='/afp_stickers.png' alt='ATLFilmParty icon'/>
                </div>
            </div>
        </section>
    );
}

export default FilmScene;