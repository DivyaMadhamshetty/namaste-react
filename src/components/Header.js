import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL}></img>
      <div className="navItems">
        <ul className="navList">
          <li className="listItem">Home</li>
          <li className="listItem">About Us</li>
          <li className="listItem">Contact Us</li>
          <li className="listItem">Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
