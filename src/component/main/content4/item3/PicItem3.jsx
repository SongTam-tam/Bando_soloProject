import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { PicItemThird } from './style';

const PicItem3 = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <PicItemThird>
            <div className="contentBox">
                <div className="con1" data-aos="fade-up" data-aos-duration="2000">
                    <img src="./images/content4_img6.png" alt="" />
                    <span>두바이 유보라타워</span>
                </div>
                <div
                    className="con2"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-delay="500"
                >
                    <img src="./images/content4_img7.png" alt="" />
                    <span>‘The BORA 3170’ 주상복합</span>
                </div>
            </div>
        </PicItemThird>
    );
};

export default PicItem3;
