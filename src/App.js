
import Login from "./component/login/loginPage";
import Register from "./component/register/register";
import DashBoard from  "./component/dashboard/dashboard";
import About from "./component/about/aboutHome";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from "./component/error/error";
import Back from "./component/authorizer/back";
import TwitterAuthorize from "./component/authorizer/twiter-authorize";


function App() {
  return (  
  <BrowserRouter>
    <Routes >
      <Route path="/" element={<About />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/dashboard" element={<DashBoard />}/>
      <Route path="/back" element={<Back />}/>
      <Route path="/authorize" element={<TwitterAuthorize />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    </BrowserRouter> 
  );
}

export default App;
