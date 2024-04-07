import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const StateContext = createContext();

const initialState = {
  userProfile: false,
  notification: false,
  language: false,
};

const ContextProvider = ({ children }) => {
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [display, setDisplay] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [user, setUser] = useState(null);
  const [displayChat, setDisplayChat] = useState(false);

  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "hin" : "en";
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };

  console.log(user);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });

  const contextValue = {
    handleChangeLanguage,
    currentLanguage,
    user,
    setUser,
    displayChat,
    setDisplayChat,
    signUp,
    setSignUp,
    display,
    setDisplay,
    currentColor,
    currentMode,
    activeMenu,
    screenSize,
    setScreenSize,
    handleClick,
    isClicked,
    initialState,
    setIsClicked,
    setActiveMenu,
    setCurrentColor,
    setCurrentMode,
    setMode,
    setColor,
    themeSettings,
    setThemeSettings,
  };
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
};

export default ContextProvider;
