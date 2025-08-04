import React from 'react';
import { ContentStyleIX } from './style';
import ContentList9 from './ContentList/ContentList9';
import { HiArrowUpRight } from 'react-icons/hi2';

const Content9 = () => {
    return (
        <ContentStyleIX>
            <div className="inner">
                <h2>Bando News</h2>
                <p>반도건축의 새로운 소식을 확인해보세요</p>
                <span>
                    View More
                    <i>
                        <HiArrowUpRight />
                    </i>
                </span>
                <ContentList9 />
            </div>
        </ContentStyleIX>
    );
};

export default Content9;
