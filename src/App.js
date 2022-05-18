import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login'
import RequireAuth from './Components/RequireAuth';
import Addtask from './Components/AddTask';
import MyTasks from './Components/MyTasks';
import Signup from './Components/Signup';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/' element={<RequireAuth>
          <Addtask></Addtask>
        </RequireAuth>}></Route>
        <Route path='/addTask' element={<RequireAuth>
          <Addtask></Addtask>
        </RequireAuth>}></Route>
        <Route path='/myTasks' element={<RequireAuth>
          <MyTasks></MyTasks>
        </RequireAuth>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
