import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Signup from './Pages/SignUp.jsx'
import Signin from './Pages/SignIn.jsx'
import Workers from './Pages/Service-provider-form.jsx'
import Clients from './Pages/Client-Dashboard.jsx'
function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/provider-form' element={<Workers/>}/>
      <Route path='/clients-dashboard' element={<Clients/>}/>
    </Routes>
  )
}

export default App
