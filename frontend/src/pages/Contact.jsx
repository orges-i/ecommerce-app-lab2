import React from "react";
import Title from "../components/Title";
import assets from "../assets/assets";
import Newsletter from "../components/NewsletterBox";
const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"NA"} text2={"KONTAKTONI"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt="contactphoto"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Dyqani ynë</p>
          <p className="text-gray-500">
            Rr. Agim Ramadani <br /> Ndërtesa 350, Prishtinë, Kosovë
          </p>
          <p className="text-gray-500">
            Tel: +383 44 123 765 <br /> Email: bleta@ecommerce.com
          </p>
          <p className="font-semibold text-xl text-gray-600">Apliko për Punë</p>
          <p className="text-gray-500">Mëso më shumë rreth konkursit tonë</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Shiko Pozitat
          </button>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default Contact;
