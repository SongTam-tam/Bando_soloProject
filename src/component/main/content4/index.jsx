import React from 'react';
import { ContentStyleIV } from './style';
import PicItem1 from './item1/picItem1';
import PicItem2 from './item2/PicItem2';
import PicItem3 from './item3/PicItem3';

const Content4 = () => {
    return (
        <ContentStyleIV>
            <div className="inner">
                <div className="textBox">
                    <h2>Our Projects</h2>
                    <p>{`도시를 바꾸는 혁신,
                    공간을 만드는 기술의 여정 `}</p>
                </div>
                <PicItem1 />
                <PicItem2 />
                <PicItem3 />
            </div>
        </ContentStyleIV>
    );
};

export default Content4;
