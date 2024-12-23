import { useState } from 'react'
import './App.css'
import AppHeader from './AppHeader/AppHeader.jsx'
import ToDoList from './ToDoList/ToDoList.jsx'
import ToDo from './model/ToDo.js'

function App() {

	// Create a toDoList state
	const [toDoList, setToDoList] = useState([])

	const addToDoItem = (item) => {
		setToDoList([...toDoList, item])	
	}

	const deleteItem = (index) => {
		const updatedList = [
			...toDoList.slice(0, index),
			...toDoList.slice(index+1)
		]
		setToDoList(updatedList)
	}

	const toggleCompleted = (index) => {
		const updatedList = [...toDoList]
		updatedList[index].completed = !updatedList[index].completed
		setToDoList(updatedList)
	}

	return (
		<>
			<AppHeader addToDoItem={addToDoItem} />
			<ToDoList toDoList={toDoList} deleteItem={deleteItem} toggleCompleted={toggleCompleted} />
		</>
	)
}

export default App
