import { useState } from "react";
import Navigator from "./nav";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import ShopContent from "./shopContent";
import Shopfooter from "./shopfooter";
function ShopPage() {
  return (
    <div className=" overflow-x-hidden">
      <Navigator></Navigator>
      <Routes>
        <Route path="categories/:id" element={<ShopContent></ShopContent>}></Route>
      </Routes>
      <Shopfooter></Shopfooter>
    </div>
  );
}

export default ShopPage;
