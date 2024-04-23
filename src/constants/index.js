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
  examportal,
  portfolio,
  jobit,
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

const testimonials = [
  {
    testimonial:
      "Shivam is an exceptionally talented, conscientious, and sincere student and can be described as an all-rounder, academically and personally. Shivam is a charismatic person who is admired by his peers as well as his faculties. ",
    name: "Prof. Lalit Bhoye",
    designation: "Associate Professor",
    company: "Terna Engineering College",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    testimonial:
      "A brilliant Undergraduate student. Shivam is a dedicated student, who commits total attention to academics and strives to improve wherever necessary. His positive attitude towards learning and curiosity for new things put him ahead of his peers.",
    name: "Dr. C. M. Choudhari",
    designation: "Professor & HOD",
    company: "Department of Mechanical Engineering, Terna Engineering College",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Shivam has a strong foundation of technical knowledge and intelligence, which he effectively applies to achieve optimal results. His ability to combine intelligence with creativity sets him apart and empowers him to excel in his life.",
    name: "Dr. Varsha Bodade",
    designation: "Professor",
    company: "Department of Information Technology, Terna Engineering College",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ExamPortal Application (Quizio)",
    description:
      "Developed a full-stack web-based Exam Portal using Angular, Spring Boot, and PostgreSQL. Implemented role-based access control, authentication, and deployment on Render and Netlify. Enabled admin features for category, quiz, and question management, along with user-friendly quiz attempts.",
    tags: [
      {
        name: "springboot",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "angular",
        color: "pink-text-gradient",
      },
    ],
    image: examportal,
    source_code_link: "https://github.com/shivam-deshmukh-1107",
    live: "https://examportal-quizio.netlify.app/",
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
    source_code_link: "https://github.com/shivam-deshmukh-1107",
    live: "https://shivam-deshmukh.netlify.app/",
  },
  {
    name: "Employee Attrition Prediction",
    description:
      "This project utilizes machine learning algorithms to forecast employee attrition. By analyzing historical employee data, it helps organizations identify potential turnover risks and take proactive measures to retain valuable talent. This predictive approach leads to cost savings, higher employee satisfaction, and optimized workforce management for businesses.",
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
    image: jobit,
    source_code_link: "https://github.com/shivam-deshmukh-1107",
    live: "https://github.com/shivam-deshmukh-1107/Employee-Attrition-Prediction/blob/main/Project%203%20-%20Employee%20Attrition%20Prediction.ipynb",
  },
  {
    name: "BBC News Classification",
    description:
      "This project classifies BBC News articles into categories like sports, business, politics, entertainment, and technology using machine learning. It achieves high accuracy through data preprocessing and TF-IDF feature extraction, with Logistic Regression as the top-performing model.",
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
    image: jobit,
    source_code_link: "https://github.com/shivam-deshmukh-1107",
    live: "https://github.com/shivam-deshmukh-1107/BBC-News-Classification/blob/main/Project%201%20-%20BBC%20News%20Classification.ipynb",
  },
  {
    name: "Graduate Admission Prediction",
    description:
      "Predict graduate admission chances for prospective students using machine learning. This project explores various features such as GRE Score, TOEFL Score, and more to estimate the likelihood of admission, employing different regression models for accurate predictions.",
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
    image: jobit,
    source_code_link: "https://github.com/shivam-deshmukh-1107",
    live: "https://github.com/shivam-deshmukh-1107/Graduate-Admission-Prediction/blob/main/Project%202%20-%20Graduate%20Admission%20Prediction.ipynb",
  },
  {
    name: "Face Recognition Service",
    description:
      "Developed an efficient facial recognition system utilizing AWS S3, Lambda, and DynamoDB. Designed for image upload, automatic face print generation, and recognition to identify individuals. Leveraged AWS services to create a seamless and scalable solution.",
    tags: [
      {
        name: "aws s3",
        color: "blue-text-gradient",
      },
      {
        name: "dynamodb",
        color: "green-text-gradient",
      },
      {
        name: "lambda",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/shivam-deshmukh-1107",
    live: "https://github.com/shivam-deshmukh-1107/AWS-Face-Rekognition",
  },
];

export { services, technologies, experiences, testimonials, projects };
