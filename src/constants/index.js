import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  edu,
  user,
  libraryManagment,
  portfolio,
  todolist,
  python,
  sql,
  postgresql,
  aws,
  angular,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "React",
    icon: mobile,
  },
  {
    title: "MongoDB",
    icon: backend,
  },
  {
    title: "NodeJs",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
    name: "git",
    icon: git,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "python",
    icon: python,
  },
  {
    name: "sql",
    icon: sql,
  },
  // {
  //   name: "postgresql",
  //   icon: postgresql,
  // },
  // {
  //   name: "aws",
  //   icon: aws,
  // },
  // {
  //   name: "angular",
  //   icon: angular,
  // },
];

const experiences = [
  {
    title: "Bsc-It",
    company_name: "Mumbai University - Gogate Jogalekar College",
    icon: edu,
    iconBg: "#E6DEDD",
    date: "May 2023",
    points: ["CGPA - 8.40"],
  },
  {
    title: "Final Year Project ",
    company_name: "Resturant managment System",
    icon: edu,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "I have developed the resturent managemaent system",
      "Used Html ,css, javascript, php,xamp",
      "This project was completed by 2 members.",
    ],
  },
  {
    title: "Sports And Event Managment",
    company_name: "",
    icon: user,
    iconBg: "#E6DEDD",
    date: "",
    points: ["I used to manage all the sports and other activity in the collage"],
  },
  {
    title: "Public Relations Member of the College's Cultural Committee",
    company_name: "",
    icon: user,
    iconBg: "#E6DEDD",
    date: "",
    points: ["Managed the college's Cultural Fest Resonance and other events."],
  },
  {
    title: "Event Head of Fashion Event “Mr & Miss Resonance”",
    company_name: "",
    icon: user,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "I was Mr Sices into our SICES Collage ",
    ],
  },
  {
    title: "Participated in Intercollege Football Tournament",
    company_name: "",
    icon: user, 
    iconBg: "#E6DEDD",
    date: "",
    points: ["Played as the right stricker in to the team"],
  },
  {
    title: "Library Managment System Using MERN Stack",
    company_name: "",
    icon: user,
    iconBg: "#E6DEDD",
    date: "",
    points: ["Developed the library management system using MERN Stack",
               "With sepearte admin and student access"],
  },

  {
    title: "Job Search and Shoe Job Project Using MERN Stack ",
    company_name: "",
    icon: user,
    iconBg: "#E6DEDD",
    date: "",
    points: ["We can add and remove the job ",
              "and can see the job that we have created"],
  },
 
];


const projects = [
  {
    name: "Library Managment System",
    description:
      "In this we have separate login to admin and student. So the content in the admin section cannot be accessed by the student .Student can only login and see the books into the library. On other hand the admin can add the book update and delete the book. And add the suudent and romove the student",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "MongoDb",
        color: "pink-text-gradient",
      },
    ],
    image: libraryManagment,
    source_code_link: "https://github.com/RahulAmbekar06/Library_Managment",
    live: "https://libraryManagment-quizio.netlify.app/",
  },
  {
    name: "Personal Portfolio",
    description:
      "Developed a captivating 3D personal portfolio website using React, Three.js, and modern web technologies. Seamlessly blending animations, responsiveness, and interactive features, the project not only showcases my skills but also offers a unique user experience. Implemented email functionality for direct communication, adhering to industry best practices and ensuring scalability and code reusability.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "framer motion",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "red-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/RahulAmbekar06/Personal_PortFolio",
   // live: "https://app.netlify.com/teams/rahulambekar06",
  },
  {
    name: "Job list and Job search",
    description:
      "In this i have use MERN Stack MongoDB, Expressjs, Reactjs, Nodejs. In this we can add a job, add location , add salary etc. And the job that we have we have added we can see them on the click of the button. So the job can be displayed on the screen.  ",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "MongoDb",
        color: "pink-text-gradient",
      },
    ],
    image: todolist,
    source_code_link: "https://github.com/RahulAmbekar06/JobSearch",
    //live: "https://github.com/RahulAmbekar06/Library_Managment",
  },
  {
    name: "To Do list",
    description:
      "In this i have use MERN Stack MongoDB, Expressjs, Reactjs, Nodejs. In this we can Add the task that we have to do . And can make the list of it.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "excel",
        color: "green-text-gradient",
      },
      {
        name: "jupyter",
        color: "pink-text-gradient",
      },
    ],
    image: todolist,
    source_code_link: "https://github.com/RahulAmbekar06/ToDoList",
    //live: "https://github.com/shivam-deshmukh-1107/BBC-News-Classification/blob/main/Project%201%20-%20BBC%20News%20Classification.ipynb",
  },
];

export { services, technologies, experiences,  projects };
