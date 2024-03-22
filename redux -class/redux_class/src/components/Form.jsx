import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// Form.jsx
import { submit } from '../features/FormSlice';


function Forms() {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    // const handleSubmit = () => {
    //     dispatch(submit({ name }));
    // };

    return (
        <div>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={()=>dispatch(submit({name}))}>Submit</button>
        </div>
    );
}

export default Forms;
