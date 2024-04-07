import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import uploadArea from "../assets/upload_area.svg";
import { StateContext } from "../Context/StateContext";
const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
    description: "",
    quantity: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };
  //   console.log(productDetails);
  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    console.log(productDetails);
    let product = productDetails;
    let resData;
    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        resData = data;
      });
    if (resData.success) {
      product.image = resData.image_url;
      console.log(product);
      await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          data.success ? alert("Product Added") : alert("Failed");
        });
    }
  };

  const { currentColor } = useContext(StateContext);
  const { t } = useTranslation();
  return (
    <div className="pt-10 md:px-96 md:pt-4 flex flex-col justify-center">
      <p className="pt-4 md:ml-8 dark:text-white  text-3xl font-semibold tracking-wider">
        {t("Add Product", { appName: "App for Translations" })}{" "}
      </p>
      <div className="flex flex-col  gap-8 box-border w-auto md:w-[100%] md:max-w-[800px] py-[30px] px-[50px] my-[20px]  md:mx-[30px] rounded-md dark:bg-secondary-dark-bg">
        <div className="w-[100%] text-[#7b7b7b]">
          {t("Product Title", { appName: "App for Translations" })}{" "}
          <input
            value={productDetails.name}
            onChange={changeHandler}
            className="box-border mt-[12px] text-[14px] w-[100%] h-[50px] pl-[6px] rounded-md border-2 border-[#c3c3c3] outline-none text-[#7b7b7b] "
            type="text"
            name="name"
            placeholder={t("Enter the Product Name", {
              appName: "App for Translations",
            })}
          />
        </div>
        <div className="flex gap-[40px]">
          <div className="w-[100%] text-[#7b7b7b] ">
            <p>{t("Old Price", { appName: "App for Translations" })}</p>
            <input
              value={productDetails.old_price}
              onChange={changeHandler}
              className="box-border mt-[12px] text-[14px] w-[100%] h-[50px] pl-[6px] rounded-md border-2 border-[#c3c3c3] outline-none text-[#7b7b7b]"
              type="text"
              name="old_price"
              placeholder={t("Old Price", { appName: "App for Translations" })}
            />
          </div>
          <div className="w-[100%] text-[#7b7b7b] ">
            <p>{t("New Price", { appName: "App for Translations" })}</p>
            <input
              value={productDetails.new_price}
              onChange={changeHandler}
              className="box-border mt-[12px] text-[14px] w-[100%] h-[50px] pl-[6px] rounded-md border-2 border-[#c3c3c3] outline-none text-[#7b7b7b]"
              type="text"
              name="new_price"
              placeholder={t("New Price", { appName: "App for Translations" })}
            />
          </div>
        </div>
        <div className="w-[100%]  text-[#7b7b7b]">
          <p className="pb-3">
            {t("Product Category", { appName: "App for Translations" })}
          </p>
          <select
            value={productDetails.category}
            onChange={changeHandler}
            name="category"
            className="p-[10px] w-[100px] h-[50px] text-sm text-[#7b7b7b] border-2 border-[#c3c3c3] rounded-md"
          >
            <option value="women">
              {t("Women", { appName: "App for Translations" })}
            </option>
            <option value="man">
              {t("Men", { appName: "App for Translations" })}
            </option>
            <option value="kid">
              {t("Kid", { appName: "App for Translations" })}
            </option>
          </select>

          <div className="w-[100%] text-[#7b7b7b] ">
            <p className="pt-3">
              {t("Quantity", { appName: "App for Translations" })}
            </p>
            <input
              value={productDetails.quantity}
              onChange={changeHandler}
              className="box-border mt-[12px] text-[14px] w-[100%] h-[50px] pl-[6px] rounded-md border-2 border-[#c3c3c3] outline-none text-[#7b7b7b]"
              type="text"
              name="quantity"
              placeholder={t("Quantity", { appName: "App for Translations" })}
            />
          </div>
        </div>

        <div className="w-[100%] text-[#7b7b7b] ">
          <p>{t("Product Desciption", { appName: "App for Translations" })}</p>
          <input
            value={productDetails.description}
            onChange={changeHandler}
            className="box-border mt-[12px] text-[14px] w-[100%] h-[50px] pl-[6px] rounded-md border-2 border-[#c3c3c3] outline-none text-[#7b7b7b]"
            type="text"
            name="description"
            placeholder={t("Enter the Product Description", { appName: "App for Translations" })}
          />
        </div>

        <div className="flex flex-col gap-1 text-[#7b7b7b]">
        <p>{t("Add Product Image", { appName: "App for Translations" })}</p>
          <label htmlFor="file-input">
            <img
              src={image ? URL.createObjectURL(image) : uploadArea}
              className="h-[120px] w-[120px] rounded-lg object-contain cursor-pointer mx-[0] my-[10px] "
            />
          </label>
          <input
            onChange={imageHandler}
            type="file"
            name="image"
            id="file-input"
            hidden
          />
          
        </div>
        <button
          onClick={() => {
            Add_Product();
          }}
          style={{ background: currentColor }}
          className="mt-[10px] w-[160px] h-[50px] rounded-md   border-none text-white cursor-pointer font-medium"
        >
          {t("Add", { appName: "App for Translations" })}
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
