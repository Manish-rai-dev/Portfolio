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
      title: "Content Creator",
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
      title: "React.js Developer",
      company_name: "CSI-AKGEC",
      icon: starbucks,
      iconBg: "#383E56",
      date: "DEC 2021 - PRESENT",
      points: [
        "Developed various web app solutions as a student in CSI-AKGEC. Using modern technology MERN",
        "Provided guidance and mentorship to junior students in CSI-AKGEC, helping them develop their skills and improve their understanding of web development.",
        "Organized workshops and coding events within the college, promoting an inclusive and collaborative learning environment for all students.",
        "Showcased excellent communication skills and the ability to explain complex technical concepts in a clear and concise manner to individuals of all technical background.",
      ],
    },
    {
      title: "Web Development Mentor",
      company_name: "Avenue Properties",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jun 2022 - Aug 2022",
      points: [
        "Provided instruction and guidance to a group of 25 interns on the fundamentals of HTML, CSS, and JavaScript.",
        "Mentored two teams in the development of the frontend of Avenue Properties' website, resulting in a successful launch and positive feedback from stakeholders.",
        "Demonstrated proficiency in HTML, CSS, JavaScript Events, and the Document Object Model (DOM) throughout the tutoring and mentoring process.",
        "Utilized effective communication and leadership skills to build a supportive and productive learning environment for interns and teams.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "engineerHUB",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - Jan 2023",
      points: [
        "Developed an online platform for EngineerHub from scratch, leading to significant growth in user engagement and revenue.",
        "Utilized ReactJS, React Hooks, SCSS, Context API, and Git/Github to build a scalable and efficient platform.",
        "Collaborated with cross-functional teams, including product, design, and engineering, to ensure timely delivery of features and bug fixes.",
        "Implemented testing and quality assurance processes to ensure high-quality and error-free platform delivery.",
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

    {
      title: "Full stack Developer",
      company_name: "SortWind",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - Present",
      points: [
        "Spearheaded the development of multiple web platforms utilizing full-stack development techniques.",
        "Designed and developed hybrid applications using the MERN stack, Bootstrap, and MongoDB, resulting in successful and scalable solutions.",
        "Successfully managed projects from inception to completion, utilizing project management methodologies to meet strict timelines and deliverables.",
        "Conducted risk analysis and maintained databases to ensure optimal functionality and security of web platforms and applications.",
      ],
    }
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
  ];
  
  export { services, technologies, experiences, testimonials, projects };