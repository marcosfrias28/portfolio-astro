import astro from "../../../public/svg/astro.svg";
import tailwindcss from "../../../public/svg/tailwindcss.svg";
import html5 from "../../../public/svg/html5.svg";
import css from "../../../public/svg/css.svg";
import vite from "../../../public/svg/vite.svg";
import javascript from "../../../public/svg/javascript.svg";
import react from "../../../public/svg/react.svg";

export const progetti = [
  {
    id: "",
    className: "",
    projectImgUrl: "/src/components/Projects/images/coffeeListing.webp",
    title: "Coffee Listing",
    tecnologies: [
      { name: "ReactJS", svg: react },
      { name: "CSS3", svg: css },
      { name: "JavaScript", svg: javascript },
    ],
    description:
      "Realizza una chiamata Restful API e utilizza la risposta JSON con tutti i dati necessario per costruire il menu in questione. Uno dei primi progetti con ReactJS che mi ha fatto imparare sul 'Conditional Rendering' e l'utilizzo del useState e useEffect.",
    codeUrl: "https://github.com/marcosfrias28/simple-coffe-listing",
    previewUrl: "https://simple-coffe-listing-five.vercel.app/",
  },
  {
    id: "",
    className: "",
    projectImgUrl: "/src/components/Projects/images/GithubProfile.webp",
    title: "Github Profile",
    tecnologies: [
      { name: "HTML5", svg: html5 },
      { name: "CSS3", svg: css },
      { name: "JavaScript", svg: javascript },
    ],
    description: "Ricerca qualsiasi profilo",
    codeUrl: "https://github.com/marcosfrias28/GitHub-Profile-App",
    previewUrl: "https://git-hub-profile-app-azure.vercel.app/",
  },
  {
    id: "",
    className: "",
    projectImgUrl: "/src/components/Projects/images/MeteoCountry.webp",
    title: "Meteo Country",
    tecnologies: [
      { name: "ReactJS", svg: react },
      { name: "CSS3", svg: css },
      { name: "Vite", svg: vite },
      { name: "JavaScript", svg: javascript },
    ],
    description:
      "Meteo Country consente agli utenti di cercare informazioni dettagliate su un paese specifico. Realizza una doppia chiamata API che lavorando insieme ti permette di vedere Capitale, Popolazione e la Bandiera del paese, oltre al Meteo attuale della sua capitale.",
    codeUrl: "https://github.com/marcosfrias28/Meteo-Country-Vite-React-CSS",
    previewUrl: "https://meteo-country-vite-react-css.vercel.app/",
  },
  {
    id: "",
    className: "",
    projectImgUrl: "/src/components/Projects/images/brymarImmobiliaria.webp",
    title: "BryMar Immobiliaria",
    tecnologies: [
      { name: "Vite", svg: vite },
      { name: "ReactJS", svg: react },
      { name: "TailwindCSS", svg: tailwindcss },
      { name: "JavaScript", svg: javascript },
    ],
    description:
      "Richiesta per una futura immobiliaria. Utilizzo di useContext per creare uno stati globali. La lingua dell'intera pagina Web a scelta tra Spagnolo e Inglese facilmente modificabile dal oggetto che contiene tutti i testi. (Live Preview solo del 35% del progetto)",
    codeUrl: "",
    previewUrl: "https://brymar-immobiliaria.vercel.app/",
  },
  {
    id: "",
    className: "",
    projectImgUrl: "/src/components/Projects/images/portfolio.webp",
    title: "Portfolio",
    tecnologies: [
      { name: "Astro", svg: astro },
      { name: "TailwindCSS", svg: tailwindcss },
      { name: "JavaScript", svg: javascript },
      { name: "HTML5", svg: html5 },
      { name: "CSS3", svg: css },
    ],
    description:
      "Questo portfolio e' stato sviluppato utilizzando il framework Astro. Che mi e' particolarmente piaciuto, perche' conserva l'essenza di HTML, CSS e JavaScript, ma allo stesso tempo ti permette di aggiungere frameworks come TailwindCSS o React molto facilmente se dovessero servire.",
    codeUrl: "https://github.com/marcosfrias28/portfolio-astro",
    previewUrl: "https://portfolio-astro-eight-delta.vercel.app/",
  },
];
