import React, { useContext, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import { StateContext } from "../Context/StateContext"; // Import from correct file
import Navbar from "../Components/Navbar";
import Dashboard from "./Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "../Components/AddProduct";
import { FiSettings } from "react-icons/fi";
import { TbMessageChatbot } from "react-icons/tb";
import ThemeSettings from "../Components/ThemeSettings";
import ProductList from "../Components/ProductList";
import Chatbot from "../Components/Chatbot";

const Admin = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
    screenSize,
    displayChat,
    setDisplayChat,
  } = useContext(StateContext);

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  const sidebarStyle = {
    zIndex: screenSize <= 900 ? 10000 : undefined,
    position: "static", // Set position to fixed when screen size is less than 900px
  };

  console.log(currentMode);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex  relative  ">
        <div className="fixed right-4 bottom-20 ">
          <div content="Settings" position="Top">
            <button
              type="button"
              onClick={() => setDisplayChat(true)}
              style={{ background: currentColor, borderRadius: "50%" }}
              className="text-3xl text-white p-3 drop-shadow-2xl hover:bg-light-gray"
            >
              <TbMessageChatbot />
            </button>
          </div>
        </div>
        <div className="fixed right-4 bottom-4 ">
          <div content="Settings" position="Top">
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: "50%" }}
              className="text-3xl text-white p-3 drop-shadow-2xl hover:bg-light-gray"
            >
              <FiSettings />
            </button>
          </div>
        </div>
        <div className="fixed dark:bg-secondary-dark-bg bg-white z-[12]">
          {activeMenu && (
            <div className="fixed h-[100vh]" style={sidebarStyle}>
              <Sidebar />
            </div>
          )}
        </div>
        <div
          className={
            activeMenu
              ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen w-full  "
              : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
          }
        >
          <div className="bg-main-bg dark:bg-main-dark-bg  w-full">
            <div className="fixed w-full dark:bg-main-dark-bg bg-white z-[10]">
              <Navbar />
            </div>
          </div>
          <div className={`mt-4 px-4 `}>
            {themeSettings && <ThemeSettings />}

            {displayChat && <Chatbot />}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/addproduct" element={<AddProduct />} />
              <Route path="/teams" element={<Dashboard />} />
              <Route path="/productlist" element={<ProductList />} />

              <Route path="/insights" element={<Dashboard />} />
              <Route path="/settings" element={<Dashboard />} />
              {/* <Route path="/language" element={<Language />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  ); // Remove extra space
};

export default Admin;
