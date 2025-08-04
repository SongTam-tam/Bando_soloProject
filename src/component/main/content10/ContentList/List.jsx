import React from 'react';
import { ContentList } from './style';
import data from '../../../../assets/api/Content10Data';
import Item from './Item';

const List = () => {
    return (
        <ContentList>
            {data.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </ContentList>
    );
};

export default List;
