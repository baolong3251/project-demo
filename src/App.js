import './App.css';
// import Layoutgido from './Layoutgido';
import Login from './Login';
import Sidebar from './Sidebar';
// import SlideTest from './SliderTest';
import Something from './Something';
import TableTest from './TableTest';
import { Routes, Route } from "react-router-dom"
import Banner from './Banner';
import SU_uses from './SU_uses';
import ExportExcelModal from './ExportExcelModal';
import TestPage from './TestPage';
import LoginTest from './LoginTest';
import ComplaintList from './ComplaintList';

function App() {
  return (
    <div className="App">
      {/* <Something />
      <TableTest />
      <SlideTest /> */}
      {/* <Login /> */}
      {/* <Routes>
        <Route exact path='/login' element={<Login />} />
        
        
      </Routes> */}
       
         
      
        <Routes>
          <Route exact path='/login' element={<Login />} />

          <Route exact path='/' element={<Sidebar><SU_uses /></Sidebar>} />
          
          <Route exact path='/something' element={<Sidebar><Something /></Sidebar>} />
          
          <Route exact path='/testpage' element={<Sidebar><TestPage /></Sidebar>} />

          <Route exact path='/complaints' element={<Sidebar><ComplaintList /></Sidebar>} />
        </Routes>
      
    </div>
  );
}

export default App;
