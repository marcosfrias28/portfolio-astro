import astroLogo from "../../../public/svg/astro.svg";
import tailwindcssLogo from "../../../public/svg/tailwindcss.svg";
import html5Logo from "../../../public/svg/html5.svg";
import cssLogo from "../../../public/svg/css.svg";
import viteLogo from "../../../public/svg/vite.svg";
import jsLogo from "../../../public/svg/javascript.svg";
import reactLogo from "../../../public/svg/react.svg";

export const TECNOLOGIES = {
  react: {
    name: "ReactJS",
    svg: reactLogo,
    color: "rgba(121, 214, 250, 0.5)",
  },
  css: { name: "CSS3", svg: cssLogo, color: "rgba(0, 100, 255, 0.5)" },
  html: { name: "HTML5", svg: html5Logo, color: "rgba(255, 87, 51, 0.5)" },
  javascript: {
    name: "JavaScript",
    svg: jsLogo,
    color: "rgba(247, 222, 30, 0.5)",
  },
  vite: {
    name: "Vite",
    svg: viteLogo,
    color: "rgba(190, 52, 254, 0.3)",
  },
  tailwind: {
    name: "Tailwind",
    svg: tailwindcssLogo,
    color: "rgba(0, 179, 182, .5)",
  },
  astro: { name: "Astro", svg: astroLogo, color: "rgba(0, 179, 182, .5)" },
};

const { react, css, html, javascript, vite, tailwind, astro } = TECNOLOGIES;

export const PROGETTI = [
  {
    id: "",
    className: "",
    projectImgUrl: "/images/coffeeListing.webp",
    title: "Coffee Listing",
    subtitle: "",
    tecnologies: [react, css, javascript],
    description:
      "Realizza una chiamata Restful API e utilizza la risposta JSON con tutti i dati necessario per costruire il menu in questione. Uno dei primi progetti con ReactJS che mi ha fatto imparare sul 'Conditional Rendering' e l'utilizzo del useState e useEffect.",
    codeUrl: "https://github.com/marcosfrias28/simple-coffe-listing",
    previewUrl: "https://simple-coffe-listing-five.vercel.app/",
  },
  {
    id: "",
    className: "",
    projectImgUrl: "/images/githubProfile.webp",
    title: "Github Profile",
    subtitle: "",
    tecnologies: [html, css, javascript],
    description: "Ricerca qualsiasi profilo",
    codeUrl: "https://github.com/marcosfrias28/GitHub-Profile-App",
    previewUrl: "https://git-hub-profile-app-azure.vercel.app/",
  },
  {
    id: "",
    className: "",
    projectImgUrl: "/images/MeteoCountry.webp",
    title: "Meteo Country",
    subtitle: "",
    tecnologies: [react, css, vite, javascript],
    description:
      "Meteo Country consente agli utenti di cercare informazioni dettagliate su un paese specifico. Realizza una doppia chiamata API che lavorando insieme ti permette di vedere Capitale, Popolazione e la Bandiera del paese, oltre al Meteo attuale della sua capitale.",
    codeUrl: "https://github.com/marcosfrias28/Meteo-Country-Vite-React-CSS",
    previewUrl: "https://meteo-country-vite-react-css.vercel.app/",
  },
  {
    id: "",
    className: "",
    projectImgUrl: "/images/brymarImmobiliaria.webp",
    title: "BryMar Immobiliaria",
    subtitle: "",
    tecnologies: [vite, react, tailwind, javascript],
    description:
      "Richiesta per una futura immobiliaria. Utilizzo di useContext per creare uno stati globali. La lingua dell'intera pagina Web a scelta tra Spagnolo e Inglese facilmente modificabile dal oggetto che contiene tutti i testi. (Live Preview solo del 35% del progetto)",
    codeUrl: "",
    previewUrl: "https://brymar-immobiliaria.vercel.app/",
  },
  {
    id: "",
    className: "",
    projectImgUrl: "/images/portfolio.webp",
    title: "Portfolio",
    subtitle: "",
    tecnologies: [astro, tailwind, javascript, html, css],
    description:
      "Questo portfolio e' stato sviluppato utilizzando il framework Astro. Che mi e' particolarmente piaciuto, perche' conserva l'essenza di HTML, CSS e JavaScript, ma allo stesso tempo ti permette di aggiungere frameworks come TailwindCSS o React molto facilmente se dovessero servire.",
    codeUrl: "https://github.com/marcosfrias28/portfolio-astro",
    previewUrl: "https://portfolio-astro-eight-delta.vercel.app/",
  },
];
