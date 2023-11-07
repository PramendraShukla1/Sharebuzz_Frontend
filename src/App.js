import { Routes, Route, useLocation, Outlet, Navigate } from "react-router-dom";
import {useSelector} from "react-redux"
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";


function Layout() {
  const {user} = useSelector(state=> state.user) ;
  const location = useLocation();
  console.log(user)

  return user?.token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

function App() {
  const {theme} = useSelector((state)=>state.theme)
  return (
    <div data-theme={theme} className="App">
      <Routes>
        {/*Protected Routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Route>
         {/*Unprotected Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
