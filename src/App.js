// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './componenet/landingPage';
import AdminLogin from './componenet/adminlogin';
import UserLogin from './componenet/userlogin';
import AdminPortal from './componenet/adminportal';


function App() 
{
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/admin-login' element={<AdminLogin/>} />
        <Route path='/user-login' element={<UserLogin/>}/>
        <Route path='/admin/*' element={<AdminPortal/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



