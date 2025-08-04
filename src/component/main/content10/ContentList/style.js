import styled from 'styled-components';

export const ContentList = styled.ul`
    display: flex;
    gap: 25px;
    li {
        width: 420px;
        height: 300px;
        background-color: #fff;
        position: relative;
        h3 {
            margin-top: 70px;
            margin-left: 43px;
            font-size: 32px;
            font-weight: 600;
            color: #000;
            line-height: 1.3;
        }
        p {
            margin-left: 43px;
            margin-top: 50px;
            font-size: 20px;
            font-weight: 600;
            color: #000;
            white-space: pre-line;
        }
        span {
            position: absolute;
            right: 42px;
            bottom: 22px;
            font-size: 10px;
            font-weight: 400;
            color: #000;
            display: flex;
            align-items: center;
            i {
                margin-top: 2px;
                margin-left: 7px;
            }
        }
    }
`;
