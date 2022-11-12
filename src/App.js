import  Home  from "./pags/Home";
import  Login  from "./pags/Login";
import  Register  from "./pags/Register";
import "./style.scss";
import {BrowserRouter,Routes, Route, Navigate} from "react-router-dom";
import { useUserAuth } from "./context/AuthContext";
import Addcomplain from "./pags/Addcomplain";
import { Showcomplaint } from "./pags/Showcomplain";
//import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const { currentUser } = useUserAuth();
  
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };
  return (
    <BrowserRouter>
      <Routes>
      <Route path = "/">
        <Route index element={
          <ProtectedRoute>
          <Home />
          </ProtectedRoute>}/>
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="addcomplain" element={<Addcomplain />} />
        <Route path="showcomplaint" element={<Showcomplaint />} />
        </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
