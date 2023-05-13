import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Modal from "./components/NestedModal";
import SubmitModal from "./components/SubmitModal";

const ProblemPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // const handleSubmit = (event) => {
  //    setInputValue(event.target.value)


  //    console.log(inputValue)

  //   if(inputValue == 50)
  //   {
  //     setShowModal(true);
  //   }
  // };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="main">
          <div className="left-side">
            <h2>Problem Statement</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="right-side">
            <img src="https://via.placeholder.com/400x400" alt="problem" />
          </div>
        </div>
        <div className="bottom-left">
          <Modal />
        </div>
        <div className="bottom-right">
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <div>
           {
            setShowModal && <SubmitModal value = {inputValue}/>
           }
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProblemPage;
