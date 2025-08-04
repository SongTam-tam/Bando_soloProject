import React from 'react';
import { NavStyle } from './style';
import { IoCloseOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { headerActions } from '../../store/modules/headerSlice';
const Nav = () => {
    const { nav } = useSelector((state) => state.header);
    const dispatch = useDispatch();
    return (
        <NavStyle>
            <h2 className="logo">
                <img src="./images/logo_origin.png" alt="" />
            </h2>
            <ul className="list">
                <li>
                    <h3>반도건설</h3>
                    <ul>
                        <li>기업소개</li>
                        <li>기업연혁</li>
                        <li>CI&BI</li>
                        <li>오시는 길</li>
                        <li>자료실</li>
                    </ul>
                </li>
                <li>
                    <h3>지속가능경영</h3>
                    <ul>
                        <li>ESG경영 & 품질경영 & 안전경영</li>
                        <li>동반성장</li>
                        <li>사회공헌</li>
                    </ul>
                </li>
                <li>
                    <h3>사업영역</h3>
                    <ul>
                        <li>주택사업</li>
                        <li>건축사업</li>
                        <li>토목사업</li>
                        <li>해외사업</li>
                        <li>레저사업</li>
                    </ul>
                </li>
                <li>
                    <h3>홍보센터</h3>
                    <ul>
                        <li>뉴스 & Sns</li>
                        <li>갤러리</li>
                        <li>수상실적</li>
                    </ul>
                </li>
                <li>
                    <h3>인재채용</h3>
                    <ul>
                        <li>채용지원</li>
                    </ul>
                </li>
            </ul>
            <p onClick={() => dispatch(headerActions.closeNav())}>
                <i>
                    <IoCloseOutline />
                </i>
            </p>
        </NavStyle>
    );
};

export default Nav;
