import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";
import AppOnly from "./AppOnly";
import BestSelling from "./BestSelling";
import Brand from "./Brand";

import Clearance from "./Clearnce";
import Coupon from "./Coupon";
import New from "./New";
import Deals from "./Deal";


const AllRoutes = () => {
  return <div style={{marginLeft:"200px"}} >
<Routes>
  <Route path="/" element={ <Home/> } />
  <Route path="/categories" element={ <Categories/> } />
  <Route path="/new" element={ <New/> } />
  <Route path="/apponly" element={ <AppOnly/> } />
  <Route path="/brand" element={ <Brand/> } />
  <Route path="/clearance" element={ <Clearance/> } />
  <Route path="/deals" element={ <Deals/> } />
  <Route path="/bestselling" element={ <BestSelling/> } />
  <Route path="/coupon" element={ <Coupon/> } />
</Routes>
  </div>;
};
export default AllRoutes;