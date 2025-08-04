import styled from 'styled-components';
export const PicItemSecond = styled.div`
    width: 100%;
    margin-top: 350px;
    span {
        display: block;
        margin-top: 15px;
        font-size: 15px;
        font-weight: 500;
        color: #333;
    }
    .contentBox {
        display: flex;
        width: 100%;
        justify-content: space-between;
        .con1 {
            display: flex;
            gap: 19px;
            .pic {
                width: 400px;
                height: 464px;
            }
        }
        .con2 {
            width: 400px;
            height: 464px;
        }
    }
`;
