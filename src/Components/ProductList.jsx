import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { StateContext } from "../Context/StateContext";
const ProductList = () => {
  const { screenSize } = useContext(StateContext);
  const [allProducts, setAllProducts] = useState([]);

  const { t } = useTranslation();
  const fetchInfo = async () => {
    await fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    await fetch("http://localhost:4000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });

    await fetchInfo();
  };
  return (
    <div className="flex flex-col items-center w-[95%] mr-auto ml-auto md:w-[100%] h-[740px] py-[10px] px-[50px] my-[20px]   rounded-lg dark:bg-secondary-dark-bg dark:text-white bg-white pt-10 ">
      <h1 className="text-2xl  ">
        {t("All Product List", { appName: "App for Translations" })}
      </h1>
      <div
        className={`text-[12px] md:text-sm  grid ${
          screenSize <= 500
            ? "grid-cols-[4fr_0.5fr_0.5fr_0.5fr_0.5fr]"
            : "grid-cols-[0.5fr_3fr_0.5fr_0.5fr_0.5fr_0.5fr]"
        }  md:grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] gap-[10px] w-[100%] py-[20px] dark:text-white text-[#454545] place-items-center font-bold mt-6`}
      >
        {screenSize > 500 && (
          <p>{t("Product", { appName: "App for Translations" })}</p>
        )}
        <p className="mr-5 md:mr-0">{t("Title", { appName: "App for Translations" })}</p>
        <p>{t("Old Price", { appName: "App for Translations" })}</p>
        <p>{t("New Price", { appName: "App for Translations" })}</p>
        <p>{t("Category", { appName: "App for Translations" })}</p>
        <p>{t("Remove", { appName: "App for Translations" })}</p>
      </div>
      <div className="w-[100%] overflow-y-auto no-scrollbar">
        <hr />
        {allProducts.map((product, i) => {
          return (
            <div
              key={i}
              className={`dark:text-white text-[10px] md:text-sm grid   ${
                screenSize <= 500
                  ? "grid-cols-[4fr_0.5fr_0.5fr_0.5fr_0.5fr]"
                  : "grid-cols-[0.5fr_3fr_0.5fr_0.5fr_0.5fr_0.5fr]"
              }  md:grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] gap-[10px] w-[100%]  py-[20px] text-[#454545] font-medium  place-items-center `}
            >
              {screenSize > 500 && (
                <img
                  src={product.image}
                  alt=""
                  className="h-[60px] md:h-[80px]"
                />
              )}
              <p className="break-words">{product.name}</p>
              <p>₹{product.old_price}</p>
              <p>₹{product.new_price}</p>
              <p>{product.category}</p>
              <div
                onClick={() => {
                  remove_product(product.id);
                }}
                className=" cursor-pointer"
              >
                <FaTrashAlt />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
