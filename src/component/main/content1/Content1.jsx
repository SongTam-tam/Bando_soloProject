import React from 'react';
import { ContentIStyle } from './style';

const Content1 = () => {
    return (
        <ContentIStyle>
            <div className="inner">
                <h2>BUILD TRUST FOR TOMORROW </h2>
                <strong>반도건설은 미래를 위한 신뢰를 짓습니다.</strong>
                <ul className="textList">
                    <li>
                        <h3>CREATIVE DEVELOPMENT</h3>
                        <p>{`최고의 제품과 서비스를 창출해 사회에
                        기여하며, 세계적 도전으로 미래를 만듭니다.`}</p>
                    </li>
                    <li>
                        <h3>FUTURE CHALLENGE</h3>
                        <p>{`업류 기술, 제품, 인재의 확보를 통해
                        새로운 시대의 리더로 자리매김합니다.`}</p>
                    </li>
                    <li>
                        <h3>SINCERITY AND DILIGENCE</h3>
                        <p>{`맑고 투명한 공사와 진심하고 근검절약하는
                        자세로 믿음과 확신을 드리겠습니다.`}</p>
                    </li>
                </ul>
            </div>
        </ContentIStyle>
    );
};

export default Content1;
