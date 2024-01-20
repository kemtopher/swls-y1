"use client";

import {useEffect, useRef} from 'react';
import { gsap } from 'gsap';
import '../globals.css';
import '../styles/scene-title.scss';

const TitleScene = () => {
  const s1 = useRef(null);
  const c1 = useRef(null);
  const n1 = useRef(null);
  const i1 = useRef(null);
  const e1 = useRef(null);
  const w2 = useRef(null);
  const e2 = useRef(null);
  const l3 = useRef(null);
  const a3 = useRef(null);
  const s3 = useRef(null);
  const t3 = useRef(null);
  const s4 = useRef(null);
  const p4 = useRef(null);
  const e4 = useRef(null);
  const o4 = useRef(null);
  const k4 = useRef(null);
  const subTitle = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl
      .fromTo(s1.current, {
        top: '-100%'
      },
      {
        top: 0,
        ease: "power3.inOut",
        duration: 0.32
      })
      .fromTo(c1.current, {
        top:'100%'
      },
      {
        top: 0,
        ease: "power3.Out",
        duration: 0.32
      }, 0.2)
      .fromTo(i1.current,
      {
        scaleY: -1,
        autoAlpha: 0
      },
      {
        autoAlpha: 1,
        ease: "power1.in",
        duration: 0.32
      }, 0.4)
      .fromTo(n1.current,
      {
        autoAlpha: 0,
        scaleX: -1
      },
      {
        autoAlpha: 1,
        // scaleX: 1,
        ease: "power3.inOut",
        duration: 0.32
      }, 0.6)
      .fromTo(e1.current,
      {
        autoAlpha: 0,
        left: '100%'
      },
      {
        autoAlpha: 1,
        left: 0,
        duration: 0.32
      }, 0.8)
      .fromTo(w2.current,
      {
        top: '100%'
      },
      {
        top: 0,
        duration: 0.9
      }, 0.9)
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
        autoAlpha: 0,
        top: '100%'
      },
      {
        autoAlpha: 1,
        top: 0,
        duration: 0.32
      }, 1.2)
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
      left: '100%'
    },
    {
      autoAlpha: 1,
      left: 0,
      duration: 0.5
    }, 1.9)
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
    }, 2.4)
    .fromTo(k4.current,
      {
        autoAlpha: 0,
        top: '100%'
      },
      {
        autoAlpha: 1,
        top: 0,
        duration: 0.32
      }, 2.5)
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
    });

    return () => ctx.revert();
  }, [])
  
    return (
      <section id="title" className="section-boundary">
        <div className="title-grid">
          <h1 className="title-container title-word">
            <span className="letter-wrap">
              <span className="letter-character s1" ref={s1}>S</span>
            </span>
            <span className="letter-wrap">
              <span className="letter-character i1" ref={i1}>i</span>
            </span>
            <span className="letter-wrap" ref={n1}>
              <span className="letter-character n1">n</span>
            </span>
            <span className="letter-wrap">
              <span className="letter-character c1" ref={c1}>c</span>
            </span>
            <span className="letter-wrap">
              <span className="letter-character e1" ref={e1}>e</span>
            </span>
          </h1>
          <h1 className="title-container title-word">
            <span className="justify-words">
              <span>
                <span className="letter-wrap">
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