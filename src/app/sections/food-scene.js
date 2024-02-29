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
    const {width, height} = useWindowDimensions();

    useEffect(() => {
        // if (photos.current.one === undefined) return;

        const group = gsap.utils.toArray([
            photos.current.one,
            photos.current.two,
            photos.current.three,
            photos.current.four,
            photos.current.five,
            photos.current.six,
        ]);
        
        let activeElement;
        const loop = horizontalLoop(group, {
            paused: false, 
            repeat: -1,
            draggable: true,
            center: true,
            speed: 0.5,
            onChange: (element, index) => {
                activeElement && activeElement.classList.remove("active");
                element.classList.add("active");
                activeElement = element;
            }
        });

        console.log(loop)
        console.log("Drag: ", typeof Draggable)
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
                    markers: true
                }
            })


            // title and photos in
            gsap
            .timeline({
                scrollTrigger: {
                    trigger: cafeContainer.current,
                    start: "top 25%",
                    duration: 1.45,
                    ease: "none",
                    markers: true
                }
            })
            .fromTo(foodTitle.current, {
                autoAlpha: 0,
                scale: 10
            }, {
                autoAlpha: 1,
                scale: 1,
                duration: 1,
                ease: "power1.out"
            })
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
                    markers: true
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
        <div ref={foodTitle} className="cafe-title cafe-font">CAFETERIA</div>
        <div ref={foodCont} className="horizontal-stage">
            <div ref={foodSlide} className="horizontal-slide">
                <div ref={innerSlide} className="inner-slide">
                    <div ref={ref => photos.current.one = ref} className="image-wrap">
                        <div className="sizer">
                            <div className="image-reveal">
                                <img src="/food-balls.jpg" alt="" />
                            </div>
                            <div className="title-reveal">
                                <h4 className="food-title caf-b">Jian Dui</h4>
                            </div>
                        </div>
                    </div>
                    <div ref={ref => photos.current.two = ref} className="image-wrap">
                        <div className="sizer">
                            <div className="image-reveal">
                                <img src="/food-bapsang2.jpg" alt="" />
                            </div>
                            <div className="title-reveal">
                                <h4 className="food-title caf-bi">Bapsang</h4>
                            </div>
                        </div>
                    </div>
                    <div ref={ref => photos.current.three = ref} className="image-wrap">
                        <div className="sizer">
                            <div className="image-reveal">
                                <img src="/food-budae.jpg" alt="" />
                            </div>
                            <div className="title-reveal">
                                <h4 className="food-title caf-m">Budae Jjigae</h4>
                            </div>
                        </div>
                    </div>
                    <div ref={ref => photos.current.four = ref} className="image-wrap">
                        <div className="sizer">
                            <div className="image-reveal">
                                <img src="/food-balls.jpg" alt="" />
                            </div>
                            <div className="title-reveal">
                                <h4 className="food-title caf-b">Jian Dui</h4>
                            </div>
                        </div>
                    </div>
                    <div ref={ref => photos.current.five = ref} className="image-wrap">
                        <div className="sizer">
                            <div className="image-reveal">
                                <img src="/food-bapsang2.jpg" alt="" />
                            </div>
                            <div className="title-reveal">
                                <h4 className="food-title caf-bi">Bapsang</h4>
                            </div>
                        </div>
                    </div>
                    <div ref={ref => photos.current.six = ref} className="image-wrap">
                        <div className="sizer">
                            <div className="image-reveal">
                                <img src="/food-budae.jpg" alt="" />
                            </div>
                            <div className="title-reveal">
                                <h4 className="food-title caf-m">Budae Jjigae</h4>
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