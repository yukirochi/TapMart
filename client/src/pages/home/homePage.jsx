import Navigator from "../shop/nav";
import HomeContent from "./homeContent";
function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Navigator></Navigator>
      <HomeContent></HomeContent>
    </div>
  );
}

export default HomePage;    
