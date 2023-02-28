
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';

import Project from './components/Project';
import Contact from './components/Contact ';
import Service from './components/Service';
import About from './components/About';

function App() {
  return (
   <>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/service' element={<Service/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/project' element={<Project/>}/>
  <Route path='/about' element={<About/>}/>
</Routes>
   </>
  );
}

export default App;
