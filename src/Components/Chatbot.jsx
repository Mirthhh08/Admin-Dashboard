import React, { useState } from "react";
import { StateContext } from "../Context/StateContext";
import { MdOutlineCancel } from "react-icons/md";
import { useContext } from "react";
const Chatbot = () => {
  const { displayChat, setDisplayChat } = useContext(StateContext);

  const [open, setOpen] = useState(true);

  const [messages, setMessages] = useState([]);
  const [options, setOptions] = useState([
    {
      id: 1,
      text: "Product Related",
      subOptions: ["How to add a product?", "How to edit a product?"],
    },
    {
      id: 2,
      text: "Theme Related",
      subOptions: ["How to change theme color?", "How to change font?"],
    },
  ]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedSubOption, setSelectedSubOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setSelectedSubOption(null);
  };

  const handleSubOptionClick = (subOption) => {
    if (subOption === "Back") {
      setSelectedOption(null);
      setSelectedSubOption(null);
      return;
    }
    setSelectedSubOption(subOption);
    const newMessage = {
      sender: "user",
      text: subOption,
    };
    setMessages([...messages, newMessage]);
    setTimeout(() => {
      const botResponse = getBotResponse(subOption);
      setMessages([...messages, { sender: "bot", text: botResponse }]);
    }, 500);
  };

  const getBotResponse = (input) => {
    // Example rule-based responses
    switch (input.toLowerCase()) {
      case "how to add a product?":
        return 'To add a product, navigate to the "Products" section and click on the "Add Product" button.';
      case "how to edit a product?":
        return 'To edit a product, go to the "Products" section, select the product you want to edit, and click on the "Edit" button.';
      case "how to change theme color?":
        return 'To change the theme color, go to the "Theme" section, select the color you want to apply, and save the changes.';
      case "how to change font?":
        return 'To change the font, go to the "Theme" section, select the font style you want to apply, and save the changes.';
      default:
        return "I'm sorry, I didn't understand that. Please ask a different question.";
    }
  };

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0 z-10 ">
      <div className="float-right h-screen dark:text-gray-200  bg-white dark:bg-[#484B52] w-[400px]">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Settings</p>

          <button
            type="button"
            onClick={() => setDisplayChat(false)}
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="max-w-md mx-auto shadow-lg">
          <div className="bg-blue-500 text-white py-3 px-4">
            <h2 className="text-lg font-semibold">Chat with Us</h2>
          </div>
          <div
            className="px-4 py-3 bg-gray-100 text-sm overflow-y-auto"
            style={{ maxHeight: "300px" }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`py-1 ${
                  message.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block px-2 py-1 rounded-lg ${
                    message.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-black" 
                  }`}
                >
                  {message.text}
                </span>
              </div>
            ))}
          </div>
          <div className="px-4 py-2 text-gray-600 bg-gray-200">
            {selectedOption === null ? (
              <ul>
                {options.map((option) => (
                  <li
                    key={option.id}
                    onClick={() => handleOptionClick(option)}
                    className="cursor-pointer hover:underline"
                  >
                    {option.text}
                  </li>
                ))}
              </ul>
            ) : (
              <ul>
                <li
                  onClick={() => handleSubOptionClick("Back")}
                  className="cursor-pointer hover:underline"
                >
                  Back
                </li>
                {selectedOption.subOptions.map((subOption, index) => (
                  <li
                    key={index}
                    onClick={() => handleSubOptionClick(subOption)}
                    className="cursor-pointer hover:underline"
                  >
                    {subOption}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
