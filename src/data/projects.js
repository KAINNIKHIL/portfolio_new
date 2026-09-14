import vibesoul from "../assets/vibesoul.png";
import shopease from "../assets/shopease.png";
import rewiredcv from "../assets/rewiredcv.png";

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
      "https://github.com/KAINNIKHIL/VibeSoul",

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
      "https://shoopease.vercel.app/login",
  },
  {
  title: "RewiredCV",
  description:
    "An AI-powered resume reviewer that analyzes resumes, provides ATS-friendly feedback, identifies improvement areas, and helps users optimize their resumes for job applications.",

  image: rewiredcv,

  tech: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "GeminiAI API",
  ],

  github:
    "https://github.com/KAINNIKHIL/ai-resume-reviewer",

  live:
    "https://rewiredcv.vercel.app",
}
];

export default projects;
