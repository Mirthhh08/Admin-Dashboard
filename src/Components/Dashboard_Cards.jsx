import React from "react";

import { MdPeopleAlt } from "react-icons/md";
import { HiOutlineRefresh } from "react-icons/hi";
import { BsBoxSeam } from "react-icons/bs";
import { FiBarChart } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Dashboard_Cards = () => {
  const { t } = useTranslation();
  const cards = [
    {
      title: "Customer",
      icon: <MdPeopleAlt />,
      total: 3000,
      increase: 100,
      iconColor: "#03C9D7",
      iconBg: "#E5FAFB",
    },
    {
      title: "Products",
      icon: <BsBoxSeam />,
      iconColor: "rgb(255, 244, 229)",
      iconBg: "rgb(254, 201, 15)",
      total: 3000,
      increase: 100,
    },
    {
      title: "Sales",
      icon: <FiBarChart />,
      iconColor: "rgb(228, 106, 118)",
      iconBg: "rgb(255, 244, 229)",
      total: 3000,
      increase: 100,
    },
    {
      title: "Revenue",
      icon: <HiOutlineRefresh />,
      iconColor: "rgb(0, 194, 146)",
      iconBg: "rgb(235, 250, 242)",
      total: 3000,
      increase: 100,
    },
  ];
  return (
    <div className="pb-4 flex m-3 justify-center gap-4 items-center flex-wrap hover:cursor-pointer overflow-auto">
      {cards.map((card) => (
        <div
          key={card.title}
          className=" dark:bg-secondary-dark-bg bg-white h-44 md:w-56  p-4 pt-9 rounded-2xl flex flex-col justify-center items-center shadow-lg hover:shadow-2xl transition duration-300"
        >
          <div
            style={{ color: card.iconColor, backgroundColor: card.iconBg }}
            className="text-2xl opacity-0.9 rounded-full p-4 hover:cursor-pointer"
          >
            {card.icon}
          </div>
          <p className="text-lg font-semibold">
            {card.total}{" "}
            <span className="text-sm ml-2 text-green-500">10%</span>
          </p>
          <p className="text-sm text-gray-400">
            {t(card.title, { appName: "App for Translations" })}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard_Cards;
