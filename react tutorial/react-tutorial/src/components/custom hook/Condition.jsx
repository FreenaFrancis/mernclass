import React, { useState } from 'react';

const ConditionalRenderingExample = () => {
  // State to toggle the component
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div>
      {/* Button to toggle the component */}
      <button onClick={() => setShowComponent(!showComponent)}>
        Toggle Component
      </button>
      
      {/* Conditional rendering based on state */}
      {showComponent ? (
        <div>
          <h2>Component is Visible</h2>
          {/* Rendered when the component is visible */}
          <p>This is the content of the visible component.</p>
        </div>
      ) : (
        <div>
          <h2>Component is Hidden</h2>
        
          <p>This is the content of the hidden component.</p>
        </div>
      )}
    </div>
  );
};

export default ConditionalRenderingExample;


// conditional - if...else
// ?:  -conditional/ternary,conditional opwwrator
// ():()

