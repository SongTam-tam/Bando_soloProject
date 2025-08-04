import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './common/Layout';

import GlobalStyle from './styled/GlobalStyld';
import Main from './page/main';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
