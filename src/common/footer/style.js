import styled from 'styled-components';

export const FooterStyle = styled.footer`
    width: 100%;
    background-color: #231f59;
    .inner {
        padding: 45px 165px;
        box-sizing: border-box;
        position: relative;
        .logo {
            margin-bottom: 26px;
        }
        .txt {
            display: flex;
            span {
                font-size: 14px;
                font-weight: 500;
                color: #fff;
                line-height: 1.3;
                position: relative;
                display: block;
                &:nth-child(1) {
                    margin-right: 30px;
                    &::after {
                        content: '';
                        position: absolute;
                        background-color: #fff;
                        height: 15px;
                        width: 0.5px;
                        top: 50%;
                        transform: translateY(-50%);
                        right: -15px;
                    }
                }
                margin-bottom: 15px;
            }
        }
        .xxx {
            strong {
                font-size: 13px;
                font-weight: 400;
                color: #fff;
                display: block;
                margin-bottom: 6px;
                line-height: 1.3;
                &:nth-child(2) {
                    margin-bottom: 0;
                    font-weight: 300;
                }
            }
        }
        i {
            position: absolute;
            right: 175px;
            top: 53px;
            color: #fff;
            font-size: 20px;
        }
        select {
            position: absolute;
            top: 49px;
            right: 160px;
            width: 180px;
            height: 35px;
            background-color: transparent;
            border: 1px solid #fff;
            padding-left: 20px;
            color: #fff;
            appearance: none;
            border-radius: 10px;
            option {
                color: #000;
            }
        }
        .num {
            position: absolute;
            right: 165px;
            top: 130px;
            strong {
                font-size: 13px;
                font-weight: 400;
                color: #fff;
                line-height: 1.3;
                display: block;
                text-align: right;
            }
            span {
                display: block;
                font-size: 24px;
                font-weight: 500;
                color: #fff;
                line-height: 1.3;
                text-align: right;
            }
        }
    }
`;
