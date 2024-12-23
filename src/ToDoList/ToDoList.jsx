import './ToDoList.css'

function ToDoList({ toDoList, deleteItem }) {
	return (
		<ul id="app-to-do-list">
			{ toDoList.map((item, index) => (
				<li key={index}>
					{item}
					<span className="trailing-close" onClick={() => deleteItem(index)}>×</span>
				</li>
			))}	
		</ul>
	)
}

export default ToDoList
