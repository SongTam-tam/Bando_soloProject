import styled from 'styled-components';

export const HeaderStyle = styled.header`
    width: 100%;
    position: absolute;
    z-index: 1000;

    .inner {
        width: 1600px;
        height: 100px;
        position: relative;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .menu {
            display: flex;
            flex-direction: column;
            gap: 5px;
            cursor: pointer;
            li {
                background-color: #fff;
                width: 22px;
                height: 3px;
                &:nth-child(2) {
                    width: 18px;
                }
            }
        }
    }
`;

export const NavStyle = styled.div`
    position: fixed;
    width: 100%;
    height: 1000px;
    background-color: #fff;
    color: #333;
    z-index: 10000;
    display: flex;
    &::after {
        content: '';
        background-color: #999;
        height: 1080px;
        width: 1px;
        position: absolute;
        left: 884px;
        top: 0;
    }
    &::before {
        content: '';
        background-color: #999;
        height: 1080px;
        width: 1px;
        position: absolute;
        left: 1284px;
        top: 0;
    }
    .logo {
        position: absolute;
        top: 130px;
        left: 160px;
        &::after {
            background-color: #999;
            content: '';
            height: 1080px;
            width: 1px;
            position: absolute;
            left: 324px;
            top: -200px;
        }
    }
    .list {
        position: absolute;
        top: 130px;
        left: 534px;
        display: flex;
        h3 {
            font-size: 32px;
            font-weight: 500;
            cursor: pointer;
            position: relative;
        }
        > li {
            position: absolute;
            left: 0;
            top: 0;
            text-align: left;
            width: 230px;
            cursor: pointer;

            &:hover {
                h3 {
                    font-weight: 700;
                    color: #000;
                    &::after {
                        content: '';
                        background-color: #000;
                        position: absolute;
                        left: -50px;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 6px;
                        height: 20px;
                    }
                }
            }
            &:nth-child(2) {
                left: 400px;
            }
            &:nth-child(3) {
                left: 800px;
            }
            &:nth-child(4) {
                top: 453px;
                left: 0px;
            }
            &:nth-child(5) {
                top: 453px;
                left: 400px;
            }
            ul {
                margin-top: 40px;
                display: flex;
                flex-direction: column;
                gap: 35px;
                li {
                    font-size: 18px;
                }
            }
        }
    }
    p {
        position: absolute;
        right: 171px;
        top: 61px;
        cursor: pointer;
        i {
            font-size: 36px;
        }
    }
`;
