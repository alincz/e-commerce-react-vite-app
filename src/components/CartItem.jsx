import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;
  return (
    <div className="flex">
      <div className="w-full min-h-[150px] flex items-center gap-x-4 ">
        {/*image */}
        <Link to={`product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          {/* title si remove icon */}
          <div className="flex justify-between mb-2">
            {/*title */}
            <Link
              to={`product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            {/* remove icon */}
            <div className="text-xl cursor-pointer">
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    // Adaugă alte proprietăți aici, dacă este necesar
  }).isRequired,
};
export default CartItem;
