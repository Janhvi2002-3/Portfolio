import { color } from "framer-motion";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  tailwind,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  crmnext,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "AI & ML ",
    icon: creator,
  },
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "NodeJs Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
 
  {
    name: "Node JS",
    icon: nodejs,
  },
  

  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web  Developer ",
    company_name: "CompuBrain  (6 Months)",
    company_website: "https://www.linkedin.com/company/compubrain/posts/?feedView=all",
    icon: crmnext,
    iconBg: "#E6DEDD",
    date: "April 2023 - September 2023",
    points: [
      "Developed and maintained 33+ micro websites with a focus on mobile responsiveness and cross-browser compatibility.",
      "Collaborated with clients to design and build custom WordPress websites, aligning with their business goals and brand identity.",
      "Optimized website performance by reducing loading times and enhancing user experience through clean coding practices.",
      "Improved the overall checkout speed by 20% through performance optimization and streamlined workflows.",
      "Implemented SEO best practices during development to improve search engine visibility and organic reach."
    ],
  },
  {
    title: "Wordpress Intern",
    company_name: "The TEN Entrepreneurship Network ",
    company_website: "https://www.linkedin.com/company/the-entrepreneurship-network/posts/?feedView=all",
    icon: nickelfox,
    iconBg: "#E6DEDD",
    date: "June 2022 - November 2022",
    points: [
      " An entrepreneurship initiative focused on skill development.",
      "Worked as a WordPress developer for 6 months.",
      "Coordinated with administrative departments to ensure smooth execution of academic activities and policy updates.",
      " Learned WordPress themes and plugins to develop tailored websites"
    ],
  },

];

const projects = [
  {
    name: "ShopEase",
    description:
      "A modern, high-performance multi-page e-commerce UI .It features a seamless shopping experience with dynamic product listings, user authentication, and a responsive design.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthWeb,
    hosted_link: "https://shop-ease-pi.vercel.app/",
  },
  {
    name: "EchoVerse ",
    description:
      " Developed a machine learning model to convert sign language gestures into text with 96%+ accuracy for real-time communication & Implemented deep learning techniques",
      
    tags: [
      {
        name: "Manchine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "CNN",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
      {
        name:"Computer Vision",
        color:"blue-text-gradient",
      },
    ],
    image: aptihealthApp,
    hosted_link: "",
  },
  {
    name: "QuestionEra",
    description:
      " Developed a web-based platform enabling users to post and resolve queries across various fields.Integrated secure JWT-based authentication for seamless user access.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "MonogoDB",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
    ],
    image: rollApp,
    hosted_link: "",
  },
  {
    name: "Portfolio ",
    description:
      "This portfolio showcases my skills and projects as a  developer. It includes real-world applications, responsive designs, and interactive UI elements that highlight my ability to build clean, user-friendly web interfaces. My goal with this portfolio is to demonstrate not just what I can build, but how I think and solve problems through code.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: zealApp,
    hosted_link:
      "",
  },
  
];

const personalInfo = {
  name: "Janhvi Singh",
  fullName: "Janhvi Singh",
  email: "janhvisingh0311@gmail.com",
  role: "Web Devloper and Ai Enthusiast",
  about: `I'm a passionate full-stack developer and MCA student 🎓 at Banasthali Vidyapeeth, specializing in Python , React , Node.js , and MongoDB . I thrive on transforming innovative ideas into scalable, responsive web applications with a focus on usability and real-world impact. 🚀
One of my proudest projects is EchoVerse, a deep learning-powered sign language-to-text converter designed to enhance accessibility for the hearing-impaired.
Always open to connecting with like-minded developers, innovators, and changemakers 🌟 to build meaningful tech and share knowledge. I’m ready to bring your ideas to life—let’s create something exceptional!
`, 
  
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  live demos. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1aAdPrg5omcpypMmcIGEQwb0a_ch_EH0v/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/janhvisingh3/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/Janhvi2002-3",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
