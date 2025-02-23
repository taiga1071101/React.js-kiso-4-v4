import { BrowserRouter, Route, Routes } from 'react-router';
import SelfIntroduction from '../pages/SelfIntroduction.tsx';
import Home from '../pages/Home.tsx';

function Router () {

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/self/' element={<SelfIntroduction />} />
      </Routes>
    </BrowserRouter>
    
  );
};

//export default Router;
export { Router }