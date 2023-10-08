import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

/* eslint-disable react/prop-types */
const ProductCard = ({
  name,
  description,
  price,
  rating,
  category,
  supply,
  stats,
}) => {
  const [seeMoreOpen, setSeeMoreOpen] = useState(false);

  const handleSeeMoreToggle = () => {
    setSeeMoreOpen((prevState) => !prevState);
  };

  return (
    <div
      className={`bg-indigo-950 p-4  ${
        seeMoreOpen ? "h-[400px]" : "h-[300px]"
      } flex flex-col justify-center gap-8 rounded-xl`}
    >
      <div className="flex flex-col gap-2">
        <span className="text-amber-200 text-sm">{category}</span>
        <span className="font-bold uppercase text-white text-lg">{name}</span>
        <span className="text-amber-200 text-sm">{`$${price}`}</span>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-amber-200 text-sm flex gap-1 items-center">
          {`${rating}`}
          <AiFillStar className="text-lg" />
        </div>
        <span className="text-white">{description}</span>
      </div>
      <div>
        <div
          className="text-white text-lg cursor-pointer"
          onClick={handleSeeMoreToggle}
        >
          See More
        </div>
      </div>
      {seeMoreOpen && (
        <div className="flex flex-col gap-2 text-gray-400">
          <span>Suppply Left: {supply}</span>
          <span>Yearly sales: {stats?.yearlySalesTotal}</span>
          <span>Yearly units sold: {stats?.yearlyTotalSoldUnits}</span>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
