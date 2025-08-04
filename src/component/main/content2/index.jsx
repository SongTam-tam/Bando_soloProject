import React, { useEffect } from 'react';
import { ContentStyleII } from './style';
import Right from './pic/Right';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Content2 = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <ContentStyleII>
            <div className="inner">
                <h2 data-aos="fade-up" data-aos-duration="3000" data-aos-delay="">{`창의계발을 통한
                    가치창조`}</h2>
                <Right />
                <div className="textBox">
                    <p
                        data-aos="fade-up"
                        data-aos-duration="3000"
                        data-aos-delay=""
                    >{`인재와 기술을 바탕으로 최고의 베품과 서비스를 창출하고
                    인류사회에 공헌하며 고객과 함께 세계 시장에 우뚝 서겠습니다`}</p>
                    <em data-aos="fade-up" data-aos-duration="3000" data-aos-delay="">
                        #Bando #Creative #Innovation
                    </em>
                    <span
                        data-aos="fade-up"
                        data-aos-duration="3000"
                        data-aos-delay=""
                    >{`반도건설은 창조적 사고와 혁신적인 기술을 중심으로
건설 산업의 새로운 미래를 개척하고 있습니다.
지속 가능한 개발과 품질 중심의 철학을 바탕으로
세계 속 고객들과 함께 더 나은 내일을 만들어갑니다.`}</span>
                </div>
            </div>
        </ContentStyleII>
    );
};

export default Content2;
