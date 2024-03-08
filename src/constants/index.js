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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  excellent_softwares,
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
    title: "Front-end Web Development",
    icon: web,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Youtuber",
    icon: creator,
  },
  {
    title: "Gamer",
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
    name: "Redux Toolkit",
    icon: redux,
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Excellent Softwares",
  //   icon: excellent_softwares,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Desktop Applications Developer",
    company_name: "Excellent Softwares",
    icon: excellent_softwares,
    iconBg: "#E6DEDD",
    date: "Jul 2022 - Present",
    points: [
      "Proficiency in developing desktop applications using Visual Basic 6.0, leveraging its robust features and intuitive development environment.",
      "Collaboration with stakeholders to gather requirements and translate them into functional and user-friendly applications, ensuring alignment with business objectives.",
      "Implementation of efficient and maintainable code structures, adhering to coding standards and best practices to enhance readability and scalability.",
      "Integration of advanced functionalities such as database connectivity (e.g., SQL Server, Access) and third-party APIs to enhance application capabilities and streamline processes.",
      "Participation in software testing and debugging activities to identify and resolve issues, ensuring the delivery of high-quality, error-free applications to end-users.",
      "Continuous learning and staying updated with the latest advancements in Visual Basic 6.0 and related technologies, enabling the adoption of new features and techniques to improve development efficiency.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "Excellent Softwares",
    icon: excellent_softwares,
    iconBg: "#E6DEDD",
    date: "Jul 2022 - Present",
    points: [
      "Versatility in developing and maintaining web applications using React.js and other related technologies, such as Node.js, Express.js, and MongoDB, ensuring comprehensive coverage of both front-end and back-end development.",
      "Collaboration with cross-functional teams, including designers, UX/UI specialists, and other developers, to create high-quality products that meet client requirements and user needs.",
      "Implementation of responsive design principles and best practices to ensure optimal user experience across various devices and screen sizes, coupled with thorough testing for cross-browser compatibility.",
      "Active participation in code reviews and providing constructive feedback to enhance team performance, promote code quality, and maintain coding standards, fostering a culture of continuous improvement and learning.",
      "Proactive problem-solving and troubleshooting skills, demonstrated through the identification and resolution of complex technical issues, ensuring timely delivery and successful project outcomes.",
      "Strong communication and interpersonal skills, facilitating effective collaboration and communication within the team and with stakeholders, fostering a positive and productive work environment.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "POS (Point Of Sale)",
    description:
      "Our POS project enhances retail and hospitality industries with streamlined transactions, inventory management, and customer interactions. With intuitive interfaces, real-time analytics, and secure payments, it boosts sales and operational efficiency. Tailored to each client, it seamlessly integrates into existing systems, ensuring minimal disruption. From small businesses to large enterprises, our POS system drives growth and success in today's market.",
    // "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
