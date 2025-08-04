import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
  body {
    font-size: 16px;
    line-height: 1.6;
    font-family: 'Pretendard';
    color:#333;
  }
  a {
    text-decoration: none;
    color:#333; 
  }
  li { list-style:none }
  img { vertical-align: top; }
  
  
  .inner { margin:auto; box-sizing:border-box; position:relative }
   button { border:none; cursor: pointer; }
`;

export default GlobalStyle;
