import vibesoul from "../assets/vibesoul.png";
import shopease from "../assets/shopease.jpg";

const projects = [
  {
    title: "VibeSoul",
    description:
      "An MBTI-based social media platform with posts, stories, comments, likes, follows, and real-time interactions built using React and Appwrite.",

    image: vibesoul,

    tech: [
      "React",
      "Appwrite",
      "Tailwind",
      "JavaScript",
    ],

    github:
      "https://github.com/KAINNIKHIL/vibesoul_code",

    live:
      "https://vibesoul.vercel.app",
  },

  {
    title: "ShopEase",
    description:
      "A scalable e-commerce web application featuring authentication, product management, cart system, and responsive modern UI.",

    image: shopease,

    tech: [
      "React",
      "Node.js",
      "PostGre SQL",
      "Express",
    ],

    github:
      "https://github.com/KAINNIKHIL/shopease",

    live:
      "https://shoopease.vercel.app/",
  },
];

export default projects;