import React, { useEffect, useRef } from 'react';
import { ContentStyleV } from './style';
import { HiArrowUpRight } from 'react-icons/hi2';
import { gsap } from 'gsap';
// import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
const Content5 = () => {
    const PicRef = useRef();
    const movedToCenter = useRef(false);
    const TextRef = useRef();
    const TextRef2 = useRef();
    const TitleRef = useRef();
    const TitleRef2 = useRef();
    const sect = useRef();
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
                        duration: 0.01,
                    },

                    {
                        opacity: 0,
                        color: '#fff',
                        duration: 0.01,
                        x: 50,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: text,
                            start: 'top-=443 top',
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
                            start: 'top+=1000 top',
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
                        start: 'top top',
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
                        start: 'top+=1443 top',
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
        const textCon = gsap.timeline();

        // gsap.set(tag2.querySelector('strong'), {
        //     opacity: 0,
        //     color: 'red',
        //     y: -50,
        // });

        // textCon.fromTo(
        //     tag2,
        //     {
        //         opacity: 0,
        //         color: '#000',
        //         duration: 1,
        //         ease: 'none',
        //     },
        //     {
        //         opacity: 1,
        //         color: '#ff0055',
        //         duration: 1,
        //         ease: 'none',
        //     }
        // );
        // console.log(textCon);
        // console.log(tag2);
        // ScrollTrigger.create({
        //     trigger: '.mainBox',
        //     start: 'top top',
        //     end: '+= 3000',
        //     animation: textCon,
        //     // pin: true,
        //     markers: true,
        //     scrub: true,
        //     onUpdate: (self) => {
        //         // console.log('progress:', self.progress);
        //     },
        // });
        // bigTheme.set(tag, {
        //     position: 'fixed',
        //     top: '50%',
        //     left: '50%',
        //     xPercent: -50,
        //     yPercent: -50,
        //     width: 458,
        //     height: 258,
        // });
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
            trigger: '.mainBox',
            start: 'top top',
            end: '+=3000 bottom',
            animation: bigTheme,
            pin: true,
            pinSpacing: true,
            scrub: true,
            markers: true,
            endTrigger: sect.current,
            // onUpdate: (self) => {
            //     if (!movedToCenter.current && self.progress > 0) {
            //         gsap.set(tag, {
            //             position: 'fixed',
            //             top: '40%',
            //             left: '50%',
            //             xPercent: -50,
            //             yPercent: -40,
            //             width: 458,
            //             height: 258,
            //             zIndex: 10,
            //         });
            //         movedToCenter.current = true;
            //     }
            // if (self.progress > 0.3) {
            // }
            // const scaleProgress = Math.min(progress / 0.2, 1); // 0 ~ 1로 제한
            // gsap.to(tag, {
            //     width: 458 + (innerWidth - 458) * scaleProgress,
            //     height: 258 + (innerHeight - 258) * scaleProgress,
            //     overwrite: 'auto',
            //     duration: 0.1,
            //     ease: 'none',
            // });
            // },
            // onLeave: () => {
            //     gsap.set(tag, {
            //         position: `absolute`,
            //         top: 258,
            //         right: 154,
            //         width: 458,
            //     });
            //     movedToCenter.current = false; // 다시 스크롤 시 재중앙화 가능
            // },
            onLeaveBack: () => {
                gsap.set(tag, {
                    clearProps: 'all',
                });
                movedToCenter.current = false;
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            bigTheme.kill();
            textCon.kill();
        };
    }, []);
    return (
        <>
            <ContentStyleV className="mainBox">
                <div className="content5_pic" ref={PicRef}>
                    <img src="./images/content5_img1.png" alt="" />
                </div>
                <div className="inner">
                    <h2 className="title" ref={TitleRef}>{`ENDLESS 
INNOVATION`}</h2>

                    <h2 className="title" ref={TitleRef2}>{`ENDLESS 
INNOVATION`}</h2>

                    <div className="textItem" ref={TextRef}>
                        <strong>{`끝없는 상상과 혁신으로 
남다른 미래를 만들다 
`}</strong>
                        <span>
                            PR Fillm
                            <i>
                                <HiArrowUpRight />
                            </i>
                        </span>
                    </div>
                    <div className="textItem2" ref={TextRef2}>
                        <strong>{`끝없는 상상과 혁신으로 
남다른 미래를 만들다 
`}</strong>
                        <span>
                            PR Fillm
                            <i>
                                <HiArrowUpRight />
                            </i>
                        </span>
                    </div>
                </div>
            </ContentStyleV>
            {/* <div style={{ height: '2000px' }}></div> */}
        </>
    );
};

export default Content5;
