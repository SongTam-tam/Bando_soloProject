import styled from 'styled-components';

export const ContentStyleV = styled.section`
    width: 100%;
    background-image: url(./images/content5_bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    height: 1000px;
    position: relative;
    overflow: hidden;
    span {
        color: #000;
    }
    strong {
        color: #000;
    }
    /* padding-left: 160px; */
    .content5_pic {
        position: absolute;
        top: 268px;
        right: 154px;
        width: 458px;
        height: 285px;
        transition: none;

        img {
            width: 100%;
        }
    }
    .inner {
        display: flex;
        height: 4000px;

        h2 {
            position: absolute;
            left: 160px;
            top: 231px;
            /* margin-left: 160px;
            margin-top: 231px; */
            font-size: 150px;
            font-weight: 900;
            color: #000;
            white-space: pre-line;
            line-height: 1;
        }

        .textItem {
            position: absolute;
            top: 674px;
            right: 154px;
            strong {
                display: block;
                font-size: 32px;
                font-weight: 600;
                /* color: #000; */
                white-space: pre-line;
                line-height: 1.3;
                margin-bottom: 44px;
                text-align: right;
            }
            span {
                display: block;
                font-size: 20px;
                font-weight: 600;
                /* color: #000; */
                text-align: right;
                i {
                    margin-left: 15px;
                }
            }
        }
        .textItem2 {
            position: absolute;
            top: 674px;
            right: 104px;

            strong {
                display: block;
                font-size: 32px;
                font-weight: 600;
                white-space: pre-line;
                line-height: 1.3;
                margin-bottom: 44px;
                text-align: right;
            }
            span {
                display: block;
                font-size: 20px;
                font-weight: 600;
                text-align: right;
                /* color: #000; */
            }
        }
    }
`;
// texts.forEach((text, idx) => {
//     const txt = gsap.timeline({
//         scrollTrigger: {
//             trigger: '.mainBox',
//             start: 'top top',
//             end: '+=3000',
//             scrub: true,
//             markers: true,
//         },
//     });
//     txt.fromTo(
//         text,
//         {
//             opacity: 1,
//             color: '#000',
//         },
//         {
//             opacity: 0,
//             color: '#000',
//         }
//     );
//     txt.to(text, {
//         opacity: 1,
//         color: '#fff',
//     });
// });
