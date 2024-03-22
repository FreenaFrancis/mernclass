import React, { useRef } from 'react';

function UncontrolledForm() {
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Access input value using inputRef.current.value
    console.log('Form submitted with value:', inputRef.current.value);
  };
  //here we can extract the value which is present in the useref ,
  //we can access with the help of inputref.current.value

  return (
    //in uncontroled component we will handle the with the help of this DOM elemnent

    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input type="text" ref={inputRef} />  
        {/* here we use useref, to identify or to find the dom in the react js */}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
  
}

export default UncontrolledForm;
