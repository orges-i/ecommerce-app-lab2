import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  const adminUrl =
    import.meta.env.VITE_ADMIN_URL || "http://localhost:5173/";

  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-40" alt="Bleta Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Bleta është dyqani juaj online për modën më të fundit dhe stilin
            modern. Ne ofrojmë një gamë të gjerë veshjesh, këpucësh dhe
            aksesorësh për të gjithë.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">RRETH NESH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Ballina</li>
            <li>Rreth Nesh</li>
            <li>Dorëzimi</li>
            <li>Politika e Privatësisë</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">NA KONTAKTONI</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+043999899</li>
            <li>contact@bleta.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          &copy; {new Date().getFullYear()} Bleta. Të gjitha të drejtat e
          rezervuara.
          <a
            href={adminUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-3 text-xs text-gray-400 hover:text-gray-600"
          >
            Admin
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
