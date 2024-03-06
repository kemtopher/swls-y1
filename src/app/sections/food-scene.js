"use client";

import React, {useEffect, useRef} from 'react';
import { gsap } from 'gsap';
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { horizontalLoop } from '../helpers/horizontalLoop';
import useWindowDimensions from '../components/useWindowDimensions';
import "../styles/scene-food.scss";

gsap.registerPlugin(Draggable);
gsap.registerPlugin(ScrollTrigger);

function FoodScene() {
    const cafeContainer = useRef(null);
    const foodTitle = useRef(null);
    const foodSlide = useRef(null);
    const foodCont = useRef(null);
    const innerSlide = useRef(null);
    const photos = useRef([]);
    const letters = useRef([]);
    const {width, height} = useWindowDimensions();

    useEffect(() => {
        if (photos.current.one === undefined) return;

        const group = gsap.utils.toArray([
            photos.current.one,
            photos.current.two,
            photos.current.three,
            photos.current.four,
            photos.current.five,
            photos.current.six,
        ]);
        
        let activeElement;
        // const loop = horizontalLoop(group, {
        //     paused: false, 
        //     repeat: -1,
        //     draggable: true,
        //     center: true,
        //     speed: 0.5,
        //     onChange: (element, index) => {
        //         activeElement && activeElement.classList.remove("active");
        //         element.classList.add("active");
        //         activeElement = element;
        //     }
        // });
    }, [])

    useEffect(() => {
        const ctx = gsap.context(() => {

            // pin section
            gsap
            .timeline({
                scrollTrigger: {
                    trigger: cafeContainer.current,
                    start: "top top",
                    end: "+=" + cafeContainer.current.offsetHeight / 2,
                    pin: true,
                    scrub: true,
                }
            })

            const letterGroup = gsap.utils.toArray([
                letters.current.c,
                letters.current.a,
                letters.current.f,
                letters.current.e1,
                letters.current.t,
                letters.current.e2,
                letters.current.r,
                letters.current.i,
                letters.current.a
            ]);

            gsap
            .fromTo(letterGroup, {
                y: 200
            }, {
                y: 0,
                duration: 3,
                stagger: 0.3,
                yoyo: true
            })

            // title and photos in
            gsap
            .timeline({
                scrollTrigger: {
                    trigger: cafeContainer.current,
                    start: "top 25%",
                    duration: 1.45,
                    ease: "none",
                }
            })
            // .fromTo(foodTitle.current, {
            //     autoAlpha: 0,
            //     scale: 10
            // }, {
            //     autoAlpha: 1,
            //     scale: 1,
            //     duration: 1,
            //     ease: "power1.out"
            // })
            .fromTo(innerSlide.current, {
                autoAlpha: 0,
                y: 150
            }, {
                autoAlpha: 1,
                y: 0,
                ease: "power1.out"
            })


            // title out
            gsap
            .timeline({
                scrollTrigger: {
                    trigger: cafeContainer.current,
                    start: "top -1px",
                    end: "+=" + cafeContainer.current.offsetHeight,
                    scrub: true,
                }
            })
            .to(foodTitle.current, {
                scale: 5,
                y: "+=" + cafeContainer.current.offsetHeight / 1.3,
                ease: "none",
            }, 0)

            
        }, cafeContainer);

        return () => ctx.revert();
    }, [])
  return (
    <section ref={cafeContainer} className="cafeteria">
        <div ref={foodTitle} className="cafe-title cafe-font">
            <div className="title-letter-wrap">
                <span className="letter-overflow">
                    <span ref={ref => letters.current.c = ref} className="cafe-letter">C</span>
                </span>
                <span className="letter-overflow">
                    <span ref={ref => letters.current.a = ref} className="cafe-letter">A</span>
                </span>
                <span className="letter-overflow">
                    <span ref={ref => letters.current.f = ref} className="cafe-letter">F</span>
                </span>
                <span className="letter-overflow">
                    <span ref={ref => letters.current.e1 = ref} className="cafe-letter">E</span>
                </span>
                <span className="letter-overflow">
                    <span ref={ref => letters.current.t = ref} className="cafe-letter">T</span>
                </span>
                <span className="letter-overflow">
                    <span ref={ref => letters.current.e2 = ref} className="cafe-letter">E</span>
                </span>
                <span className="letter-overflow">
                    <span ref={ref => letters.current.r = ref} className="cafe-letter">R</span>
                </span>
                <span className="letter-overflow">
                    <span ref={ref => letters.current.i = ref} className="cafe-letter">I</span>
                </span>
                <span className="letter-overflow">
                    <span ref={ref => letters.current.a = ref} className="cafe-letter">A</span>
                </span>
            </div>
        </div>
        <div ref={foodCont} className="horizontal-stage">
            <div ref={foodSlide} className="horizontal-slide">
                <div ref={innerSlide} className="inner-slide">
                    <div ref={ref => photos.current.one = ref} className="image-wrap">
                        <div className="sizer">
                            <div className="image-reveal">
                                <img src="/food-bapsang2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div ref={ref => photos.current.two = ref} className="image-wrap">
                        <div className="sizer">
                            <div className="image-reveal">
                                <img src="/food-bapsang2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div ref={ref => photos.current.three = ref} className="image-wrap">
                        <div className="sizer">
                            <div className="image-reveal">
                                <img src="/food-budae.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div ref={ref => photos.current.four = ref} className="image-wrap">
                        <div className="sizer">
                            <div className="image-reveal">
                                <img src="/food-bapsang2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div ref={ref => photos.current.five = ref} className="image-wrap">
                        <div className="sizer">
                            <div className="image-reveal">
                                <img src="/food-bapsang2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div ref={ref => photos.current.six = ref} className="image-wrap">
                        <div className="sizer">
                            <div className="image-reveal">
                                <img src="/food-budae.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FoodScene