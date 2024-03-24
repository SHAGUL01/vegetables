import './App.css';
import About from './About/About';
import Blog from './Blog/Blog';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Shop from './Shop/Shop';
import Navebar from './Navebar/Navebar';
import Contact from './Contact/Contact';
import {BrowserRouter,Route,Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
         
         <BrowserRouter>
         <Navebar/>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/Blog'element={<Blog/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>

         </Routes>
         <Footer/>
         </BrowserRouter>
        
         
    </div>
  );
}

export default App;
