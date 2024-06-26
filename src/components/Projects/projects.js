import astroLogo from "/src/assets/astro.svg";
import tailwindcssLogo from "/src/assets/tailwindcss.svg";
import html5Logo from "/src/assets/html5.svg";
import cssLogo from "/src/assets/css.svg";
import viteLogo from "/src/assets/vite.svg";
import jsLogo from "/src/assets/javascript.svg";
import reactLogo from "/src/assets/react.svg";

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
    id: crypto.randomUUID(),
    projectImgUrl: "/src/assets/usnplashCollection.webp",
    title: "UnsplashBox",
    tecnologies: [react, tailwind, astro],
    description:
      "UnsplashBox è un'app web intuitiva che permette di cercare e scaricare qualsiasi genere di fotografie, scattate da persone di tutto il mondo. Gestione dello stato globale con Zustand, utilizzo di Astro e React per la generazione di pagine statiche e dinamiche, e stili con TailwindCSS per un design moderno e responsive.",
    codeUrl: "https://github.com/marcosfrias28/unsplash-collection",
    previewUrl: "https://unsplash-collection-sable.vercel.app/",
  },
  {
    id: crypto.randomUUID(),
    projectImgUrl: "/src/assets/shortlynker.webp",
    title: "Shortlynker",
    tecnologies: [react, tailwind, astro],
    description:
      "Shortlynker è un'app web intuitiva che permette di accorciare URL in modo veloce e pratico, ideale per facilitare la condivisione online. Questo progetto mette in luce le mie competenze nel creare soluzioni efficienti per migliorare l'esperienza degli utenti sul web.",
    codeUrl: "https://github.com/marcosfrias28/url-shortening-api",
    previewUrl: "https://shortlynker.vercel.app/",
  },
  {
    id: crypto.randomUUID(),
    projectImgUrl: "/src/assets/brymarImmobiliaria.webp",
    title: "BryMar Immobiliaria",
    tecnologies: [vite, react, tailwind, javascript],
    description:
      "Richiesta per un sito immobiliare all'avanguardia. Sfrutta useContext per gestire stati globali, consentendo una facile modifica della lingua tra Spagnolo e Inglese attraverso un oggetto contenente tutti i testi. La live preview offre una visione del 35% del progetto completo, evidenziando le sue funzionalità principali.",
    codeUrl: "",
    previewUrl: "https://brymar-immobiliaria.vercel.app/",
  },
  {
    id: crypto.randomUUID(),
    projectImgUrl: "/src/assets/coffeeListing.webp",
    title: "Coffee Listing",
    tecnologies: [react, css, javascript],
    description:
      "L'app utilizza una chiamata API Restful per ottenere un JSON con i dati necessari per creare il menu del caffè. È stato uno dei miei primi progetti con ReactJS, focalizzato sul Conditional Rendering e sull'uso di useState ed useEffect per gestire lo stato e gli effetti. Quest'esperienza è stata fondamentale nel mio apprendimento di React per creare interfacce reattive e dinamiche.",
    codeUrl: "https://github.com/marcosfrias28/simple-coffe-listing",
    previewUrl: "https://simple-coffe-listing-five.vercel.app/",
  },
  {
    id: crypto.randomUUID(),
    projectImgUrl: "/src/assets/translateappi.webp",
    title: "Translate APPi",
    tecnologies: [react, tailwind, javascript, vite],
    description:
      "TranslateAPPI sviluppata con JavaScript, Vite e ReactJS, stili tailwindcss e API Google Translation per dare traduzioni precise, garantendo un'esperienza utente fluida e moderna. Sfrutta inoltre le funzionalità avanzate di React come useContext, useReducer, useState e useEffect per una gestione avanzata dello stato e delle interazioni utente.",
    codeUrl: "https://github.com/marcosfrias28/Translate-app",
    previewUrl: "https://translate-appi.vercel.app/",
  },
  {
    id: crypto.randomUUID(),
    projectImgUrl: "/src/assets/LandingAstro.webp",
    title: "Landing Page",
    tecnologies: [astro, tailwind, html],
    description:
      "Landing page responsive creata con Astro e TailwindCSS per un design ottimizzato su tutti i dispositivi. Esperienza utente fluida e prestazioni rapide su desktop e mobile.",
    codeUrl: "https://github.com/marcosfrias28/landing-page-astro",
    previewUrl: "https://landing-page-astro-green.vercel.app/",
  },
  {
    id: crypto.randomUUID(),
    projectImgUrl: "/src/assets/MeteoCountry.webp",
    title: "Meteo Country",
    tecnologies: [react, css, vite, javascript],
    description:
      "Meteo Country offre agli utenti la possibilità di ottenere informazioni dettagliate su un paese specifico. Utilizza una doppia chiamata API sincronizzata per visualizzare la capitale, la popolazione e la bandiera del paese, insieme alle condizioni meteorologiche attuali della sua capitale.",
    codeUrl: "https://github.com/marcosfrias28/Meteo-Country-Vite-React-CSS",
    previewUrl: "https://meteo-country-vite-react-css.vercel.app/",
  },
  {
    id: crypto.randomUUID(),
    projectImgUrl: "/src/assets/githubProfile.webp",
    title: "Github Profile",
    tecnologies: [html, css, javascript],
    description:
      "L'applicazione utilizza HTML, CSS e JavaScript per consentire la ricerca dei profili su GitHub. Una volta inserito il nome utente, vengono mostrate in modo chiaro e conciso le informazioni più rilevanti del profilo, come il numero di repository, i follower, le organizzazioni seguite e una breve descrizione bio. Un design intuitivo e responsivo rende l'esperienza utente piacevole su qualsiasi dispositivo.",
    codeUrl: "https://github.com/marcosfrias28/GitHub-Profile-App",
    previewUrl: "https://git-hub-profile-app-azure.vercel.app/",
  },
];
