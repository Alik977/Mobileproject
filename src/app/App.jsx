import { RouterProvider } from 'react-router-dom'
import './Styles/App.css'
import { router } from './routes/routes'

function App() {
 
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
