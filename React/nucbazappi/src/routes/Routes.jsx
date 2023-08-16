import { Routes as ReactDomRoutes, Route } from "react-router-dom";

import Checkout from "../pages/Checkout/Checkout";
import Felicitaciones from "../pages/Felicitaciones/Felicitaciones";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MisOrdenes from "../pages/MisOrdenes/MisOrdenes";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Register from "../pages/Register/Register";
import Resumen from "../pages/Resumen/Resumen";

function Routes() {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/mis-ordenes" element={<MisOrdenes />} />
      <Route path="/felicitaciones" element={<Felicitaciones />} />
      <Route path="/resumen/:orderId" element={<Resumen />} />

      <Route path="/checkout" element={<Checkout />} />

      <Route path="*" element={<PageNotFound />} />
    </ReactDomRoutes>
  );
}

export default Routes;
