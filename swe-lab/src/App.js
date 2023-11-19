import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Overlay from "./components/Overlay";
import PersonInfo from "./components/PersonInfo";
import General from "./components/General";
import Tasks from "./components/Tasks";
import Main from "./components/Main"
import './index.css';
import AdminPage from "./AdminPage";
import Authorization from "./Authorzation";

function App() {
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
            <Authorization />
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
        <Route path="/admin" element={
        <>
          <AdminPage />
        </>
      }/>
      </Routes>
    </div>
  );
}

export default App;
