
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Explore from './components/Explore';
function App() {
  return (
    <BrowserRouter>
    <div id="main">

      

      <Sidebar/>

      <div className='app-container'>
        <Navbar/>
        <Routes>
        <Route exact path='/' element = {<Projects/>}/>
        <Route exact path='/explore' element = {<Explore/>}/>
        </Routes>

      </div>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
