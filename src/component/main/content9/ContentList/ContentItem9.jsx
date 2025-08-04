import React from 'react';
import { useDispatch } from 'react-redux';
import { contentActions } from '../../../../store/modules/ContentSlice';

const ContentItem9 = ({ news }) => {
    const dispatch = useDispatch();
    const { id, title, img, desc, hover, link, date } = news;
    return (
        <li className={hover ? 'on' : ''} onMouseEnter={() => dispatch(contentActions.onHover(id))}>
            <a href={link} target="_blank">
                <img src={img} alt="" />
                <strong>{title}</strong>
                <p>{desc}</p>
                <em>{date}</em>
            </a>
        </li>
    );
};

export default ContentItem9;
