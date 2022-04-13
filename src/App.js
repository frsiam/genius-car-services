import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
