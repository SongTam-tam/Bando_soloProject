import React from 'react';
import { useSelector } from 'react-redux';
import ContentItem9 from './ContentItem9';
import { ContentList } from './style';

const ContentList9 = () => {
    const { news } = useSelector((state) => state.news);
    return (
        <ContentList>
            {news.map((news) => (
                <ContentItem9 key={news.id} news={news} />
            ))}
        </ContentList>
    );
};

export default ContentList9;
