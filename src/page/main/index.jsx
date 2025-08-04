import Content1 from '../../component/main/content1/';
import Content2 from '../../component/main/content2';
import Content3 from '../../component/main/content3';
import Content4 from '../../component/main/content4';
import Content5 from '../../component/main/content5';
import Content6 from '../../component/main/content6';
import Visual from '../../component/main/visual/VIsual';
import { MainStyle } from './style';
import ContentData from '../../assets/api/Content6Data';
import Content7 from '../../component/main/content7';
import Content8 from '../../component/main/content8';
import Content9 from '../../component/main/content9';
import Content10 from '../../component/main/content10';

const Main = () => {
    return (
        <MainStyle>
            <Visual />
            <Content1 />
            <Content2 />
            <Content3 />
            <Content4 />
            <Content5 />
            {/* <div style={{ height: '3000px' }} /> */}
            {/* <div></div> */}
            <Content6 />
            <Content7 />
            <Content8 />
            <Content9 />
            <Content10 />
        </MainStyle>
    );
};

export default Main;
