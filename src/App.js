import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import PrivateRoutes from './component/authentication/PrivateRoutes';
import Homepage from './component/Homepage';
import Mainpart from './component/Mainpart';
import Register from './component/Register';

function App() {
  return (
   
    <>
    <BrowserRouter>
 
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route element={<PrivateRoutes/>}>
      <Route path="/main" element={<Mainpart/>}/>

      </Route>
    
    </Routes>
  
   
    </BrowserRouter>
  
    </>
  );
}

export default App;
