import styled from 'styled-components';

export const ContentStyleVII = styled.section`
    /* margin-top: 3000px; */
    position: relative;
    width: 100%;
    height: 1000px;
    /* border: 5px solid #000; */
    overflow: hidden;
    background-image: url(./images/content5_bg.png);
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover;
    .content_pic {
        position: absolute;
        top: 268px;
        right: 154px;
        width: 458px;
        height: 285px;
        img {
            width: 100%;
        }
    }
    .inner {
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
        .textItem,
        .textItem2 {
            position: absolute;
            top: 674px;
            right: 154px;
            white-space: pre-line;
            line-height: 1.3;

            text-align: right;
            strong {
                display: block;
                margin-bottom: 44px;
                font-size: 32px;
                font-weight: 600;
            }
            span {
                font-size: 20px;
                font-weight: 600;
                display: block;
                i {
                    margin-left: 15px;
                }
            }
        }
    }
`;
