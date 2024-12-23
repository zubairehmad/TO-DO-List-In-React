import './ToDoList.css'

function ToDoList({ toDoList }) {
	return (
		<ul id="app-to-do-list">
			{ toDoList.map((item, index) => (
				<li key={index}>{item}</li>
			))}	
		</ul>
	)
}

export default ToDoList
