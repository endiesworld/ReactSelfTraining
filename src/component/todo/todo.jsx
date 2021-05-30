
import { useState} from 'react' ;


let incomingItem = '' ;

let update = (e) => {
    incomingItem = e.target.value ;
    console.log(incomingItem)
}



function TodoComponent(){
    const [todoList , setTodoList] = useState(['add items using','add items using','add items using']) ;

    const addNewItem = () => {
        setTodoList([...todoList, incomingItem])
    }
    
    const Mylist = () => {
        return todoList.map( (item, index) => <div key ={index} className = 'col-span-3 h-10 mr-5 ml-5 bg-green-400 mb-2'></div>)
    }

    return (
        <div className = 'col-span-3  grid grid-cols-3 h-full content-start w-screen sm:w-1/3 '>
            <h3 className = 'col-span-3 font-serif h-10 m-4 text-xl font-semibold text-center '> My Todo List</h3>
            <div className = 'col-span-3 flex justify-center h-10 m-4 font-serif text-center'>
                <input type= 'text' className = 'mr-4 w-2/3 border border-black' onChange = {(e) => update(e)}></input>
                <button className = 'font-semibold text-center w-1/5 border-2 text-lg border-black font-semibold' onClick = {addNewItem}>add!</button>
            </div>
            <Mylist />
        </div>
    )
}

export default TodoComponent ;