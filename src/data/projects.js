import {
  store1, store2, store4, textify1, textify2, textify3, calculator1, calculator2, calculator3, webstore1, webstore2, webstore3, taskManager1,
  taskManager2, taskManager3
} from "../assets/images";

export const projects = [
  {
    title: "ShopSphere: E-Commerce Mobile",
    description: "A sleek, modern shopping app crafted for a flawless user journey using React Native.",
    images: [store1, store2, store4],
    technologies: ["React Native", "Redux Toolkit", "React-Navigation", "Firebase-Authentication", "Tailwind CSS"],
    features: [
      "Secure sign-in and sign-up powered by Firebase",
      "Effortless JSON data management",
      "Intuitive product search tool",
      "Seamless add-to-cart experience"
    ]
  },
  {
    title: "TaskPulse: Todo Powerhouse",
    description: "A robust task manager syncing seamlessly with a backend and local storage.",
    images: [taskManager1, taskManager2, taskManager3],
    technologies: ["React", "Redux Toolkit", "Mongoose", "Tailwind CSS", "Node.js", "Express", "CORS"],
    features: [
      "CRUD mastery: create, read, update, delete tasks",
      "Mongoose-driven backend API integration",
      "Persistent local storage on user devices",
      "CORS-enabled for server harmony"
    ]
  },
  {
    title: "TextMaster: WordCraft Analyzer",
    description: "A dynamic, responsive text tool that dissects your words, sentences, and letters with style.",
    images: [textify1, textify2, textify3],
    technologies: ["React", "Tailwind CSS"],
    features: [
      "Flawless mobile and desktop responsiveness",
      "Instant word, sentence, and letter counts",
      "One-click text copying",
      "Transform text to uppercase or lowercase",
      "Voice-enabled text-to-speech",
      "Space-trimming magic"
    ]
  },
  {
    title: "PassForge: Secure Key Generator",
    description: "A powerful, customizable tool forging unbreakable passwords with ease and elegance.",
    images: ["passgen1", "passgen2", "passgen3"],
    technologies: ["React", "Tailwind CSS"],
    features: [
      "Responsive brilliance across devices",
      "Toggle characters and numbers on/off",
      "Slider-driven password length control",
      "Instant generation of robust passwords"
    ]
  },
  {
    title: "CalcEdge: Smart Number Cruncher",
    description: "A minimalist, functional calculator delivering precision with a polished interface.",
    images: [calculator1, calculator2, calculator3],
    technologies: ["React", "Tailwind CSS"],
    features: [
      "Sleek responsiveness for all screens",
      "Core arithmetic operations",
      "Erase last input with a tap",
      "Full reset for a fresh start"
    ]
  },
  {
    title: "StoreVibe: Online Retail Haven",
    description: "A vibrant shopping platform packed with product insights and smooth navigation.",
    images: [webstore1, webstore2, webstore3],
    technologies: ["React", "Redux Toolkit", "Node.js", "Mongoose DB", "Express", "User Authentication", "API", "CORS", "Tailwind CSS"],
    features: [
      "Adaptive design for mobile and desktop",
      "Powerful product search bar",
      "Detailed cart and item breakdowns",
      "Curated related items showcase",
      "Effortless add-to-cart flow"
    ]
  },
];