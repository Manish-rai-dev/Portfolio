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
    ori,
    ehub,
    SortWind,
    Crime,
    ApiDoc,
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
      title: "MERN Stack",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
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
    {
      title: "Software Engineer Intern",
      company_name: "Oriserve",
      icon: ori,
      iconBg: "#383E56",
      date: "Mar 2024 - PRESENT",
      points: [
        "Solved Multiple issues and changes reported by clients for various enterprise live products, i.e, chat-bots, Voice-bots and Generative AI bots. ",
        "Utilized tech stack: MongoDB, Node.js, Express.js and 2 queue system RabbitMQ and Bull",
     ],
    },
    {
      title: "Frontend Developer",
      company_name: "EngineerHub",
      icon: ehub,
      iconBg: "#E6DEDD",
      date: "Jul 2023 - Feb 2024",
      points: [
        "Provided instruction and guidance to a group of 25 interns on the fundamentals of HTML, CSS, and JavaScript.",
        "Mentored two teams in the development of the frontend of Avenue Properties' website, resulting in a successful launch and positive feedback from stakeholders.",
        "Demonstrated proficiency in HTML, CSS, JavaScript Events, and the Document Object Model (DOM) throughout the tutoring and mentoring process.",
        "Utilized effective communication and leadership skills to build a supportive and productive learning environment for interns and teams.",
      ],
    },
     {
      title: "Full stack Developer",
      company_name: "SortWind",
      icon: SortWind,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - Apr 2023",
      points: [
        "Spearheaded the development of multiple web platforms utilizing full-stack development techniques.",
        "Designed and developed hybrid applications using the MERN stack, Bootstrap, and MongoDB, resulting in successful and scalable solutions.",
        "Successfully managed projects from inception to completion, utilizing project management methodologies to meet strict timelines and deliverables.",
        "Conducted risk analysis and maintained databases to ensure optimal functionality and security of web platforms and applications.",
      ],
    },
    {
      title: "Web Developement Intern",
      company_name: "Starting Core",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2023 - Feb 2023",
      points: [
        "Provided instruction and guidance to a batch of 60 students on website development, including front-end design, back-end development, and deployment strategies.",
        "Mentored students on industry-standard development practices, including version control, testing, and debugging techniques.",
        "Successfully completed multiple projects involving the development of websites for local businesses, resulting in improved online presence and customer engagement.",
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
      name: "Exam Portal",
      description:
        "•	Programmed and executed an Exam Portal for conducting the recruitment drive 2022 of CSI-AKGEC club for 2nd year students.",
        
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
          name: "Node",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Manish-rai-dev/portal",
    },
    {
      name: "FinanceDashboard",
      description:
        "Web application that enables you to know that wheter your company going to be bankrupt in next 3 months or not",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Node",
          color: "green-text-gradient",
        },
        {
          name: "tensorflowJS",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Manish-rai-dev/CodeCrushers",
    },
    {
      name: "engineerHUB",
      description:
        "A one stop solution for the engineering related problems providing you placements internships courses magazines and etc.",
      tags: [
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
        {
          name: "AWS",
          color: "green-text-gradient",
        },
        {
          name: "EC2",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "Crime Management and Analysis Portal",
      description:
        "Developed a portal for police to report crimes and visualize data. Implemented real-time heat maps and crime analysis on a world map, highlighting crime rates with intuitive markers.",
      tags: [
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
        {
          name: "D3.js",
          color: "green-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "pink-text-gradient",
        },
      ],
      image: Crime,
      source_code_link: "https://github.com/Manish-rai-dev/CRMS",
    },
    {
      name: "Automated email responses and labeling",
      description:
        "This project is a Node.js application that automates email responses and labeling in Gmail. It checks for new emails, sends an auto-reply to those without previous responses, and applies customizable labels for easy organization.",
      tags: [
        {
          name: "Node.js",
          color: "blue-text-gradient",
        },
        {
          name: "Google API",
          color: "green-text-gradient",
        },
        {
          name: "Gmail API",
          color: "pink-text-gradient",
        },
      ],
      image:ApiDoc,
      source_code_link: "https://github.com/Manish-rai-dev/openInApp-Assignment",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };