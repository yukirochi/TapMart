import LandinPage from "./pages/Landing/LandingPage";
import { Routes,Route } from "react-router-dom";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/SignupPage"
import TestPage from "./pages/Auth/textpage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandinPage></LandinPage>}/>
      <Route path='/auth/login' element={<LoginPage></LoginPage>} ></Route>
      <Route path="/auth/register" element={<RegisterPage></RegisterPage>}></Route>
      <Route path="/test" element={<TestPage></TestPage>}></Route>
    </Routes>
  );
}

export default App;
