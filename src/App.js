
import './App.css';
import {useSelector} from "react-redux"
import Login from './component/Login';
import { selectUser } from './features/userSlice';
 import Logut from './component/Logut';

function App() {
  const user =useSelector(selectUser);
 
  return (
    <div >
       { user ? <Logut /> : <Login />}
      
    </div>
  );
}

export default App;
