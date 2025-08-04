import React, { useEffect, useRef } from 'react';
import { ContentStyleVIII } from './style';
import { HiArrowUpRight } from 'react-icons/hi2';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Content8 = () => {
    const PicRef = useRef();
    const movedToCenter = useRef(false);
    const TextRef = useRef();
    const TextRef2 = useRef();
    const TitleRef = useRef();
    const TitleRef2 = useRef();
    const wrap = useRef();

    useGSAP(
        () => {
            const texts = gsap.utils.toArray(TextRef.current.children);

            // 효과가 사라졌다가 나오는게 아님
            // 새로운 텍스트박스가 오퍼시티 0에서 오퍼시티 1로 바뀌는 느낌
            texts.forEach((text) => {
                gsap.fromTo(
                    text,
                    {
                        opacity: 1,
                        color: '#000',
                        x: 0,
                    },

                    {
                        opacity: 0,
                        color: '#fff',
                        x: 50,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: text,
                            start: 'top+=7407 top',
                            end: '+=1000',
                            scrub: true,
                            markers: true,
                        },
                    },
                    0
                );
            });
        },
        { scope: TextRef }
    );
    useGSAP(
        () => {
            const texts2 = gsap.utils.toArray(TextRef2.current.children);
            texts2.forEach((text) => {
                gsap.fromTo(
                    text,
                    {
                        opacity: 0,
                        color: '#000',
                        x: 0,
                    },
                    {
                        opacity: 1,
                        color: '#fff',
                        x: -50,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: text,
                            start: 'top+=8507 top',
                            end: '+=1000',
                            scrub: true,
                            markers: true,
                        },
                    },
                    0
                );
            });
        },
        { scope: TextRef2 }
    );
    useGSAP(
        () => {
            const mainTitle = TitleRef.current;

            gsap.fromTo(
                mainTitle,
                {
                    opacity: 1,
                    color: '#000',
                    x: 0,
                },
                {
                    opacity: 0,
                    color: '#fff',
                    x: -50,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: mainTitle,
                        start: 'top+=7850 top',
                        end: '+=1000',
                        scrub: true,
                        markers: true,
                    },
                }
            );
        },
        { scope: TitleRef }
    );
    useGSAP(
        () => {
            const mainTitle2 = TitleRef2.current;

            gsap.fromTo(
                mainTitle2,
                {
                    opacity: 0,
                    color: '#000',
                    x: -50,
                },
                {
                    opacity: 1,
                    color: '#fff',
                    x: 0,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: mainTitle2,
                        start: 'top+=9077 top',
                        end: '+=1000',
                        scrub: true,
                        markers: true,
                    },
                }
            );
        },
        { scope: TitleRef2 }
    );
    useEffect(() => {
        const tag = PicRef.current;
        const bigTheme = gsap.timeline();

        bigTheme.to(
            tag,
            {
                ease: 'none',
                duration: 0.3,
                position: 'fixed',
                top: '40%',
                left: '50%',
                xPercent: -50,
                yPercent: -40,
            },
            0
        );
        bigTheme.to(
            tag,
            {
                width: innerWidth,
                height: innerHeight,
                ease: 'none',
                duration: 0.4,
                // position: 'fixed',
                // top: '40%',
                // left: '50%',
                // xPercent: -50,
                // yPercent: -40,
            },
            0
        );
        ScrollTrigger.create({
            trigger: wrap.current,
            start: 'top top',
            end: '+=3000',
            animation: bigTheme,
            pin: true,
            // pinSpacing: false,
            scrub: true,
            markers: true,
            onLeaveBack: () => {
                gsap.set(tag, {
                    clearProps: 'all',
                });
                movedToCenter.current = false;
            },
        });
    }, []);

    return (
        <ContentStyleVIII className="boxbox" ref={wrap}>
            <div className="content_pic" ref={PicRef}>
                <img src="./images/content5_img4.png" alt="" />
            </div>
            <div className="inner">
                <h2 className="title" ref={TitleRef}>{`50 YEARS
FORWARD`}</h2>
                <h2 className="title" ref={TitleRef2}>{`50 YEARS
FORWARD`}</h2>

                <div className="textItem" ref={TextRef}>
                    <strong>{`반백년 혁신을 넘어
                    100년 기업으로 도약하다`}</strong>
                    <span>
                        50주년
                        <i>
                            <HiArrowUpRight />
                        </i>
                    </span>
                </div>
                <div className="textItem2" ref={TextRef2}>
                    <strong>{`반백년 혁신을 넘어
           100년 기업으로 도약하다`}</strong>
                    <span>
                        50주년
                        <i>
                            <HiArrowUpRight />
                        </i>
                    </span>
                </div>
            </div>
        </ContentStyleVIII>
    );
};

export default Content8;
