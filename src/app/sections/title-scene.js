"use client";

import {useEffect, useRef} from 'react';
import { CustomEase, gsap } from 'gsap';
import { Inter } from 'next/font/google';
import { CharI } from '../assets/type_characters';
import '../globals.css';
import '../styles/scene-title.scss';
// gsap.registerPlugin(CustomEase);

const inter = Inter({
  subsets: ['latin'],
  weight: '700'
})

const TitleScene = () => {
  const s1 = useRef(null);
  const c1 = useRef(null);
  const n1 = useRef(null);
  const i1 = useRef(null);
  const e1 = useRef(null);
  const e1Box = useRef(null);
  const w2 = useRef(null);
  const w2Box = useRef(null);
  const e2 = useRef(null);
  const l3 = useRef(null);
  const a3 = useRef(null);
  const s3 = useRef(null);
  const t3 = useRef(null);
  const s4 = useRef(null);
  const s4Box = useRef(null);
  const p4 = useRef(null);
  const e4 = useRef(null);
  const o4 = useRef(null);
  const k4 = useRef(null);

  const subTitle = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      const nTimeline = gsap.timeline();
      nTimeline
      .fromTo(n1.current,
      {
        y: '25%'
      },
      {
        duration: 0.5,
        y: '-75%',
        ease: "none",
      })
      .set(n1.current,
      {
        y: 0
      }, 0.5)
      .to(n1.current,
      {
        // filter: "blur(8px)",
        duration: 0.65,
        y: '-75%',
        ease: "none",
      }, 0.5)
      // .set(n1.current,
      // {
      //   y: 0
      // }, 1.15)
      // .to(n1.current,
      // {
      //   duration: 0.75,
      //   y: '-75%',
      //   ease: "none",
      // }, 1.15)
      // .set(n1.current,
      // {
      //   y: 0
      // }, 1.90)
      // .to(n1.current,
      // {
      //   duration: 0.85,
      //   y: '-75%',
      //   ease: "none",
      // }, 1.90);

      const tl = gsap.timeline();
      tl
      .fromTo(s1.current, {
        top: '-100%'
      },
      {
        top: 0,
        ease: 'bounce.out',
        duration: 2
      })
      .fromTo(i1.current,
      {
        autoAlpha: 0
      },
      {
        autoAlpha: 1,
        filter: 'blur(80%)',
        ease: "power1.in",
        duration: 2
      }, 1.8)
      .fromTo(c1.current, {
        top:'100%'
      },
      {
        top: 0,
        ease: "power3.Out",
        duration: 0.32
      }, 2.4)
      .add(nTimeline, 2)
      .fromTo(e1.current,
      {
        scaleY: 1,
        autoAlpha: 0,
        left: '100%'
      },
      {
        scaleY: -1,
        autoAlpha: 1,
        left: 0,
        duration: 0.32
      }, 1.8)
      // .to(e1Box.current,
      // {
      //   scaleY: -1,
      //   duration: 0.5
      // })
      .fromTo(w2.current,
      {
        autoAlpha: 0,
        scaleX: -1
      },
      {
        scale: 1,
        autoAlpha: 1,
        duration: 0.9
      }, 0.9)
      .fromTo([w2.current, w2Box.current],
        {
          scaleY: -1
        },
        {
          scaleY: 1,
          duration: 0.5
        })
      .fromTo(e2.current,
      {
        autoAlpha: 0
      },
      {
        autoAlpha: 1,
        duration: 0.7
      }, 1)
      .fromTo(l3.current,
      {
        autoAlpha: 0,
        scaleX: -1
      },
      {
        autoAlpha: 1,
        scaleX: 1,
        duration: 0.32
      }, 1.1)
      .fromTo(a3.current, 
      {
        autoAlpha: 0
      },
      {
        autoAlpha: 1,
        filter: 'blur(80%)',
        ease: "power1.in",
        duration: 2
      }, 2)
      .fromTo(s3.current,
      {
        autoAlpha:0,
        left: '100%'
      },
      {
        autoAlpha: 1,
        left: 0,
        duration: 0.32
      }, 1.4)
      .to(n1.current,
      {
        scaleX: 1,
        ease: "power3.out",
      }, 1.4)
      .fromTo(t3.current,
      {
        autoAlpha: 0,
        top: '100%'
      },
      {
        autoAlpha: 1,
        top: 0,
        duration: 0.32
    }, 1.7)
    .fromTo(s4.current,
    {
      autoAlpha: 0,
      bottom: '100%',
    },
    {
      autoAlpha: 1,
      bottom: 0,
      duration: 0.5
    }, 1.9)
    .to(e1Box.current, 
    {
      scaleX: -1,
      scaleY: 1,
      duration: 0.25
    }, 2)
    .fromTo(p4.current,
    {
      autoAlpha: 0,
      scaleX: -1
    },
    {
      autoAlpha: 1,
      scaleX: 1,
      duration: 0.32
    }, 2.2)
    .fromTo(o4.current,
    {
      autoAlpha: 0,
      scaleX: -1
    },
    {
      autoAlpha: 1,
      scaleX: 1,
      duration: 0.32
    }, 1.4)
    .fromTo(k4.current,
      {
        autoAlpha: 0,
        top: '100%'
      },
      {
        autoAlpha: 1,
        top: 0,
        duration: 0.32
      }, 1.5)
    .fromTo(e4.current,
      {
        autoAlpha: 0,
        scaleX: -1
      },
      {
        autoAlpha: 1,
        scaleX: 1,
        duration: 1
      }, 2.6)
      .fromTo(subTitle.current,
      {
        autoAlpha: 0
      },
      {
        autoAlpha: 1,
        duration: 1.1
      }, 3)
      // .to(e1Box.current, 
      // {
      //   scaleX: 1,
      //   duration: 0.25
      // }, 3)
    });

    return () => ctx.revert();
  }, [])
  
    return (
      <section id="title" className="section-boundary">
        <div className="title-grid">
          <h1 className={`title-container title-word ${inter.className}`}>
            <span className="letter-wrap">
              <span className="letter-character s1" ref={s1}>S</span>
            </span>
            <span className="letter-wrap">
              <span className="letter-character i1" ref={i1}>i</span>
              {/* <span className="letter-character i1" ref={i1}><CharI /></span> */}
            </span>
            <span className="letter-wrap">
              <div className="n-slide" ref={n1}>
                <span className="letter-character n1">n</span>
                <span className="letter-character n1">n</span>
                <span className="letter-character n1">n</span>
                <span className="letter-character n1">n</span>
              </div>
            </span>
            <span className="letter-wrap">
              <span className="letter-character c1" ref={c1}>c</span>
            </span>
            <span className="letter-wrap" ref={e1Box}>
              <span className="letter-character e1" ref={e1}>e</span>
            </span>
          </h1>
          <h1 className="title-container title-word">
            <span className="justify-words">
              <span>
                <span className="letter-wrap" ref={w2Box}>
                  <span className="letter-character" ref={w2}>W</span>
                </span>
                <span className="letter-wrap">
                  <span className="letter-character" ref={e2}>e</span>
                </span>
              </span>

              <span>
                <span className="letter-wrap">
                  <span className="letter-character" ref={l3}>L</span>
                </span>
                <span className="letter-wrap">
                  <span className="letter-character" ref={a3}>a</span>
                </span>
                <span className="letter-wrap">
                  <span className="letter-character" ref={s3}>s</span>
                </span>
                <span className="letter-wrap">
                  <span className="letter-character" ref={t3}>t</span>
                </span>
              </span>
            </span>
          </h1>
          <h1 className="title-container title-word">
            <span className="justify-words">
              <span className="sub-title" ref={subTitle}>
                <h3>A yearly review ( sort of )</h3>
              </span>

              <span>
                <span className="letter-wrap">
                  <span className="letter-character" ref={s4}>S</span>
                </span>
                <span className="letter-wrap" ref={p4}>
                  <span className="letter-character">p</span>
                </span>
                <span className="letter-wrap">
                  <span className="letter-character" ref={o4}>o</span>
                </span>
                <span className="letter-wrap">
                  <span className="letter-character" ref={k4}>k</span>
                </span>
                <span className="letter-wrap">
                  <span className="letter-character" ref={e4}>e</span>
                </span>
              </span>
            </span>
          </h1>
        </div>
      </section>
    );
  };
  
  export default TitleScene;