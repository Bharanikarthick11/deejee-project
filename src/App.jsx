
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dj from './Dj'


function App() {
 

  return (
    <>

<BrowserRouter>
<Routes>
  <Route path='/' element={<Dj/>}></Route>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
