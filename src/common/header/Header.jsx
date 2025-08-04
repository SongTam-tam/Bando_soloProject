import React from 'react';
import { HeaderStyle } from './style';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { headerActions } from '../../store/modules/headerSlice';
const Header = () => {
    const dispatch = useDispatch();
    return (
        <HeaderStyle>
            <div className="inner">
                <h1 className="logo">
                    <Link to="/">
                        <img src="./images/logo_white.png" alt="" />
                    </Link>
                </h1>
                <ul className="menu" onClick={() => dispatch(headerActions.onNav())}>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </HeaderStyle>
    );
};

export default Header;
