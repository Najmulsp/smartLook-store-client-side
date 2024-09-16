import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/AuthLayout";
import Register from "./pages/authPages/Register";
import Login from "./pages/authPages/Login";
import AdminLayout from "./components/admin-view/AdminLayout";
import Dashboard from "./pages/admin-view/Dashboard";
import Features from "./pages/admin-view/Features";
import Orders from "./pages/admin-view/Orders";
import Products from "./pages/admin-view/Products";
import UserLayout from "./components/user-view/UserLayout";
import NotFound from "./pages/not-found/NotFound";
import Account from "./pages/user-view/Account";
import Checkout from "./pages/user-view/Checkout";
import Listing from "./pages/user-view/Listing";
import Home from "./pages/user-view/Home";
import CheckAuth from "./components/common/CheckAuth";
import UnAuthPage from "./pages/unauth-page/UnAuthPage";
import PostView from "./components/user-view/post-view";


function App() {
  const isAuthenticated = false;
  const user = null

  return (
  
      <div className="flex flex-col overflow-hidden bg-white">

        <h1>navber</h1>
        <PostView />

        <Routes>
                {/* auth routes */}
          <Route path="/auth" element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
            }>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />}/>
          </Route>
                  {/* Admin routes */}
          <Route path="/admin" element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
            }>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="features" element={<Features />}/>
            <Route path="orders" element={<Orders />}/>
            <Route path="products" element={<Products />}/>
          </Route>
                  {/* User routes */}
          <Route path="/user" element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <UserLayout />
            </CheckAuth>
            }>
            <Route path="home" element={<Home />}/>
            <Route path="account" element={<Account />} />
            <Route path="checkout" element={<Checkout />}/>
            <Route path="listing" element={<Listing />}/>
          </Route>
            <Route path="*" element={<NotFound />}/>
            <Route path="unauth-page" element={<UnAuthPage />}/>

        </Routes>
      </div>
      
    
  )
}

export default App
