import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import PrivateRoute from './components/routes/Private';
import Dashboard from './pages/user/Dashboard';
import ForgotPasssword from './pages/Auth/ForgotPassword';
import AdminDashboard from './pages/Admin/AdminDashboard';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import Users from './pages/Admin/Users';
import Profile from './pages/user/Profile';
import Order from './pages/user/Orders';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Order />} />
          <Route path="user/profile" element={<Profile />} />
          </Route>
      <Route path="/dashboard" element={<PrivateRoute />}>
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="admin/users" element={<Users />} />
        <Route path="admin/create-category" element={<CreateCategory />} />
        <Route path="admin/create-product" element={<CreateProduct />} />
      </Route>  
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/forgot-password' element={<ForgotPasssword/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/policy' element={<Policy/>}></Route>
      <Route path='/*' element={<Pagenotfound/>}></Route>
      
    </Routes>
   
    </>
  );
}

export default App;
