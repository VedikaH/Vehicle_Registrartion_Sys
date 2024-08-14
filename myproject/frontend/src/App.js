
import './App.css';
import { Routes,Route } from 'react-router-dom'
import Greetings from './components/Greetings';
import Nav from './components/Nav';
import Nav1 from './components/Nav1';
import Lis from './components/Lis';
import Rc from './components/Rc';
import Permits from './components/Permits';
import Applylis from './components/Applylis';
import Applyrc from './components/Applyrc';
import Applypermit from './components/Applypermit';
import Authlis from './components/Authlis';
import Authrc from './components/Authrc';
import Authper from './components/Authper';
import Report from './components/Report';
import Login from './components/Login';
import Signup from './components/Signup';

// import AboutUs from './components/AboutUs';
function App() {
  return (
    <div className="App">
<Routes>
<Route path='/' element={<Login/>}/>
  <Route path='/greetings' element={<Greetings/>}/>
  
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/nav' element={<Nav/>}/>
  <Route path='/nav1' element={<Nav1/>}/>
  <Route path='/lis' element={<Lis/>}/>
  <Route path='/rc' element={<Rc/>}/>
  <Route path='/permits' element={<Permits/>}/>
  <Route path='/applylis' element={<Applylis/>}/>
  <Route path='/applypermits' element={<Applypermit/>}/>
  <Route path='/applyrc' element={<Applyrc/>}/>
  <Route path='/authlis' element={<Authlis/>}/>
  <Route path='/authper' element={<Authper/>}/>
  <Route path='/authrc' element={<Authrc/>}/>
  <Route path='/report' element={<Report/>}/>



</Routes> 
      {/* {/* <AboutUs/> */}
 
     

    </div>
  );
}

export default App;

