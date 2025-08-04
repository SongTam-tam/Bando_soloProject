import React, { useRef, useState } from 'react';
import { VisualStyle } from './style';
import { FaVolumeMute, FaStop } from 'react-icons/fa';

import { FaVolumeHigh } from 'react-icons/fa6';

const Visual = () => {
    const [play, setPlay] = useState(true);
    const [mute, setMute] = useState(true);
    const onPlay = () => {
        setPlay(!play);
        if (play) {
            ref.current.pause();
        } else {
            ref.current.play();
        }
    };
    const onMute = () => {
        setMute(!mute);
        ref.current.muted = false;
        if (mute) {
            ref.current.muted = true;
        } else {
            ref.current.muted = false;
        }
    };
    const ref = useRef();
    return (
        <VisualStyle>
            <video
                src="./videos/bando.mp4"
                autoPlay={play}
                muted={mute}
                loop
                onPlay={play}
                ref={ref}
            ></video>
            <div className="sound">
                <button className="play" onClick={onPlay}>
                    <i>
                        <FaStop />
                    </i>
                </button>
                <button className="mute" onClick={onMute}>
                    sound
                    <i>{mute ? <FaVolumeHigh /> : <FaVolumeMute />}</i>
                </button>
            </div>
        </VisualStyle>
    );
};

export default Visual;
