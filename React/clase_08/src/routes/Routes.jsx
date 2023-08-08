import React from 'react'

import {
    BrowserRouter,
    Routes as ReactDomRoutes,
    Route
} from "react-router-dom"
import Layout from "../components/Layout/Layout"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import Products from "../pages/Products/Products"
import Product from "../pages/Product/Product"
import User from "../pages/User/User"
import { AuthProvider } from '../context/AuthContext'
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'

const Routes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
              <ReactDomRoutes>
                  <Route path='/' element={<Home/>} />
                  <Route path='login' element={<Login/>} />
                  {/* <Route path='products' element={<Products/>} /> */}

                  <Route path='products'>
                    <Route index element={<Products/>} />
                    <Route path=':product' element={<Product/>} />
                  </Route>

                  <Route path='user/:username' element={
                  <ProtectedRoute redirectTo={"/login"}>
                    <User/>
                  </ProtectedRoute>
                  }/>

                  <Route path='*' element={<h2>ERROR!</h2>} />
              </ReactDomRoutes>
          </Layout>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Routes