import vibesoul from "../assets/vibesoul.png";
import shopease from "../assets/shopease.png";
import rewiredcv from "../assets/rewiredcv.png";

const projects = [
  {
    title: "ShopEase",
    description:
      "A full-stack e-commerce application with user authentication, product management, shopping cart functionality, and a responsive interface. Built with React, Node.js, Express, and PostgreSQL.",
    image: shopease,
    tech: ["React", "Node.js", "Express.js", "PostgreSQL", "Prisma"],
    github: "https://github.com/KAINNIKHIL/shopease",
    live: "https://shoopease.vercel.app/",
    featured: true,
    status: "Live",
  },
  {
    title: "VibeSoul",
    description:
      "An MBTI-based social platform where users can create posts, share stories, like and comment, follow others, and interact with a personality-focused community.",
    image: vibesoul,
    tech: ["React", "JavaScript", "Appwrite", "Tailwind CSS"],
    github: "https://github.com/KAINNIKHIL/VibeSoul",
    live: "https://vibesoul.vercel.app",
    featured: true,
    status: "Live",
  },
  {
    title: "RewiredCV",
    description:
      "An AI-powered resume reviewer that analyzes resumes, provides actionable feedback, highlights improvement areas, and helps users prepare resumes for job applications.",
    image: rewiredcv,
    tech: ["Next.js", "React", "Tailwind CSS", "Gemini API"],
    github: "https://github.com/KAINNIKHIL/ai-resume-reviewer",
    live: "https://rewiredcv.vercel.app",
    featured: true,
    status: "Live",
  },
];

export default projects;
