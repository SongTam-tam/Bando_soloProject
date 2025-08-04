import styled from 'styled-components';

export const ContentStyleI = styled.section`
    width: 100%;
    padding-top: 180px;
    padding-bottom: 190px;
    position: relative;
    .inner {
        width: 1460px;
        position: relative;
        box-sizing: border-box;
        margin: auto;
        h2 {
            font-size: 48px;
            font-weight: 600;
            color: #000;
            line-height: 1.3;
            margin-bottom: 20px;
        }
        strong {
            font-size: 48px;
            font-weight: 600;
            color: #000;
            line-height: 1.3;
        }
        .textList {
            margin-top: 200px;
            display: flex;
            justify-content: space-between;
            li {
                h3 {
                    font-size: 32px;
                    font-weight: 500;
                    color: #000;
                }
                p {
                    font-size: 20px;
                    font-weight: 500;
                    color: #000;
                    line-height: 1.6;
                    white-space: pre-line;
                    margin-top: 30px;
                }
            }
        }
    }
`;
