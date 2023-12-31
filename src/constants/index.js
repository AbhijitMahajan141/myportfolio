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
  tailwind,
  nodejs,
  mongodb,
  git,
  android,
  java,
  solidity,
  starbucks,
  tesla,
  chatup,
  sociogram,
  carrent,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Solidity Developer",
    icon: creator,
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
    name: "Android",
    icon: android,
  },
  {
    name: "Java",
    icon: java,
  },

  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2024 - April 2026",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2026 - Feb 2028",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
// ];

const projects = [
  {
    name: "Chat-Up",
    description:
      "Web-based platform that allows users to chat in real-time, create groups, and search for individuals to chat with, providing a convenient and efficient solution for real-time communication needs.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "Axios",
        color: "blue-text-gradient",
      },
      {
        name: "ChakraUI",
        color: "green-text-gradient",
      },
    ],
    image: chatup,
    source_code_link: "https://github.com/AbhijitMahajan141/Chat-App",
  },
  {
    name: "Sociogram",
    description:
      "Mobile application that allows users to create an account and post videos and images for others to view, the users can even enter a image link to share.",
    tags: [
      {
        name: "ReactNative",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "StyledComponents",
        color: "pink-text-gradient",
      },
    ],
    image: sociogram,
    source_code_link: "https://github.com/AbhijitMahajan141/SocioGram",
  },
  {
    name: "Car Rent",
    description:
      "A comprehensive car booking platform that allows users to view, and rental cars, and offers extensive filters for a particular result.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },

      {
        name: "TailwindCss",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/AbhijitMahajan141/CarRent",
  },
];

export { services, technologies, experiences, projects };
