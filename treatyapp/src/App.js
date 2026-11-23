
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginPage from './Components/LoginPage/LoginPage';
import WelcomePage from './Components/WelcomePage/WelcomePage';

import AdminPage from './Components/AdminPage/AdminPage';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route  path='/' element={<WelcomePage/>}></Route>
     
      <Route  path='/admin' element={<AdminPage/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
