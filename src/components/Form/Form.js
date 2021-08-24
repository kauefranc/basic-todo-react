import React, {useState, useEffect, useRef} from 'react'

function Form(props) {
    const [input, setInput] = useState('')

    const inputRef = useRef(null);

    useEffect(() =>{
        inputRef.current.focus();


    });

    const handleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: input
        });

        setInput('');
    };

    return (
        <div classname="main-input">  
           {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={e => setInput(e.target.value)}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={e => setInput(e.target.value)}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
        </div>
    )
}

export default Form;
