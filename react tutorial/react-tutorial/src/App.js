


// import React from 'react';
// import Product from './components/props/product';
// import Chennai from './Chennai';


// function App() {
   
//   let data = [{
//     h1: 'SUPER OVER LEAGUE',
//     image: 'https://assets.ccbp.in/frontend/react-js/rcb-img.png',
//   },
//   {
//     image: 'https://assets.ccbp.in/frontend/react-js/csk-img.png',
//     style:''
//   }
//   ]

//   return (
//     <div>
//       <h1>Products</h1>
//       {/* <Product name="Laptop" price={999.99} />
//       <Product name="Smartphone" price={499.50} /> */}

//       {data.map((value) => (
//         <Chennai image={value.image} h1={value.h1} key={value.image} />
//       ))}
//     </div>
//   );
// }

// export default App;



// import React from 'react'
// import Navbar from './nav/Navbar'

// function App() {
//   return (
//     <div>
//       <Navbar/>
//     </div>
//   )
// }

// export default App

//  import React, { Component } from 'react'
 
//  export default class App extends Component {
//    render() {
//      return (
//        <div>
//          <h1>Hello</h1>
//        </div>
//      )
//    }
//  }
 
// import React from 'react'
// import Product from './components/props/product'

// function App() {
//   return (
//     <div>
//       <Product name='freena'/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Login from './components/login'
// import Fakeapi from './components/fakeapi'

// function App() {
//   return (
//     <div>
//       <Fakeapi/>
//     </div>
//   )
// }

// export default App
// /////////////////////////////////////////////////////////////////////////////////////
// import React from 'react'
// import Effect from './components/useEffect/Effect'
// import Refstate from './components/useref/ref'
// import Ref from './components/useref/useref'
// import Memo from './components/usememo/Memo'

// function App() {
//   return (
//     <div>
//       {/* <Effect/> */}
//       {/* <Refstate/> */}
//       {/* <Ref/> */}
//       <Memo/>
//     </div>
//   )
// }

// export default App






// import React, { createContext } from 'react'
// // import { createContext } from 'react'
// import ChildA from './components/usecontext/ChildA'


//   export const userContext = createContext() ///create
// function App() {
//   return (
//     <div>
//       <userContext.Provider value={'dgfdgh'}>
//         <ChildA/>

        
//         </userContext.Provider>
      
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import ChilddA from './components/propdrilling/ChilddA'
// import Effect from './components/useEffect/Effect'

// function App() {
//   return (
//     <div>
//       <ChilddA name="freena"/>
//       <Effect/>
//     </div>
//   )
// }

// export default App

// context


// 1-create context
// 2-create context provider
// 3-consume

// import React, { createContext } from 'react'
// import ChildA from './components/usecontext/ChildA'

// export const userContext=createContext()
// function App() {
//   return (
//     <div>
//       <userContext.Provider value={"hello"}>
//       <ChildA/>
//       </userContext.Provider>
//     </div>
//   )
// }

// export default App

import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbars from './nav/Navbar'
import Refs from './components/useref/ref'
import Memo from './components/usememo/Memo'
import Life from './components/Life/Life'
function App() {
  return (
    <div>
  {/* <Refs/> */}
  {/* <Memo/> */}
  <Life/>
    </div>
  )
}

export default App

