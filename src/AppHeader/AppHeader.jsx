import { useState } from 'react'
import './AppHeader.css'
import ToDo from '../model/ToDo.js'

function AppHeader({ addToDoItem }) {

	const [input, setInput] = useState("")

	const onInputChange = (event) => {
		setInput(event.target.value)	
	}
	
	const handleOnClickAddButton = () => {
		if (input.trim() === "") {
			alert("You must write something")
		} else {
			addToDoItem(new ToDo(input))
			setInput("")
		}
	}

	return (
		<div className="app-header">
			<h1 className="app-title"> My To Do List</h1>
			<div className="app-input-box">
				<input
					type="text"
					placeholder="Title..."
					className="app-input-field"
					onChange={onInputChange}
					value={input}
				/>
				<span className="app-add-button" onClick={handleOnClickAddButton}>
					Add	
				</span>
			</div>
		</div>
	)
}

export default AppHeader;
