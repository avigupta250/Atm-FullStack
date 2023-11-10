
import './App.css';
import { Routes,Route } from 'react-router-dom';
import  LoginForm  from './components/Loginform';
import CreateAccount from './components/CreateAccount';


function App() {
  return (
    <div className="App w-[100vw] h-[100vh]  bg-yellow-300">
    <Routes>
    <Route path='/' element={<LoginForm/>}/>
    <Route path='/createaccount' element={<CreateAccount/>}/>
    </Routes>
   
    </div>
  );
}

export default App;
 