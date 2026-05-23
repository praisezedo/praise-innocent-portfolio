import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiGreensock,
  SiThreedotjs,
  SiTensorflow,
} from "react-icons/si";

export const skills = [
  {
    name: "HTML",
    level: 95,
    group: "Foundation",
    icon: FaHtml5,
    docs: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    description:
      "HTML structures web content using semantic elements and clean document architecture.",
  },

  {
    name: "CSS",
    level: 90,
    group: "Foundation",
    icon: FaCss3Alt,
    docs: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    description:
      "CSS controls styling, layouts, responsiveness, spacing, and visual presentation.",
  },

  {
    name: "JavaScript",
    level: 95,
    group: "Foundation",
    icon: FaJs,
    docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    description:
      "JavaScript powers interactivity, logic, animations, and dynamic frontend behavior.",
  },

  {
    name: "TypeScript",
    level:  70,
    group: "Foundation",
    icon: SiTypescript,
    docs: "https://www.typescriptlang.org/docs/",
    description:
      "TypeScript adds static typing to JavaScript for better scalability and maintainability.",
  },

  {
    name: "React",
    level: 70,
    group: "Frontend",
    icon: FaReact,
    docs: "https://react.dev/",
    description:
      "React enables reusable component-based frontend engineering and interactive UI systems.",
  },

  {
    name: "Next.js",
    level: 65,
    group: "Frontend",
    icon: SiNextdotjs,
    docs: "https://nextjs.org/docs",
    description:
      "Next.js provides routing, layouts, optimization, SSR, and full-stack React capabilities.",
  },

  {
    name: "TailwindCSS",
    level: 75,
    group: "Styling",
    icon: SiTailwindcss,
    docs: "https://tailwindcss.com/docs",
    description:
      "TailwindCSS speeds up modern UI development with utility-first styling architecture.",
  },

  {
    name: "GSAP",
    level: 55,
    group: "Animation",
    icon: SiGreensock,
    docs: "https://gsap.com/docs/v3/",
    description:
      "GSAP powers premium animations, motion systems, and scroll-triggered interactions.",
  },

  {
    name: "Three.js",
    level: 45,
    group: "3D Web",
    icon: SiThreedotjs,
    docs: "https://threejs.org/docs/",
    description:
      "Three.js enables interactive 3D graphics and futuristic visual experiences in browsers.",
  },

  {
    name: "TensorFlow.js",
    level: 25,
    group: "AI Beginner",
    icon: SiTensorflow,
    docs: "https://www.tensorflow.org/js",
    description:
      "TensorFlow.js enables machine learning directly inside JavaScript applications.",
  },
];