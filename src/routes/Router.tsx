import { BrowserRouter, Route, Routes } from 'react-router';
import SelfIntroduction from '../pages/SelfIntroduction.tsx';
import Home from '../pages/Home.tsx';

function Router () {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/React.js-kiso-4-v4/' element={<Home />} />
        <Route path='/React.js-kiso-4-v4/self/' element={<SelfIntroduction />} />
      </Routes>
    </BrowserRouter>
    
  );
};

//export default Router;
export { Router }