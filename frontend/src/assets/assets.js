import p_img1 from "./p_img1.png";
import p_img2_1 from "./p_img2_1.png";
import p_img2_2 from "./p_img2_2.png";
import p_img2_3 from "./p_img2_3.png";
import p_img2_4 from "./p_img2_4.png";
import p_img3 from "./p_img3.png";
import p_img4 from "./p_img4.png";
import p_img5 from "./p_img5.png";
import p_img6 from "./p_img6.png";
import p_img7 from "./p_img7.png";
import p_img8 from "./p_img8.png";
import p_img9 from "./p_img9.png";
import p_img10 from "./p_img10.png";
import p_img11 from "./p_img11.png";
import p_img12 from "./p_img12.png";
import p_img13 from "./p_img13.png";
import p_img14 from "./p_img14.png";
import p_img15 from "./p_img15.png";
import p_img16 from "./p_img16.png";
import p_img17 from "./p_img17.png";
import p_img18 from "./p_img18.png";
import p_img19 from "./p_img19.png";
import p_img20 from "./p_img20.png";
import p_img21 from "./p_img21.png";
import p_img22 from "./p_img22.png";
import p_img23 from "./p_img23.png";
import p_img24 from "./p_img24.png";
import p_img25 from "./p_img25.png";
import p_img26 from "./p_img26.png";
import p_img27 from "./p_img27.png";
import p_img28 from "./p_img28.png";
import p_img29 from "./p_img29.png";
import p_img30 from "./p_img30.png";
import p_img31 from "./p_img31.png";
import p_img32 from "./p_img32.png";
import p_img33 from "./p_img33.png";
import p_img34 from "./p_img34.png";
import p_img35 from "./p_img35.png";
import p_img36 from "./p_img36.png";
import p_img37 from "./p_img37.png";
import p_img38 from "./p_img38.png";
import p_img39 from "./p_img39.png";
import p_img40 from "./p_img40.png";
import p_img41 from "./p_img41.png";
import p_img42 from "./p_img42.png";
import p_img43 from "./p_img43.png";
import p_img44 from "./p_img44.png";
import p_img45 from "./p_img45.png";
import p_img46 from "./p_img46.png";
import p_img47 from "./p_img47.png";
import p_img48 from "./p_img48.png";
import p_img49 from "./p_img49.png";
import p_img50 from "./p_img50.png";
import p_img51 from "./p_img51.png";
import p_img52 from "./p_img52.png";

import logo from "./logo.png";
import hero_img from "./hero_img.png";
import cart_icon from "./cart_icon.png";
import bin_icon from "./bin_icon.png";
import dropdown_icon from "./dropdown_icon.png";
import exchange_icon from "./exchange_icon.png";
import profile_icon from "./profile_icon.png";
import quality_icon from "./quality_icon.png";
import search_icon from "./search_icon.png";
import star_dull_icon from "./star_dull_icon.png";
import star_icon from "./star_icon.png";
import support_img from "./support_img.png";
import menu_icon from "./menu_icon.png";
import about_img from "./about_img.png";
import contact_img from "./contact_img.png";
import razorpay_logo from "./razorpay_logo.png";
import stripe_logo from "./stripe_logo.png";
import cross_icon from "./cross_icon.png";

export const assets = {
  logo,
  hero_img,
  cart_icon,
  dropdown_icon,
  exchange_icon,
  profile_icon,
  quality_icon,
  search_icon,
  star_dull_icon,
  star_icon,
  bin_icon,
  support_img,
  menu_icon,
  about_img,
  contact_img,
  razorpay_logo,
  stripe_logo,
  cross_icon,
};

export const products = [
  {
    _id: "aaaaa",
    name: "Bluzë pambuku me jakë rreth për femra",
    description:
      "Një bluzë e lehtë e endur, shumë e rehatshme, me jakë rreth dhe mëngë të shkurtra. Mund të vishet si veshje e brendshme ose e jashtme për përdorim të përditshëm.",
    price: 100,
    image: [p_img1],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    bestseller: true,
  },
  {
    _id: "aaaab",
    name: "Bluzë pambuku me jakë rreth për meshkuj",
    description:
      "Një bluzë e lehtë dhe e butë, e endur, me jakë rreth dhe mëngë të shkurtra. E përkryer për stil casual ose sportiv.",
    price: 200,
    image: [p_img2_1, p_img2_2, p_img2_3, p_img2_4],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716621345448,
    bestseller: true,
  },
  {
    _id: "aaaac",
    name: "Bluzë pambuku me jakë rreth për vajza",
    description:
      "Një bluzë e lehtë dhe e butë, me jakë rreth dhe mëngë të shkurtra, ideale për përdorim të përditshëm dhe aktivitete të fëmijëve.",
    price: 220,
    image: [p_img3],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "L", "XL"],
    date: 1716234545448,
    bestseller: true,
  },
  {
    _id: "aaaad",
    name: "Bluzë pambuku me jakë rreth për meshkuj",
    description:
      "Bluzë praktike dhe e rehatshme prej pambuku, me dizajn minimalist dhe jakë rreth. E përshtatshme për çdo ditë.",
    price: 110,
    image: [p_img4],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "XXL"],
    date: 1716621345448,
    bestseller: true,
  },
  {
    _id: "aaaae",
    name: "Bluzë pambuku me jakë rreth për femra",
    description:
      "Bluzë e butë dhe e lehtë, me jakë rreth dhe dizajn klasik, komode për stil casual.",
    price: 130,
    image: [p_img5],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716622345448,
    bestseller: true,
  },
  {
    _id: "aaaaf",
    name: "Bluzë pambuku me jakë rreth për vajza",
    description:
      "Një bluzë e rehatshme me mëngë të shkurtra dhe jakë rreth, e bërë nga material i butë që përshtatet për lëvizje të fëmijëve.",
    price: 140,
    image: [p_img6],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "L", "XL"],
    date: 1716623423448,
    bestseller: true,
  },
  {
    _id: "aaaag",
    name: "Pantallona të ngushta me prerje të drejtë për meshkuj",
    description:
      "Pantallona të rehatshme me dizajn klasik, të përshtatshme për veshje casual ose zyrtare.",
    price: 190,
    image: [p_img7],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["S", "L", "XL"],
    date: 1716621542448,
    bestseller: false,
  },
  {
    _id: "aaaah",
    name: "Bluzë pambuku me jakë rreth për meshkuj",
    description:
      "Bluzë e qëndrueshme dhe e lehtë, me jakë rreth dhe mëngë të shkurtra, ideale për veshje të përditshme.",
    price: 140,
    image: [p_img8],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716622345448,
    bestseller: false,
  },
  {
    _id: "aaaai",
    name: "Bluzë pambuku me jakë rreth për vajza",
    description:
      "Bluzë e butë dhe shumë e lehtë për fëmijët. Me jakë rreth dhe mëngë të shkurtra, perfekte për ditë të ngrohta.",
    price: 100,
    image: [p_img9],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716621235448,
    bestseller: false,
  },
  {
    _id: "aaaaj",
    name: "Pantallona të ngushta me prerje të drejtë për meshkuj",
    description:
      "Pantallona të dizajnuara për rehati gjatë gjithë ditës, të kombinuara lehtë me çdo stil.",
    price: 110,
    image: [p_img10],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["S", "L", "XL"],
    date: 1716622235448,
    bestseller: false,
  },
  {
    _id: "aaaak",
    name: "Bluzë pambuku me jakë rreth për meshkuj",
    description:
      "Një bluzë pambuku me material të butë dhe të qëndrueshëm, me dizajn të thjeshtë dhe jakë rreth.",
    price: 120,
    image: [p_img11],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1716623345448,
    bestseller: false,
  },
  {
    _id: "aaaal",
    name: "Bluzë pambuku me jakë rreth për meshkuj",
    description:
      "Bluzë e lehtë e bërë nga pambuk cilësor, me pamje klasike dhe mëngë të shkurtra.",
    price: 150,
    image: [p_img12],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716624445448,
    bestseller: false,
  },
  {
    _id: "aaaam",
    name: "Bluzë pambuku me jakë rreth për femra",
    description:
      "Një bluzë e butë dhe shumë e rehatshme, ideale për veshje ditore ose casual, me jakë rreth dhe prerje të lehtë.",
    price: 130,
    image: [p_img13],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716625545448,
    bestseller: false,
  },
  {
    _id: "aaaan",
    name: "Bluzë pambuku me jakë rreth për djem",
    description:
      "Një bluzë e dizajnuar për fëmijë, e lehtë dhe e butë, që ofron rehati gjatë lojës dhe aktivitetit.",
    price: 160,
    image: [p_img14],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716626645448,
    bestseller: false,
  },
  {
    _id: "aaaao",
    name: "Pantallona të ngushta me prerje të drejtë për meshkuj",
    description:
      "Pantallona të stilit modern me material cilësor, të përshtatshme si për stil casual ashtu edhe për kombinime elegante.",
    price: 140,
    image: [p_img15],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716627745448,
    bestseller: false,
  },
  {
    _id: "aaaap",
    name: "Bluzë pambuku me jakë rreth për vajza",
    description:
      "Një bluzë e butë, e lehtë dhe e rehatshme, me jakë rreth dhe dizajn të thjeshtë, e përshtatshme për përdorim të përditshëm.",
    price: 170,
    image: [p_img16],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716628845448,
    bestseller: false,
  },
  {
    _id: "aaaaq",
    name: "Pantallona të ngushta me prerje të drejtë për meshkuj",
    description:
      "Pantallona praktike dhe të rehatshme me stil modern, të përshtatshme për veshje casual ose gjysmë-formale.",
    price: 150,
    image: [p_img17],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716629945448,
    bestseller: false,
  },
  {
    _id: "aaaar",
    name: "Bluzë pambuku me jakë rreth për djem",
    description:
      "Një bluzë e lehtë dhe e frymëzuar nga stili sportiv, me jakë rreth dhe material të butë pambuku.",
    price: 180,
    image: [p_img18],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716631045448,
    bestseller: false,
  },
  {
    _id: "aaaas",
    name: "Bluzë pambuku me jakë rreth për djem",
    description:
      "Bluzë e rehatshme dhe shumë funksionale për fëmijët, me jakë rreth dhe mëngë të shkurtra, perfekte për çdo aktivitet.",
    price: 160,
    image: [p_img19],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716632145448,
    bestseller: false,
  },
  {
    _id: "aaaat",
    name: "Pantallona palazzo me rrip beli për femra",
    description:
      "Pantallona të gjera, super komode, me rrip në bel dhe dizajn elegant. Ideale për veshje verore ose për evente të lehta.",
    price: 190,
    image: [p_img20],
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716633245448,
    bestseller: false,
  },
  {
    _id: "aaaau",
    name: "Xhaketë e lirshme me zinxhir për femra",
    description:
      "Xhaketë e rehatshme me zinxhir të përparmë, e përshtatshme për temperaturë të freskët dhe stil casual.",
    price: 170,
    image: [p_img21],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634345448,
    bestseller: false,
  },
  {
    _id: "aaaav",
    name: "Pantallona palazzo me rrip beli për femra",
    description:
      "Pantallona të gjera dhe elegante me material të butë, të pajisura me rrip beli për formë dhe rehati.",
    price: 200,
    image: [p_img22],
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716635445448,
    bestseller: false,
  },
  {
    _id: "aaaaw",
    name: "Bluzë pambuku me jakë rreth për djem",
    description:
      "Bluzë e thjeshtë dhe shumë funksionale për fëmijët, perfekte për veshje ditore dhe aktivitete sportive.",
    price: 180,
    image: [p_img23],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716636545448,
    bestseller: false,
  },
  {
    _id: "aaaax",
    name: "Bluzë pambuku me jakë rreth për djem",
    description:
      "Një bluzë komode me dizajn minimal, prej pambuku të butë dhe të frymëmarrshëm, e përshtatshme për çdo ditë.",
    price: 210,
    image: [p_img24],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716637645448,
    bestseller: false,
  },
  {
    _id: "aaaay",
    name: "Bluzë pambuku me jakë rreth për vajza",
    description:
      "Bluzë e butë dhe e rehatshme, ideale për stilin e përditshëm të fëmijëve, me jakë rreth dhe material cilësor.",
    price: 190,
    image: [p_img25],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716638745448,
    bestseller: false,
  },
  {
    _id: "aaaaz",
    name: "Xhaketë e lirshme me zinxhir për femra",
    description:
      "Xhaketë funksionale dhe e ngrohtë me mbyllje me zinxhir, dizajnuar për stil të përditshëm dhe mot të freskët.",
    price: 220,
    image: [p_img26],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845448,
    bestseller: false,
  },
  {
    _id: "aaaba",
    name: "Bluzë pambuku me jakë rreth për vajza",
    description:
      "Bluzë e lehtë dhe shumë e butë për fëmijët, me dizajn klasik që përshtatet për çdo stinë.",
    price: 200,
    image: [p_img27],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716640945448,
    bestseller: false,
  },
  {
    _id: "aaabb",
    name: "Xhaketë xhins e ngushtë për meshkuj",
    description:
      "Xhaketë xhins me model modern dhe materiale të qëndrueshme, perfekte për stil casual.",
    price: 230,
    image: [p_img28],
    category: "Men",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716642045448,
    bestseller: false,
  },
  {
    _id: "aaabc",
    name: "Bluzë pambuku me jakë rreth për femra",
    description:
      "Bluzë me prerje klasike dhe material pambuku të butë, e bërë për rehati gjatë gjithë ditës.",
    price: 210,
    image: [p_img29],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716643145448,
    bestseller: false,
  },
  {
    _id: "aaabd",
    name: "Bluzë pambuku me jakë rreth për vajza",
    description:
      "Një bluzë e bukur dhe komode për vajza, me material të butë dhe mëngë të shkurtra.",
    price: 240,
    image: [p_img30],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716644245448,
    bestseller: false,
  },

  {
    _id: "aaabe",
    name: "Bluzë pambuku me jakë rreth për meshkuj",
    description:
      "Bluzë e bërë nga pambuk cilësor, me jakë rreth dhe dizajn minimalist që përshtatet me çdo stil.",
    price: 220,
    image: [p_img31],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716645345448,
    bestseller: false,
  },
  {
    _id: "aaabf",
    name: "Bluzë pambuku me jakë rreth për meshkuj",
    description:
      "Një bluzë e butë dhe e rehatshme, me pamje klasike dhe material të frymëmarrshëm pambuku.",
    price: 250,
    image: [p_img32],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716646445448,
    bestseller: false,
  },
  {
    _id: "aaabg",
    name: "Bluzë pambuku me jakë rreth për vajza",
    description:
      "Bluzë e lehtë dhe e butë, perfekte për veshje të përditshme, me dizajn të thjeshtë dhe ngjyra të këndshme.",
    price: 230,
    image: [p_img33],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716647545448,
    bestseller: false,
  },
  {
    _id: "aaabh",
    name: "Bluzë pambuku me jakë rreth për femra",
    description:
      "Një bluzë e rehatshme dhe e butë e bërë nga pambuk cilësor, me dizajn klasik që përshtatet për çdo rast.",
    price: 260,
    image: [p_img34],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716648645448,
    bestseller: false,
  },
  {
    _id: "aaabi",
    name: "Xhaketë e lirshme me zinxhir për femra",
    description:
      "Xhaketë e ngrohtë dhe praktike me mbyllje me zinxhir, ideale për ditët e ftohta dhe stil të përditshëm.",
    price: 240,
    image: [p_img35],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716649745448,
    bestseller: false,
  },
  {
    _id: "aaabj",
    name: "Xhaketë e lirshme me zinxhir për femra",
    description:
      "Xhaketë cilësore me material të ngrohtë, mbyllje me zinxhir dhe dizajn modern për stil të ftohtë dimëror.",
    price: 270,
    image: [p_img36],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716650845448,
    bestseller: false,
  },
  {
    _id: "aaabk",
    name: "Bluzë pambuku me jakë rreth për femra",
    description:
      "Bluzë universale prej pambuku, elegante dhe shumë e rehatshme, e krijuar për përdorim të përditshëm.",
    price: 250,
    image: [p_img37],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716651945448,
    bestseller: false,
  },
  {
    _id: "aaabl",
    name: "Bluzë pambuku me jakë rreth për meshkuj",
    description:
      "Bluzë e thjeshtë dhe e butë, me dizajn minimal dhe material pambuku që ofron rehati të lartë.",
    price: 280,
    image: [p_img38],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716653045448,
    bestseller: false,
  },
  {
    _id: "aaabm",
    name: "Këmishë pambuku me printim për meshkuj",
    description:
      "Këmishë e lehtë pambuku me printim elegant, e përshtatshme për stil casual ose për evente të lehta.",
    price: 260,
    image: [p_img39],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716654145448,
    bestseller: false,
  },
  {
    _id: "aaabn",
    name: "Xhaketë xhins e ngushtë për meshkuj",
    description:
      "Xhaketë xhins e dizajnuar me stil modern, me material të fortë dhe të qëndrueshëm për veshje të përditshme.",
    price: 290,
    image: [p_img40],
    category: "Men",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716655245448,
    bestseller: false,
  },
  {
    _id: "aaabo",
    name: "Bluzë pambuku me jakë rreth për meshkuj",
    description:
      "Një bluzë e cilësisë së lartë me jakë rreth dhe material të butë, e lehtë për t'u kombinuar me çdo veshje.",
    price: 270,
    image: [p_img41],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716656345448,
    bestseller: false,
  },
  {
    _id: "aaabp",
    name: "Bluzë pambuku me jakë rreth për djem",
    description:
      "Bluzë e rehatshme dhe e lehtë për fëmijë, me dizajn klasik dhe material pambuku që ofron frymëmarrje.",
    price: 300,
    image: [p_img42],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716657445448,
    bestseller: false,
  },
  {
    _id: "aaabq",
    name: "Pantallona të ngushta për fëmijë",
    description:
      "Pantallona të rehatshme për fëmijë me dizajn praktik dhe material të butë për lëvizje të lirshme.",
    price: 280,
    image: [p_img43],
    category: "Kids",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716658545448,
    bestseller: false,
  },
  {
    _id: "aaabr",
    name: "Xhaketë e lirshme me zinxhir për femra",
    description:
      "Xhaketë e ngrohtë dimri me material të butë dhe mbyllje me zinxhir, ideale për ditët e ftohta.",
    price: 310,
    image: [p_img44],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716659645448,
    bestseller: false,
  },
  {
    _id: "aaabs",
    name: "Xhaketë xhins e ngushtë për meshkuj",
    description:
      "Një xhaketë xhins moderne dhe e qëndrueshme, perfekte për veshje të përditshme dhe kombinime casual.",
    price: 290,
    image: [p_img45],
    category: "Men",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716660745448,
    bestseller: false,
  },
  {
    _id: "aaabt",
    name: "Xhaketë xhins e ngushtë për meshkuj",
    description:
      "Xhaketë xhins cilësore me prerje të ngushtë, me material të fortë që siguron qëndrueshmëri dhe stil modern.",
    price: 320,
    image: [p_img46],
    category: "Men",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716661845448,
    bestseller: false,
  },

  {
    _id: "aaabu",
    name: "Pantallona të ngushta për fëmijë",
    description:
      "Pantallona të buta dhe të rehatshme për fëmijë, me dizajn të thjeshtë dhe material që lejon lëvizje të lirshme gjatë ditës.",
    price: 300,
    image: [p_img47],
    category: "Kids",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716662945448,
    bestseller: false,
  },
  {
    _id: "aaabv",
    name: "Xhaketë xhins e ngushtë për meshkuj",
    description:
      "Xhaketë xhins moderne me prerje të ngushtë, ideale për stil streetwear dhe veshje të përditshme.",
    price: 330,
    image: [p_img48],
    category: "Men",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716664045448,
    bestseller: false,
  },
  {
    _id: "aaabw",
    name: "Pantallona të ngushta për fëmijë",
    description:
      "Pantallona të rehatshme me material fleksibël për fëmijë, të përshtatshme për çdo aktivitet dhe stil casual.",
    price: 310,
    image: [p_img49],
    category: "Kids",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716665145448,
    bestseller: false,
  },
  {
    _id: "aaabx",
    name: "Pantallona të ngushta për fëmijë",
    description:
      "Pantallona praktike për fëmijë me material të butë, të qëndrueshme dhe perfekte për veshje të përditshme.",
    price: 340,
    image: [p_img50],
    category: "Kids",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716666245448,
    bestseller: false,
  },
  {
    _id: "aaaby",
    name: "Xhaketë e lirshme me zinxhir për femra",
    description:
      "Xhaketë elegante dhe e ngrohtë dimri, me mbyllje me zinxhir dhe material të butë që siguron rehati dhe stil.",
    price: 320,
    image: [p_img51],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716667345448,
    bestseller: false,
  },
  {
    _id: "aaabz",
    name: "Xhaketë xhins e ngushtë për meshkuj",
    description:
      "Xhaketë premium xhins me prerje të ngushtë dhe dizajn modern, e përkryer për stile urbane dhe kombinime casual.",
    price: 350,
    image: [p_img52],
    category: "Men",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716668445448,
    bestseller: false,
  },
];

export default assets;
