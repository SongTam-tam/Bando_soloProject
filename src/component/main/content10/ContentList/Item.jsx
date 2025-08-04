import React from 'react';
import { FaChevronRight } from 'react-icons/fa6';
const Item = ({ item }) => {
    const { id, title, desc } = item;
    return (
        <li>
            <h3>{title}</h3>
            <p>{desc}</p>
            <span>
                VIEW MOER
                <i>
                    <FaChevronRight />
                </i>
            </span>
        </li>
    );
};

export default Item;
