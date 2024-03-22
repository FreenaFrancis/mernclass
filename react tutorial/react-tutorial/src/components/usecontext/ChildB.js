// import React, { useContext } from 'react'
// import { userContext } from '../../App'// import the userContext

// function ChildB() {
//     const user = useContext(userContext)
//   return (
//     <div>
//       <h1>hello</h1>
//       <p>sdghgdrtdtftr</p>
//       Child ||| {user}
//     </div>
//   )
// }

// export default ChildB

import React, { useContext } from 'react'
import { userContext } from '../../App'

function ChildB() {
  const user=useContext(userContext)
  return (
    <div>
      <h1>hello</h1>
      <h2>{user}</h2>
    </div>
  )
}

export default ChildB


