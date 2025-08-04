import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { PicItemfirst } from './style';

const PicItem1 = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <PicItemfirst>
            <ul>
                <li>주요 프로젝트</li>
                <li>해외 프로젝트</li>
                <li>토목 프로젝트</li>
            </ul>
            <div className="contentBox">
                <div className="con1" data-aos="fade-up" data-aos-duration="2000">
                    <img src="./images/content4_img1.png" alt="" />
                    <span>신경주 반도유보라 아이비파크</span>
                </div>
                <div
                    className="con2"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-delay="500"
                >
                    <img src="./images/content4_img2.png" alt="" />
                    <span>부산 남항-영도 남향대교 건설공사</span>
                </div>
            </div>
        </PicItemfirst>
    );
};

export default PicItem1;
