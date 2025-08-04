import React from 'react';
import { ContentStyleIII } from './style';
import { HiArrowUpRight } from 'react-icons/hi2';
import SwipeList from './swipeList/swipeList';
const Content3 = () => {
    return (
        <ContentStyleIII>
            <div className="inner">
                <div className="textBox">
                    <h2>Housing Business</h2>
                    <p>대한민국 아파트의 새로운 트렌드를 제시합니다</p>
                    <span>
                        View More
                        <i>
                            <HiArrowUpRight />
                        </i>
                    </span>
                </div>
                <div className="ssp">
                    <SwipeList />
                </div>
            </div>
        </ContentStyleIII>
    );
};

export default Content3;
