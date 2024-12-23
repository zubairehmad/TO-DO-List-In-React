import { useState } from 'react'
import './App.css'
import AppHeader from './AppHeader/AppHeader.jsx'
import ToDoList from './ToDoList/ToDoList.jsx'

function App() {

	// Create a toDoList state
	const [toDoList, setToDoList] = useState([])

	const addToDoItem = (item) => {
		setToDoList([...toDoList, item])	
		console.log("Item added : ", item)
	}

	return (
		<>
			<AppHeader addToDoItem={addToDoItem}/>
			<ToDoList toDoList={toDoList}/>
		</>
	)
}

export default App
