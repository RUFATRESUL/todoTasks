
import Assigned from './components/Assigned';
import Home from './components/Home';
import Important from './components/Important';
import Login from './components/Login';
import Planned from './components/Planned';
import Register from './components/Register';
import {Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/important' element={<Important/>}/>
        <Route path='/planned' element={<Planned/>}/>
        <Route path='/assigned' element={<Assigned/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
