import LandinPage from "./pages/Landing/LandingPage";
import { Routes,Route } from "react-router-dom";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/SignupPage"
import ShopPage from "./pages/shop/shop";
import HomePage from "./pages/home/homePage";
function App() {
  return (
    <Routes>
      <Route path='/' element={<LandinPage></LandinPage>}/>
      <Route path='/auth/login' element={<LoginPage></LoginPage>} ></Route>
      <Route path="/auth/register" element={<RegisterPage></RegisterPage>}></Route>
      <Route path="/shop/*" element={<ShopPage></ShopPage>}></Route>
      <Route path="/home" element={<HomePage></HomePage>}></Route>
    </Routes>
  );
}

export default App;
