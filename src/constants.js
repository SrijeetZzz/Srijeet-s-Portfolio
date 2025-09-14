// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import csharpLogo from "./assets/tech_logo/csharp.png";
import dotnetLogo from "./assets/tech_logo/dotnet.png";
import antdLogo from "./assets/tech_logo/antd.png";
import eraserLogo from "./assets/tech_logo/eraser.png";
import renderLogo from "./assets/tech_logo/render.png"
import vsstudioLogo from "./assets/tech_logo/vsstudio.png"

// Experience Section Logo's
import capsitechLogo from "./assets/company_logo/capsitech.jpeg";
import anisoftLogo from "./assets/company_logo/anisoft.png";
import euphoriaLogo from "./assets/company_logo/euphoria.jpeg";

// Education Section Logo's
import naktalaLogo from "./assets/education_logo/naktala.jpeg";
import fiemLogo from "./assets/education_logo/fiem.png";

// Project Section Logo's
import trackifyLogo from "./assets/work_logo/trackify.png";
import shopsphereLogo from "./assets/work_logo/shopsphere.png";
import tradexLogo from "./assets/work_logo/tradex.png";
import netflixLogo from "./assets/work_logo/netflix.png";


export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "Ant Design", logo: antdLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name : ".NET" , logo : dotnetLogo},
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "C-Sharp", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Render", logo: renderLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Eraser", logo: eraserLogo },
      { name: "VS Studio", logo: vsstudioLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: capsitechLogo,
    role: "Fullstack Developer Intern",
    company: "Capsitech",
    date: "February 2025 - June 2025",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Typescript",
      "Ant Design",
      "Tailwind CSS",
      "Node JS",
      "Express JS",
      "MongoDb",
      "Redux",
      ".NET",
      "C#",
    ],
  },
  {
    id: 1,
    img: euphoriaLogo,
    role: "AI-ML Intern",
    company: "Euphoria GenX",
    date: "December 2024 - February 2024",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "Python",
      "scikit-learn",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Machine Learning",
      "Deep Learning",
      "Git",
    ],
  },
  {
    id: 2,
    img: anisoftLogo,
    role: "Fullstack Intern",
    company: "Anisoft Institute",
    date: "September 2021 - August 2022",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "React JS",
      "Node JS",
      "Express JS",
      "MongoDB",
      "Firebase Auth",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: fiemLogo,
    school: "Future Institute Of Engineering & Management, Kolkata ",
    date: "Sept 2021 - July 2025",
    grade: "8.67 CGPA",
    desc: "I have completed my Bachelor's degree (BTECH) in Computer Applications from Future Institute Of Engineering & Management, Kolkata. During my time at FIEM, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at FIEM has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor of Technology - BTech",
  },
  {
    id: 1,
    img: naktalaLogo,
    school: "Naktala High School, Kolkata",
    date: "Apr 2019 - March 2021",
    grade: "82%",
    desc: "I completed my class 12 education from Naktala High School, Kolkata, under the WBCHSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "WBCHSE(XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: naktalaLogo,
    school: "Naktala High School, Kolkata",
    date: "January 2017 - March 2019",
    grade: "84%",
    desc: "I completed my class 10 education from Naktala High School, Kolkata, under the WBBSE board, where I studied Science with Computer.",
    degree: "WBBSE(X), Science with Computer",
  },
];

export const projects = [
  {
    id: 0,
    title: "Trackify",
    description:
      "An expense tracker app with Splitwise-style expense splitting. Built using the MERN stack with TypeScript and Shadcn UI components, it allows users to manage expenses, track balances, and maintain financial transparency within groups.",
    image: trackifyLogo,
    tags: [
      "MongoDB",
      "Express",
      "React JS",
      "Node.js",
      "TypeScript",
      "Shadcn UI",
    ],
    github: "https://github.com/SrijeetZzz/Trackify-ExpenseTracker",
    webapp: "https://trackify-expense-tracker.vercel.app/",
  },
  {
    id: 1,
    title: "TradeX",
    description:
      "A stock price prediction platform with stock buy/sell functionality and wallet integration. Built using the MERN stack, it features real-time data visualization, predictive analytics, and secure transaction handling.",
    image: tradexLogo,
    tags: [
      "MongoDB",
      "Express",
      "React JS",
      "Node.js",
      "Wallet Integration",
      "Stock Prediction",
    ],
    github: "https://github.com/SrijeetZzz/TradeX",
    webapp: "https://trade-x-six.vercel.app/",
  },
  {
    id: 2,
    title: "Shopsphere",
    description:
      "A full-featured eCommerce website built using the MERN stack with Ant Design components. The platform supports product listings, shopping cart, payment integration, and a smooth user experience for online shoppers.",
    image: shopsphereLogo,
    tags: [
      "MongoDB",
      "Express",
      "React JS",
      "Node.js",
      "Ant Design",
      "eCommerce",
    ],
    github: "https://github.com/SrijeetZzz/E-Commerce-Website",
    webapp: "https://e-commerce-website-jet-three-93.vercel.app/",
  },
  {
    id: 3,
    title: "Netflix UI Clone",
    description:
      "A Netflix-style landing page with signup and signin screens. Built with React JS and Tailwind CSS, focusing on responsive design and interactive UI components to replicate the look and feel of Netflix.",
    image: netflixLogo,
    tags: ["React JS", "Tailwind CSS", "JavaScript", "HTML", "CSS", "Firebase Auth"],
    github: "https://github.com/SrijeetZzz/Netflix-Ui-Clone",
    webapp: "https://netflix-ui-clone-theta-ecru.vercel.app",
  },
];
