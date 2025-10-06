import Navigator from "../shop/nav";
import HomeContent from "./homeContent";
import Shopfooter from "../shop/shopfooter";
function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Navigator></Navigator>
      <HomeContent></HomeContent>
      <Shopfooter></Shopfooter>
    </div>
  );
}

export default HomePage;    
