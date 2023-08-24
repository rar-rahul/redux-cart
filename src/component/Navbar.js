import react from "react";
import { useSelector } from "react-redux";
const Navbar = () => {
  const store = useSelector((state) => state.cart);
  console.log(store);
  return (
    <>
      <div style={{ height: "90px" }}>
        <span>Cart-0</span>
      </div>
    </>
  );
};

export default Navbar;
