import styled from 'styled-components';
export const PicItemfirst = styled.div`
    position: relative;
    display: flex;
    /* justify-content: space-between; */
    margin-top: 50px;
    ul {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        gap: 25px;
        li {
            list-style: initial;
            color: #999;
            &:nth-child(1) {
                color: #333;
            }
        }
    }
    .contentBox {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 218px;
        span {
            font-size: 15px;
            font-weight: 500;
            color: #333;
            display: block;
            margin-top: 15px;
        }
        .con1 {
            width: 400px;
            img {
                height: 464px;
            }
        }
        .con2 {
            width: 800px;
            img {
                width: 800px;
                height: 706px;
            }
        }
    }
`;
