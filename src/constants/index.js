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
    henry,
    security,
    techno,
    innova,
    unity,
    wordpress,
    postgressql,
    game,
    mantenimiento,
    store1,
    store2,
    virtualstore,
    virtualdashboard,
    vr,
    pizza,
    estampado,
    nike,
    brezza,
    Course,
    Financial,
    food,
    Medical
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
      name: "Wordpress",
      icon: wordpress,
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
    {
      name: "PostgreSQL",
      icon: postgressql,
    },
    {
      name: "Unity",
      icon: unity,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer, Technical Support ",
      company_name: "Brezza",
      icon: brezza,
      iconBg: "#E6DEDD",
      date: "Apr 2024 - Present",
      points: [
        "Creation of different web pages for the various publishers.",
        "Management of corporate emails.",
        "Creation of policies for access control of all users.",
        "Creation of 3D applications which generated certain 3D models by scanning different types of images"
      ],
    },
    {
      title: "Web Developer, Technical Support & 3D Developer",
      company_name: "Innovascientific",
      icon: innova,
      iconBg: "#E6DEDD",
      date: "Nov 2022 - Present",
      points: [
        "Creation of different web pages for the various publishers.",
        "Management of corporate emails.",
        "Creation of policies for access control of all users.",
        "Creation of 3D applications which generated certain 3D models by scanning different types of images"
      ],
    },
    {
      title: "Web Developer",
      company_name: "Techno Standard",
      icon: techno,
      iconBg: "#E6DEDD",
      date: "Apr 2023 - Oct 2023",
      points: [
        "Creation of web pages corresponding to the products designated by the organization.",
        "Maintain the correct order regarding SEO and email campaign sending activity.",
        "Creation and design of different banners with respect to the products and pages made.",
      ],
    },
    {
      title: "Web Developer & Technical Support",
      company_name: "Security Solutions",
      icon: security,
      iconBg: "#E6DEDD",
      date: "Apr 2022 - Nov 2022",
      points: [
        "Creation of web pages corresponding to the products designated by the organization.",
        "Support in solving situations with respect to the networks of the organization.",
        "Repair and maintenance of computer equipment belonging to the different departments.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "HENRY",
      icon: henry,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Apr 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Kevin proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Techno Standard",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Kevin does.",
      name: "Chris Brown",
      designation: "COO",
      company: "Innovascientific",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Kevin optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "Security Solutions",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Project created Medical Plataform! (Next 13 + React - Octuber 2024)",
      description:"Creation of a platform where you can schedule medical appointments with different types of doctors, in addition to having an administration panel where you can cancel appointments.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Next13",
          color: "green-text-gradient",
        },
      ],
      image: Medical,
      source_code_link: "https://plus-care.vercel.app/",
    },
    {
      name: "Project created Food Plataform! (Next 13 + React - September 2024)",
      description:"Creation of a platform where you can request food orders, as well as manage the branches of all restaurants.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Next13",
          color: "green-text-gradient",
        },
      ],
      image: food,
      source_code_link: "https://food-aplication-frontend.onrender.com/",
    },
    {
      name: "Project created Financial Plataform! (Next 13 + React - July 2024)",
      description:"Creation of a financial platform where you can view different types of banks, transactions, etc.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Next13",
          color: "green-text-gradient",
        },
      ],
      image: Financial,
      source_code_link: "https://km-banking.vercel.app/sign-in/",
    },
    {
      name: "Project created Course Plataform! (Next 13 + React - December 2023)",
      description:"Creation of a platform for the distribution of teaching resources, in addition to having a simple section where students can see each course they acquire from the various specialties.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Next13",
          color: "green-text-gradient",
        },
      ],
      image: Course,
      source_code_link: "https://lms-tutorial-ten.vercel.app/",
    },
    {
      name: "Project created Simple Nike Store Page! (React + Vite - September 2023)",
      description:"Simple page dedicated to providing information regarding the nike depostiva brand, the page is divided into the most popular products, offers, products in general, testimonials from different customers",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Vite",
          color: "green-text-gradient",
        },
        {
          name: "Typescript",
          color: "pink-text-gradient",
        },
      ],
      image: nike,
      source_code_link: "https://app-nike.vercel.app/",
    },
    {
      name: "Project created Stamping emulator! (React + Vite - September 2023)",
      description:"Page in which you can simulate the process of prints on a t-shirt, managing to visualize the printing on textile vinyl before carrying out the process of printing, cutting and pasting",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Vite",
          color: "green-text-gradient",
        },
        {
          name: "Typescript",
          color: "pink-text-gradient",
        },
      ],
      image: estampado,
      source_code_link: "https://threejs-ecru.vercel.app/",
    },
    {
      name: "Project created Page Delivery! (React - Augost 2023)",
      description:"Creation of a website dedicated to ordering pizzas mainly, with different sections, such as products, orders, and others. Using primarily React, Next.js and Tailwind as technologies.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: pizza,
      source_code_link: "https://app-delivery-pied.vercel.app/",
    },
    {
      name: "Project created Videogame 2D! (Unity C# - Abril 2023)",
      description:
        "Creation of a 2D video game, in which a character will be controlled (with 3different skins) with the mission of collecting different types of fruits and defeating the various enemies. With various skill challenges.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "CSharp",
          color: "green-text-gradient",
        },
        {
          name: "Vuforia",
          color: "pink-text-gradient",
        },
      ],
      image: game,
      source_code_link: "https://github.com/kvto/Videogame2D",
    },
    {
      name: "Project created Virtual Reality mobile application! (Unity C# & Vuforia - Febrero 2023)",
      description:
        "Creation of a virtual reality application, where through various images the mobile can create a 3D model simply by bringing it closer with its integrated camera. Adding various scripts which are responsible for the movement of various 3D models, as well as the rotation of various elements.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "CSharp",
          color: "green-text-gradient",
        },
        {
          name: "Vuforia",
          color: "pink-text-gradient",
        },
      ],
      image: vr,
      source_code_link: "https://github.com/kvto/ARProject2",
    },
    {
      name: "Page Mantenimientoindustriales (Wordpress & Elementor - April 2023)",
      description:
        "Using the template and component manager as Elementor was, plugins to manage and create forms, sliders; as well as create different CSS codes to locate the components in the correct place taking into account all the dimensions of the different enabled devices that users can choose to enter the aforementioned page (mobile, pc, laptop).",
      tags: [
        {
          name: "Wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: mantenimiento,
      source_code_link: "https://mantenimientoindustriales.com/",
    },
    {
      name: "Project created website Handmade Soaps, Shampoos and Conditioners! (Angular+11 - Octuber 2022)",
      description:
        "Development of a SPA (application whose purpose is to show all the products in our inventory corresponding to handmade soaps, conditioners and shampoos in order to finalize the purchase of the same, using methods such as pick-up in our stores or delivery)",
      tags: [
        {
          name: "Angular+11",
          color: "blue-text-gradient",
        },
        {
          name: "Restapi",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: store1,
      source_code_link: "https://github.com/kvto/2022-storeAngular",
    },
    {
      name: "Project Virtual Store - Ecommerce (React.js - June 2022)",
      description:
        "Development of an Ecommerce (application in charge of making payments)",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: store2,
      source_code_link: "https://github.com/kvto/2022-ecommerce",
    },
    {
      name: "Project created Store! (Typescript - Abril 2023)",
      description:
        "Creation of a virtual store as well as its control panel which serves to customize products, categories, prices, etc. It also has a visualization panel for sales, its respective checkout and an implement to use as an API",
      tags: [
        {
          name: "Typescript",
          color: "blue-text-gradient",
        },
        {
          name: "Next.js",
          color: "green-text-gradient",
        },
        {
          name: "Prisma",
          color: "pink-text-gradient",
        },
      ],
      image: virtualstore,
      source_code_link: "https://github.com/kvto/ecommerce-store",
    },
    {
      name: "Project created Admins Dashboard! (Typescript - Abril 2023)",
      description:
        "Creation of a virtual store as well as its control panel which serves to customize products, categories, prices, etc. It also has a visualization panel for sales, its respective checkout and an implement to use as an API",
      tags: [
        {
          name: "Typescript",
          color: "blue-text-gradient",
        },
        {
          name: "Next.js",
          color: "green-text-gradient",
        },
        {
          name: "Prisma",
          color: "pink-text-gradient",
        },
      ],
      image: virtualdashboard,
      source_code_link: "https://github.com/kvto/ecommerce-store",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };