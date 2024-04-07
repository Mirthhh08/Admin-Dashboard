import React, { useContext } from "react";
import { StateContext } from "../Context/StateContext";
import { MdOutlineCancel } from "react-icons/md";
const Language = () => {
  const {
    initialState,
    setIsClicked,
    isClicked,
    handleChangeLanguage,
    currentLanguage,
    currentColor,
  } = useContext(StateContext);
  console.log(isClicked);
  return (
    <div className="flex justify-around nav-item absolute right-20 md:right-50 top-12 bg-white dark:bg-[#42464D] p-2 rounded-lg w-40 dark:text-white">
      <div className="flex-col border-t-1 border-color p-4 ml-4">
        <p className="font-semibold text-xl "></p>

        <div className="mt-4">
          <input
            type="radio"
            id="en"
            name="language"
            value="en"
            className="cursor-pointer"
            onChange={handleChangeLanguage}
            checked={currentLanguage === "en"}
          />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="light" className="ml-2 text-md cursor-pointer">
            English
          </label>
        </div>
        <div className="mt-2">
          <input
            type="radio"
            id="hin"
            name="language"
            value="hin"
            className="cursor-pointer"
            onChange={handleChangeLanguage}
            checked={currentLanguage === "hin"}
          />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
            हिन्दी
          </label>
        </div>
      </div>
      <div
        style={{ color: currentColor }}
        className="hover:cursor-pointer"
        onClick={() => setIsClicked({ ...initialState, ["language"]: false })}
      >
        <MdOutlineCancel size={20} />
      </div>
    </div>
  );
};

export default Language;
