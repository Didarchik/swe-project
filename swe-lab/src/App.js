import {Routes, Route} from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Overlay from "./components/Overlay";
import PersonInfo from "./components/PersonInfo";
import General from "./components/General";
import Tasks from "./components/Tasks";
import Main from "./components/Main"
import './index.css';
import AdminPageDriver from "./AdminPageDriver";
import Authorization from "./Authorzation";
import AdminPageUser from "./AdminPageUser";

function App() {
  const [cookieValue, setCookieValue] = useState('');
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
            <Main />
        } />
        <Route path="/page" element={
              <div className="block d-flex align-center">
                <PersonInfo />
            </div>
        } />
        <Route path="/auth" element={
          <>
            <Authorization cookieValue={cookieValue} setCookieValue={setCookieValue}/>
          </>
        } />
        <Route path="/general" element={
          <>
            <General />
          </>
        } />
        <Route path="/tasks" element={
          <>
            
            <Tasks />
          </>
        }/>
        <Route path="/admin_menu" element={
          <>
            <AdminPageDriver cookieValue={cookieValue} setCookieValue={setCookieValue}/>
          </>
        }/>
        <Route path="/admin_user" element={
          <>
            <AdminPageUser />
          </>
        }/>
      </Routes>
    </div>
  );
}

export default App;
