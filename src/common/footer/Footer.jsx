import React from 'react';
import { FooterStyle } from './style';
import { FaCaretDown } from 'react-icons/fa';
const Footer = () => {
    return (
        <FooterStyle>
            <div className="inner">
                <h2 className="logo">
                    <a href="#">
                        <img src="./images/footer_logo.png" alt="" />
                    </a>
                </h2>
                <p className="txt">
                    <span>개인정보처리방침</span>
                    <span>법적고지</span>
                </p>
                <p className="xxx">
                    <strong>
                        서울시 강남구 테헤란로 7길 12(역삼동 648) 허바허바빌딩 6층, 11층, 12층
                    </strong>
                    <strong className="eng">
                        Ⓒ 2025 BANDO ENGINEERING · CONSTRUCTION CO. LTD. All rights reserved.
                    </strong>
                </p>
                <i>
                    <FaCaretDown />
                </i>
                <select name="" id="">
                    <option value="">Family Site</option>
                    <option value="more">more</option>
                    <option value="react">react</option>
                    <option value="javascript">javascript</option>
                    <option value="html">html</option>
                </select>
                <p className="num">
                    <strong>평일 AM 09:00 ~ PM 05:00</strong>
                    <span>1800-0015</span>
                </p>
            </div>
        </FooterStyle>
    );
};

export default Footer;
