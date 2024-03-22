// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarss from './component/Navbarss';
import {BrowserRouter, Routes,Route} from'react-router-dom';
import Contact from './component/Contact';
import Service from './component/Service';
import Home from './component/Home';
import FakeApi from './component/FakeApi';
function App() {
  return (
    <div className="App">
    {/* <Navbarss/> */}
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Navbarss/>}>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/contact' element={<Contact />}></Route>
    <Route path='/service' element={<Service/>}></Route>
    </Route>
    <Route path='/api' element={<FakeApi/>}></Route>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
