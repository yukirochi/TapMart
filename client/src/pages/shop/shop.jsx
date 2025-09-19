import { useState } from "react";
import Navigator from "./nav";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import ShopContent from "./shopContent";
function ShopPage() {
  return (
    <div>
      <Navigator></Navigator>
      <Routes>
        <Route path="/categories/id:" element={<ShopContent></ShopContent>}></Route>
      </Routes>
    </div>
  );
}

export default ShopPage;
