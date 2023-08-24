import react from "react";
import "../styles.css";
const List = ({ props }) => {
  const { products } = props;

  return (
    <>
      {products?.map((p) => {
        return (
          <div className="productCard" key={p.id}>
            <img
              style={{ height: 200, objectFit: "cover" }}
              src={`https://m.media-amazon.com/images/I/616X-FOZsVL._AC_SR180,120_QL70_.jpg`}
              alt="image"
            />
            <div className="price">
              <div>{p.title}</div>
              <div>Rs.{p.price}</div>
            </div>
            <button
              style={{ color: "green", padding: "2px", background: "#ccc" }}
            >
              AddToCart
            </button>
          </div>
        );
      })}
    </>
  );
};
export default List;
