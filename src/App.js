import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import PrivateRoutes from './component/authentication/PrivateRoutes';
import Homepage from './component/Homepage';
import Mainpart from './component/Mainpart';
import Register from './component/Register';
import MyAccount from './component/pages/MyAccount'
import TopPerformer from './component/pages/TopPerformer'
import HumanResource from './component/pages/HumanResouce'
import MyClient from './component/pages/MyClient'
import NewChart from './component/pages/NewChart'
import UnRegestered from './component/pages/UnRegestered'
import Enquires from './component/pages/Enquires'
import Activation from './component/pages/Activation'
import Service from './component/pages/Service'
import Others from './component/pages/Others'
import PreviousClient from './component/pages/PreviousClient'
import Reports from './component/pages/Reports' 
import PreviousStudent from './component/pages/PreviousStudent'
import Training from './component/pages/Training'
import Stats from './component/pages/Stats'
import Operations from './component/pages/Operations'
import Renewal from './component/pages/Renewal'
import VedioCouse from './component/pages/VedioCourse'
import VcTraining from './component/pages/VcTraining'
import VcMyClient from './component/pages/VcMyClient'
import VcOthers from './component/pages/VcOthers'
import Notification from './component/pages/Notification'
import Account from './component/pages/Account'
import VcNewsClient from './component/pages/VcNewsClient'
import Marketing from './component/pages/Marketing'
import Dashboard  from './component/pages/Dashboard';


function App() {
  return (
   
    <>
    
    <BrowserRouter>
    <Routes>
    <Route exact path='/login' element={<Homepage/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      
    <Mainpart>
    <Routes>
      
      
      <Route element={<PrivateRoutes/>}>
      <Route  exact path="/" element ={<Dashboard/>}/>
    
      <Route path="/myaccount" element={<MyAccount/>}/>
      <Route path="/toperformer" element={<TopPerformer/>}/>
      <Route path="/humanresource" element={<HumanResource/>}/>
      <Route path="/myclient" element={<MyClient/>}/>
      <Route path="/newchart" element={<NewChart/>}/>
      <Route path="/unregistered" element={<UnRegestered/>}/>
      <Route path="/enquires"element={<Enquires/>}/>
      <Route path="/activation" element={<Activation/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/others" element={<Others/>}/>
      <Route path="/previousclient" element={<PreviousClient/>}/>
      <Route path="/reports" element={<Reports/>}/>
      <Route path="/previousstudent" element={<PreviousStudent/>}/>
      <Route path="/training" element={<Training/>}/>
      <Route path="/Stats" element={<Stats/>}/>
      <Route path="/operations" element={<Operations/>}/>
      <Route path="/renewal" element={<Renewal/>}/>
      <Route path="/vediocourse" element={<VedioCouse/>}/>
      <Route path="/vcnewsclient" element={<VcNewsClient/>}/>
      <Route path="/vctraining" element={<VcTraining/>}/>
      <Route path="/vcmyclients" element={<VcMyClient/>}/>
      <Route path="/vcothers" element={<VcOthers/>}/>
      <Route path="/notification" element={<Notification/>}/>
      <Route path="/account" element={<Account/>}/>
      <Route path="/marketing" element={<Marketing/>}/>

      </Route>
    
    </Routes>
    </Mainpart>
    </BrowserRouter>
   
    
  
    </>
  );
}

export default App;
