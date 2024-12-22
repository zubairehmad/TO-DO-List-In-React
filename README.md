# TO-DO List App

- ## Setup Blank Project
  - To setup blank project of react with javascript run the following commands:
  - `npm create vite@latest project_dir --template react` (It will configure a react app in the given directory) 
  - `cd /path/to/project/dir/` (Go to the project directory)
  - `npm install` (Installs required packages)

- ## Run The App
  - `npm run dev` (Runs the app in development mode)

- ## Configure Blank Project
  - By default, the newly created project isn't clean (blank).
  - To make it actually blank, replace the contents of `src/App.jsx` with:
    ```
	import { useState } from 'react'
	import './App.css'

	function App() {
	}

	export default App
    ```
  - The title of the page is by default `Vite + React` or similar and icon of webpage will be by default of vite.
  - To remove this, you can modify `index.html` file. Remove the icon tag and add some suitable title, that's it.
