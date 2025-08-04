import styled from 'styled-components';

export const ContentList = styled.ul`
    width: 100%;
    position: relative;
    display: flex;
    gap: 35px;
    &::after {
        content: '';
        width: 100%;
        height: 1px;
        background-color: #999;
        position: absolute;
        bottom: -79px;
        left: 0;
    }
    li {
        width: 400px;
        display: flex;
        flex-direction: column;
        position: relative;
        &.on {
            &::after {
                content: '';
                width: 100%;
                height: 4px;
                background-color: #000;
                position: absolute;
                bottom: -79px;
                left: 0;
            }
        }

        img {
            position: relative;
            width: 400px;
            margin-bottom: 39px;
            display: block;
        }
        strong {
            position: relative;
            display: block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 14px;
            width: 100%;
            font-size: 24px;
            font-weight: 600;
            color: #000;
        }
        p {
            position: relative;
            display: block;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2; /* 줄 수 제한 */
            -webkit-box-orient: vertical;
            font-size: 18px;
            font-weight: 600;
            color: #000;
            margin-bottom: 27px;
        }
        em {
            display: block;
        }
    }
`;
