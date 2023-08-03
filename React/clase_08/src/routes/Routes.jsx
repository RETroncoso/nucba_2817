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

const Routes = () => {
  return (
    <BrowserRouter>
        <Layout>
            <ReactDomRoutes>
                <Route path='/' element={<Home/>} />
                <Route path='login' element={<Login/>} />
                {/* <Route path='products' element={<Products/>} /> */}

                <Route path='products'>
                  <Route index element={<Products/>} />
                  <Route path=':product' element={<Product/>} />
                </Route>

                <Route path='user/:username' element={<User/>}/>

                <Route path='*' element={<h2>ERROR!</h2>} />
            </ReactDomRoutes>
        </Layout>
    </BrowserRouter>
  )
}

export default Routes