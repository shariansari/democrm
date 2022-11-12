import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './component/Homepage';
import Register from './component/Register';

function App() {
  return (
   
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path="/regester" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  
    </>
  );
}

export default App;
