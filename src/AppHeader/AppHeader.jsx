import './AppHeader.css'

function AppHeader() {
	return (
		<div className="app-header">
			<h1 className="app-title"> My To Do List</h1>
			<div className="app-input-box">
				<input
					type="text"
					placeholder="Title..."
					className="app-input-field"
				/>
				<span className="app-add-button">
					Add	
				</span>
			</div>
		</div>
	)
}

export default AppHeader;
