import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Registration from './Component/Registration';
import Login from './Component/Login';
import AddData from './Component/User/AddData';
 import Home from './Component/Screen/Home';
 import DataList from './Component/User/DataList';
import EditData from './Component/User/EditData';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/register' element={<Registration/>} ></Route>
          <Route path='/login' element={<Login/>} ></Route>
          <Route path='/home/*' element={<Home/>} />
          <Route path='/data' element={<DataList/>} />
          <Route path='/edit' element={<EditData/>} />
          {/* <Route path='/list' element={<CarList/>} /> */}
        
        

        </Routes>
      </Router>
    </div>
  );
}

export default App;
