import Header from "../components/header";
import Dashboard from "../components/dashboard";
import { useAllProductsQuery } from "../redux/features/product";
import { Link } from "react-router-dom";

const upload_url = process.env.REACT_APP_ASSET_URL;

const StorePage = () => {
  const { data, isLoading } = useAllProductsQuery();

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
              <h1 className="text-[25px] font-bold leading-normal text-white-false mt-4">
                Store
              </h1>
              <div className="mt-4 flex justify-between gap-4 flex-wrap">
                {data.products?.map((val, index) => {
                  return (
                    <Link
                      to={{ pathname: "/product/details", search: val?._id }}
                      key={index}
                      className="w-[228px] block h-[320px] text-white-false"
                    >
                      <div className="h-[236px]">
                        <img
                          src={upload_url + val.picture}
                          className="h-full w-full"
                          alt=""
                        />
                      </div>
                      <div>
                        <span className="block text-center text-[18px font-bold]">
                          {val?.name}
                        </span>
                        <span className="block text-center text-[35px] font-light">
                          ${val?.price}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorePage;
