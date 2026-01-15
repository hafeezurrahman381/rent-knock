import { FaMapMarkerAlt, FaTruck, FaTags } from "react-icons/fa";
import "../Components/Header.css";

function Header() {
  return (
    <div className="header">
      <h1 className="title">Welcome to worldwide RentKnow!</h1>

      <div className="right">
        <div className="item">
          <FaMapMarkerAlt className="icon" />
          <span>Deliver to 423651</span> <span className="v-line">|</span>
        </div>

        <div className="item">
          <FaTruck className="icon" />
          <span>Track Your Order</span> <span className="v-line">|</span>
        </div>

        <div className="item">
          <FaTags className="icon" />
          <span>All Offers</span> <span className="v-line">|</span>
        </div>
      </div>
    </div>
  );
}

export default Header;


