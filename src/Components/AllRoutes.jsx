import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AppOnly from "./AppOnly";
import BestSelling from "./BestSelling";
import Brand from "./Brand";
import Categories from "./Categories";
import Clearance from "./Clearnce";
import Coupon from "./Coupon";
import Deal from "./Deal";


const AllRoutes = () => {
  return <div>
<Routes>
  <Route path="/" element={ <Home/> } />
  <Route path="/apponly" element={ <AppOnly/> } />
  <Route path="/brand" element={ <Brand/> } />
  <Route path="/clearance" element={ <Clearance/> } />
  <Route path="/deal" element={ <Deal/> } />
  <Route path="/bestselling" element={ <BestSelling/> } />
  <Route path="/categories" element={ <Categories/> } />
  <Route path="/coupon" element={ <Coupon/> } />
</Routes>
  </div>;
};
export default AllRoutes;