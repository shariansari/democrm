import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './component/Homepage';
import Mainpart from './component/Mainpart';
import Register from './component/Register';

function App() {
  return (
   
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path="/login" element={<Homepage/>}/>
      <Route path="/main" element={<Mainpart/>}/>
    </Routes>
   
    </BrowserRouter>
  
    </>
  );
}

export default App;
