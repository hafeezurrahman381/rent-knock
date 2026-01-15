import Categories from "../Components/Categories";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import ProductCard from "../Components/ProductCard";
import Slider from "../Components/Slider";
import TopCategories from "./TopCategories";
import ElectronicSlider from "../Components/ElectronicSlider";
import DaliyEssentials from "./DaliyEssentials";
import Footer from "../Components/Footer";

function HomePage({ currentUser }) {
  return (
    <div>
      <Header />
      {/* ✅ currentUser yahan pass kiya */}
      <NavBar currentUser={currentUser} />

      <Categories />
      <Slider />
      <TopCategories />
      <ProductCard />
      <ElectronicSlider />
      <DaliyEssentials />
      <Footer />
    </div>
  );
}

export default HomePage;
