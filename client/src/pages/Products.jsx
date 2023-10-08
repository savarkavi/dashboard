/* eslint-disable react/prop-types */
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { useFetchProductsQuery } from "../store/api";

const Products = ({ isSidebarOpen, screenSize }) => {
  const { data, isLoading } = useFetchProductsQuery();

  const renderedCards = data?.map((product) => (
    <ProductCard
      key={product._id}
      name={product.name}
      description={product.description}
      price={product.price}
      rating={product.rating}
      category={product.category}
      supply={product.supply}
      stats={product.stats}
    />
  ));

  return (
    <div>
      {(!isSidebarOpen || screenSize > 580) && (
        <div className="p-8 overflow-y-scroll h-[calc(100vh-104px)]">
          <Header title={"Prodcuts"} subtitle={"See your list of products"} />
          <div className="w-full mt-8">
            {isLoading ? (
              <div className="text-white text-xl mt-6">Loading...</div>
            ) : (
              <div
                className={`grid gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ${
                  isSidebarOpen && screenSize >= 768 && "md:grid-cols-1"
                } `}
              >
                {renderedCards}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
