import './ToDoList.css'
import ToDo from '../model/ToDo.js'

function ToDoList({ toDoList, deleteItem, toggleCompleted }) {
	return (
		<ul id="app-to-do-list">
			{ toDoList.map((toDo, index) => (
				<li key={index} onClick={() => toggleCompleted(index)} className={toDo.completed? "checked" : ""}>
					{toDo.task}
					<span className="trailing-close" onClick={(event) => {
							// Don't propagate to li's onClick
							event.stopPropagation()
							deleteItem(index)
					}}>×</span>
				</li>
			))}	
		</ul>
	)
}

export default ToDoList
