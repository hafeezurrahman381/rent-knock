import Categories from "./Categories";
import Header from "./Header";
import NavBar from "./NavBar";
import ProductCard from "./ProductCard";
import Slider from "./Slider";
import TopCategories from "./TopCategories";
import ElectronicSlider from "./ElectronicSlider";
import DaliyEssentials from "./DaliyEssentials";
import Footer from "./Footer";
//import NavBar from "./NavBar";

function HomePage(){
return(
    <div>
      <Header />
      <NavBar />
      <Categories />
      <Slider />
      <TopCategories />
      <ProductCard />
      <ElectronicSlider />
      <DaliyEssentials/>
      <Footer />
    </div>
)
}
export default HomePage;