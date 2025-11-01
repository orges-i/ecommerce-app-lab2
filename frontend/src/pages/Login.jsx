import React from "react";
import { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Regjistrohu");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Hyr" ? (
        ""
      ) : (
        <input
          type="text"
          className="w-full px-3 py-2 border  border-gray-800"
          placeholder="Emri"
          required
        ></input>
      )}
      <input
        type="email"
        className="w-full px-3 py-2 border  border-gray-800"
        placeholder="Email Adresa"
        required
      ></input>
      <input
        type="password"
        className="w-full px-3 py-2 border  border-gray-800"
        placeholder="Fjalëkalimi"
        required
      ></input>

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Keni harruar fjalëkalimin?</p>
        {currentState === "Hyr" ? (
          <p
            onClick={() => setCurrentState("Regjistrohu")}
            className="cursor-pointer"
          >
            Krijo një llogari
          </p>
        ) : (
          <p onClick={() => setCurrentState("Hyr")} className="cursor-pointer">
            Hyr Këtu
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {currentState === "Hyr" ? "HYR" : "REGJISTROHU"}
      </button>
    </form>
  );
};

export default Login;
