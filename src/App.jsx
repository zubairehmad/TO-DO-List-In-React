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

	const deleteItem = (index) => {
		const updatedList = [
			...toDoList.slice(0, index),
			...toDoList.slice(index+1)
		]
		setToDoList(updatedList)
	}

	return (
		<>
			<AppHeader addToDoItem={addToDoItem} />
			<ToDoList toDoList={toDoList} deleteItem={deleteItem} />
		</>
	)
}

export default App
