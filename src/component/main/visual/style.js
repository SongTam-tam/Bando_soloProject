import styled from 'styled-components';

export const VisualStyle = styled.section`
    width: 100%;
    position: relative;
    video {
        width: 100%;
    }
    .sound {
        position: absolute;
        top: 843px;
        left: 175px;
        display: flex;
        align-items: center;
        gap: 21px;
        button {
            background-color: transparent;
            display: flex;
            align-items: center;
            color: #fff;
            font-size: 14px;
            font-weight: 600;
            padding: 0;
        }
        .mute {
            gap: 7px;
            i {
                margin-top: 6px;
            }
        }
        .play {
            margin-top: 5px;
            padding: 0;
        }
    }
`;
