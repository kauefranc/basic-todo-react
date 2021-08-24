import React, {useState} from 'react'
import Form from '../Form/Form'
import Todo from '../Todo/Todo';

function List() {
    const [todos, setTodos] = useState([]);

    //Função Adicionar
    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        
        const newTodos = [todo, ...todos];
        
        setTodos(newTodos)
        console.log(...todos)
    };//fimAdicionar

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    }

    //Função Remover
    const removeTodo = id =>{
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr);
    };//fimRemover

    //Verificador
    const completeTodo = id =>{
        let updatedTodos = todos.map( todo =>{
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        });
        setTodos(updatedTodos);
    };//fimVerificador

    //Visual
    return (
        <div>
            <h1>Type a new to do =)</h1>
            <Form onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    )
}

export default List
