import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { PicItemSecond } from './style';

const PicItem2 = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <PicItemSecond>
            <div className="contentBox">
                <div className="con1">
                    <div className="pic1" data-aos="fade-up" data-aos-duration="2000">
                        <img src="./images/content4_img3.png" alt="" />
                        <span>코레일유통 본사사옥 건립공사</span>
                    </div>
                    <div
                        className="pic2"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        data-aos-delay="500"
                    >
                        <img src="./images/content4_img4.png" alt="" />
                        <span>신분당선 연장 복선전철 민간투자사업</span>
                    </div>
                </div>
                <div
                    className="con2"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-delay="1000"
                >
                    <img src="./images/content4_img5.png" alt="" />
                    <span>동탄2 반도유보라 아이비파크 10</span>
                </div>
            </div>
        </PicItemSecond>
    );
};

export default PicItem2;
