import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"RRETH"} text2={"NESH"} />
      </div>

      <div className="my-1 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt="aboutimage"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Mirë se vini në Bleta — destinacioni juaj online për modë, stil dhe
            elegancë. Në Bleta besojmë se moda është mënyra më e bukur për të
            shprehur veten, ndaj çdo koleksion ynë është krijuar për t’ju
            ndihmuar të ndiheni unikë, të sigurt dhe të frymëzuar çdo ditë. Ne
            bashkojmë cilësinë, trendet moderne dhe çmimet e arsyeshme, për të
            sjellë një përvojë të re të blerjeve online. Çdo produkt zgjidhet me
            kujdes, duke garantuar materiale të qëndrueshme dhe dizajne
            bashkëkohore për çdo stil — nga veshjet e përditshme deri te ato
            elegante.
          </p>
          <p>
            Në Bleta, përkushtimi ynë është të sjellim cilësi, stil dhe
            besueshmëri në çdo produkt. Çdo koleksion përzgjidhet me kujdes për
            të ndjekur trendet ndërkombëtare dhe për t’u përshtatur me stilin
            tuaj personal. Ne besojmë se moda nuk është vetëm veshje, por një
            mënyrë jetese. Faleminderit që zgjodhët Bleta — aty ku stili dhe
            cilësia takohen në çdo porosi.
          </p>
          <b className="text-gray-800">Misioni Ynë</b>
          <p>
            Misioni ynë në Bleta është të ofrojmë një përvojë unike të blerjeve
            online, ku stili, cilësia dhe komoditeti bashkohen në një vend. Ne
            synojmë t’u sjellim klientëve tanë produkte të përzgjedhura me
            kujdes, trende bashkëkohore dhe shërbim të besueshëm — duke e bërë
            çdo blerje një përvojë të këndshme dhe të sigurt.
          </p>
        </div>
      </div>

      <div className="text-xl py-6">
        <Title text1={"PSE TË NA"} text2={"ZGJEDHËSH"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Siguria e Cilësisë:</b>
          <p className="text-gray-600">
            Produkte të besueshme dhe të qëndrueshme, me kontroll të rreptë të
            cilësisë.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Komoditeti:</b>
          <p className="text-gray-600">
            Blerje e thjeshtë, pagesa të sigurta dhe dërgesa të shpejtë.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Shërbim i Jashtëzakonshëm për Klientët:</b>
          <p className="text-gray-600">
            Mbështetje miqësore dhe e shpejtë për çdo pyetje ose problem.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
