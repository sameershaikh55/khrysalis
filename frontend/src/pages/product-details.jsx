import Header from "../components/header";
import Dashboard from "../components/dashboard";
import { useLocation } from "react-router-dom";
import { useProductDetailQuery } from "../redux/features/product";

const upload_url = process.env.REACT_APP_ASSET_URL;

const ProductDetailsPage = () => {
  const location = useLocation();
  const searchParams = location.search.split("?")[1];
  const { data, isLoading } = useProductDetailQuery(searchParams);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-black-false pb-20 min-h-screen">
      <div className="max-w-screen-xl m-auto">
        <Header />
        <div className="px-4">
          {/* Main  */}
          <div className="flex justify-between relative top-[72px]">
            <div className="!w-[14%]">
              <Dashboard />
            </div>
            <div className="w-[86%]">
              <div className="mt-4 text-white-false">
                <div className="flex justify-between">
                  <h1 className="font-semibold text-[25px] leading-none">
                    Store
                  </h1>
                  {/* <div className="flex gap-x-1 items-center text-base">
                    <IoFilter />
                    Filter
                  </div> */}
                </div>
              </div>

              <div className="mt-8 flex justify-between items-center text-white-false">
                <div className="w-1/2">
                  <div className="h-[342px] bg-[#070707] flex justify-center items-center">
                    <img
                      src={upload_url + data.product.picture}
                      alt=""
                      className="w-[320px] h-[320px]"
                    />
                  </div>
                </div>
                <div className="w-1/2 pl-6 p-4 flex flex-col gap-y-3">
                  <h1 className="font-bold text-[50px]">{data.product.name}</h1>
                  <p className="text-[18px] font-bold">
                    {data.product.description}
                  </p>
                  <span className="block text-[35px] font-bold">
                    ${data.product.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
