import { useParams } from "react-router-dom";
import products from "../products";

const ProdcutScreen = () => {
  const { id: productId } = useParams();
  const product = products.find((p) => p._id === productId);
  console.log(product);

  return (
    <div>ProdcutScreen</div>
  );
};
export default ProdcutScreen;