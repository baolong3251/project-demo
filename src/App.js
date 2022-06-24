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
import HeaderComplaintList from './HeaderComplaintList';
import PageForTest from './PageForTest';

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
       
         
       <Sidebar>
        <div className='content'>
        <Routes>
          
          <Route exact path='/login' element={<Login />} />

          <Route exact path='/' element={<SU_uses />} />
          
          <Route exact path='/something' element={<PageForTest />} />
          
          <Route exact path='/testpage' element={<TestPage />} />

          <Route exact path='/complaints' element={<ComplaintList />} />

          <Route exact path='/testthing' element={<HeaderComplaintList />} />
          
        </Routes>
        </div>
      </Sidebar>
    </div>
  );
}

export default App;
