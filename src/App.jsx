import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/AuthLayout"
import Register from "./pages/authPages/Register"
import Login from "./pages/authPages/Login"
import AdminLayout from "./components/admin-view/AdminLayout"
import AdminHeader from "./components/admin-view/AdminHeader"
import AdminSidebar from "./components/admin-view/AdminSidebar"
import Dashboard from "./pages/admin-view/Dashboard"
import Features from "./pages/admin-view/Features"
import Orders from "./pages/admin-view/Orders"
import Products from "./pages/admin-view/Products"
import UserLayout from "./components/user-view/UserLayout"
import NotFound from "./pages/not-found/NotFound"
import Account from "./pages/user-view/Account"
import Checkout from "./pages/user-view/Checkout"
import Listing from "./pages/user-view/Listing"
import Home from "./pages/user-view/Home"


function App() {


  return (
  
      <div className="flex flex-col overflow-hidden bg-white">

        <h1>navber</h1>

        <Routes>
                {/* auth routes */}
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />}/>
          </Route>
                  {/* Admin routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="features" element={<Features />}/>
            <Route path="orders" element={<Orders />}/>
            <Route path="products" element={<Products />}/>
          </Route>
                  {/* User routes */}
          <Route path="/user" element={<UserLayout />}>
            <Route path="home" element={<Home />}/>
            <Route path="account" element={<Account />} />
            <Route path="checkout" element={<Checkout />}/>
            <Route path="listing" element={<Listing />}/>
          </Route>
        </Routes>
      </div>
      
    
  )
}

export default App
