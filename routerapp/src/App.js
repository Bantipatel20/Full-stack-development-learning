
import { NavLink, Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Support from './components/Support';
import About from './components/About';
import Lab from './components/Lab';
import PageNotFound from './components/PageNotFound';
import MainHeader from './components/MainHeader';
function App() {
  return (
    <div className="App">
    <nav>
      <ul>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="support">Support</NavLink>
        </li>
        <li>
            <NavLink to='about'>About</NavLink>
        </li>
        <li>
            <NavLink to='lab'>LAB</NavLink>
        </li>
      </ul>
    </nav>
      <Routes>
          <Route path='/' element={<MainHeader/>}>
               <Route index element={<Home/>}/>
               <Route path='/support' element={<Support/>}></Route>
               <Route path='/about' element={<About/>}></Route>
               <Route path='/lab' element={<Lab/>}></Route>
               <Route path='*' element={<PageNotFound/>}></Route>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
