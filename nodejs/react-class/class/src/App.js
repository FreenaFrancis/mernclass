
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// //  import Filter from './filter';
// import FetchApi from './components/Fetchapi.js/FetchApi';
// import Crud from './components/crudf/Crud';
// import { BrowserRouter, Routes,Route } from 'react-router-dom';
// import Edit from './components/crudf/Update';
// import Filters from './components/filter/filter';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Boot from './components/boot/Boot';
// function App() {
//   return (
//     <div className="App">
//      {/* <Filters/> */}
//      {/* <FetchApi/>
//      <Crud/> */}
//     <BrowserRouter>
//    <Routes>
    
//     <Route path='/crud' element={<Crud/>}/>
//     <Route path="/edit/:id" element={<Edit/>} />
//    </Routes>
//     </BrowserRouter>

//     </div>
//   );
// }

// export default App;


// import React from 'react'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Boot from './components/boot/Boot'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './components/boot/Home';
// import Features from './components/boot/Features';
// import Filters from './components/filter/filter';
// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Boot/>}>
//        <Route path='/home' element={<Home/>}></Route>
//        <Route path='/features' element={<Features/>}></Route>
//        <Route path='/filter' element={<Filters/>}></Route>
//        </Route>
//       </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App



import React from 'react'
import GoldPriceComponent from './components/boot/Gold'

function App() {
  return (
    <div>
      <GoldPriceComponent/>
    </div>
  )
}

export default App
