import React, { useState, useRef } from 'react'

export const FormWithRef = () => {
    const [items, setItems] = useState([]);
    const valueinputRef = useRef()

    const addToList = () => {

        // alert(valueinputRef.current.value)
        setItems([...items, valueinputRef.current.value])
        valueinputRef.current.value = "";
        valueinputRef.current.focus();


    }

    return (
        <div className="card">
            <div className="card-header">useRef Sample</div>
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <label>نام گروه : </label>
                        <input className='mx-2' ref={valueinputRef} />
                        <button className='btn btn-primary mx-2' onClick={addToList}>افزودن به لیست</button>
                    </div>
                </div>
                <div className='row ' >
                    <h4 className='mx-2'>گروه ها:</h4>
                    <ul>
                        {items.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}
