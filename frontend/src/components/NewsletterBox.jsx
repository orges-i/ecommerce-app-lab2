import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  }; // Funksioni për dergimin e form

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Abonohuni dhe merrni 20% zbritje
      </p>
      <p className="text-gray-400 mt-3">
        Mos humbisni ofertat dhe lajmet më të fundit direkt në emailin tuaj.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Shkruani emailin tuaj"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          ABONOHU
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
