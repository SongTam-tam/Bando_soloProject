import React from 'react';

const SwipeItem = ({ item }) => {
    const { text } = item;
    return <span className="swiper-pagination-bullet">{text}</span>;
};

export default SwipeItem;
