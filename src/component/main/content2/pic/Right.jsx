import React, { useEffect } from 'react';
import { RightPic } from './style';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Right = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <RightPic>
            <div className="pic" data-aos-duration="3000" data-aos="fade-up"></div>
            <div
                className="miniPic"
                data-aos-duration="3000"
                data-aos="fade-up"
                data-aos-delay="600"
            ></div>
        </RightPic>
    );
};

export default Right;
