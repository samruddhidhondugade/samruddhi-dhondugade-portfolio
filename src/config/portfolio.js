// Portfolio Configuration File
// Update this file to customize your portfolio

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Samruddhi Dhondugade",
    role: "Full Stack Developer (Java | Spring Boot | React)",
  
    tagline: "Code. Collaborate. Create. Deliver scalable solutions with a strong engineering mindset!",
    email: "samruddhidhondugade@gmail.com",
    location: "India",
    bio: "I am a dedicated Software Engineer who enjoys learning, building, and continuously improving. I love working in collaborative teams where ideas are shared, challenges are discussed, and solutions are built together. I adapt quickly to new environments, stay curious about new technologies, and always aim to deliver clean, reliable, and user-focused software 🚀",
    resumeUrl: "https://drive.google.com/file/d/14IeQlCvr1VDx8frJSYFA_y_jln_JTN0R/view?usp=sharing", // Add your resume PDF path here
  },

  // Social Media Links
  social: {
    github: "https://github.com/samruddhidhondugade",
    linkedin: "https://www.linkedin.com/in/samruddhi-dhondugade-554b09215",
    email: "samruddhidhondugade@gmail.com",
  },

  // Skills Configuration
  skills: {
    frontend: [
      { name: "React", icon: "⚛️", level: 90 },
      // { name: "Angular", icon: "🅰️", level: 85 },
      // { name: "TypeScript", icon: "📘", level: 88 },
      { name: "JavaScript", icon: "📜", level: 92 },
      { name: "HTML5", icon: "🌐", level: 95 },
      { name: "CSS3", icon: "🎨", level: 90 },
      // { name: "Tailwind CSS", icon: "💨", level: 88 },
    ],
    backend: [
      { name: "Java", icon: "☕", level: 90 },
      { name: "Spring Boot", icon: "🌱", level: 85 },
      { name: "Node.js", icon: "🟢", level: 80 },
      { name: "Express.js", icon: "🚂", level: 75 },
      { name: "REST APIs", icon: "🔌", level: 88 },
    ],
    database: [
      { name: "MySQL", icon: "🗄️", level: 85 },
      { name: "PostgreSQL", icon: "🐘", level: 80 },
      // { name: "MongoDB", icon: "🍃", level: 75 },
    ],
    tools: [
      { name: "Git", icon: "🔀", level: 90 },
      { name: "Docker", icon: "🐳", level: 75 },
      { name: "AWS", icon: "☁️", level: 70 },
      { name: "VS Code", icon: "💻", level: 95 },
    ],
  },

  // Projects Configuration
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, product management, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
      stack: ["React", "Spring Boot", "MySQL", "Stripe"],
      github: "https://github.com/yourusername/ecommerce",
      live: "https://ecommerce-demo.com",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800",
      stack: ["Angular", "Spring Boot", "WebSocket", "PostgreSQL"],
      github: "https://github.com/yourusername/taskmanager",
      live: "https://taskmanager-demo.com",
      featured: true,
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media metrics with data visualization, real-time updates, and customizable widgets.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      stack: ["React", "TypeScript", "Chart.js", "REST API"],
      github: "https://github.com/yourusername/dashboard",
      live: "https://dashboard-demo.com",
      featured: false,
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "A modern blog platform with markdown support, syntax highlighting, comment system, and admin panel.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800",
      stack: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/yourusername/blog",
      live: "https://blog-demo.com",
      featured: false,
    },
    {
      id: 5,
      title: "Weather App",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800",
      stack: ["React", "OpenWeather API", "Tailwind CSS"],
      github: "https://github.com/yourusername/weather",
      live: "https://weather-demo.com",
      featured: false,
    },
    {
      id: 6,
      title: "Recipe Finder",
      description: "Discover and save recipes with advanced filtering, meal planning, and shopping list generation.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800",
      stack: ["Angular", "Spring Boot", "MySQL", "REST API"],
      github: "https://github.com/yourusername/recipes",
      live: "https://recipes-demo.com",
      featured: false,
    },
  ],

  // Experience Configuration
  experience: [
    {
      id: 1,
      title: "Software Engineer",
      company: "Vandanam SmartTech Pvt. Ltd.",
      location: "Remote",
      period: "Sep 2024 - Sep 2025",
      description: [
        "Key Responsibilities:",

"Developed backend REST APIs using Spring Boot and Microservice Architecture",

"Implemented JWT Authentication with RSA validation",

"Designed React UI and integrated APIs",

"Automated Document Generation (Quotation + Govt. approval docs)",

"Deployed application on AWS and managed DB using Amazon RDS",

"Added Logging + Exception Handling across services",

"Followed SOLID principles for clean code architecture",

"Used Postman for API testing and documentation",

"Managed document storage in structured folder system",
"Impact: Enhanced installation flow and recommendation accuracy for solar providers"
        
      ],  
      icon: "💼",
    },
    {
      id: 2,
      title: "Web Developer Intern",
      company: "Wolfox Services Pvt. Ltd.",
      location: "Kolhapur, Maharashtra",
      period: "Feb 2023 - May 2023",
      description: [
        "Collaborated with team to design responsive client websites",

       "Delivered static sites as per client branding and UX needs",

       "Worked with HTML, CSS, JavaScript in real-world environment",
      ],
      icon: "🚀",
    },
  ],

  // Education Configuration
  education: [
    {
      id: 1,
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "Shivaji University",
      location: "Kolhapur, Maharashtra, India",
      period: "2019 - 2023",
      description: "Gained strong foundation in software engineering, algorithms, full-stack development, and database systems.",
      icon: "🎓",
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate",
      field: "Science",
      institution: "SGM College",
      location: "Karad, Maharashtra, India",
      period: "2017 - 2019",
      // description: "Completed with distinction in Mathematics and Computer Science.",
      icon: "📚",
    },
  ],

  // Courses Configuration
  courses: [
    {
      id: 1,
      title: "Java Full Stack Certification",
      platform: "The Kiran Academy",
      period: "Dec 2023 - July 2024",
      description: "Hands-on training in full-stack development using Java, Spring Boot, Hibernate, Angular, SQL, Servlets, JSP, REST APIs, Microservices, and Deployment practices.",
      certificate: "https://www.linkedin.com/in/samruddhi-dhondugade-554b09215/overlay/1742571481571/single-media-viewer/?profileId=ACoAADZyk9AB39w3ef1NoTa1NjquSEztKVmba5c",
      icon: "💻",
    },
    {
      id: 2,
      title: "Core Java Training ",
      platform: "Internshala",
      period: "2020-21",
      description: "Learned Core Java fundamentals including OOPs, Exception Handling, Collections, Multithreading, and basic JDBC programming.",
      certificate: "https://drive.google.com/file/d/1A3FvpT32oqA4MV8ZwN0_IEtvRR0VAr9O/view?usp=sharing",
      icon: "☕",
    },
    {
      id: 3,
      title: "Data Science Training ",
      platform: "Internshala",
      period: "2025-26",
      description: "Gained foundational knowledge in Data Science including Python programming, Data Cleaning, Data Visualization, NumPy, Pandas, and an introduction to Machine Learning concepts.",
      certificate: " ",
      icon: "📊",
    },
    // {
    //   id: 4,
    //   title: "AWS Cloud Practitioner",
    //   platform: "AWS Training",
    //   period: "2023",
    //   description: "Cloud computing fundamentals and AWS services",
    //   certificate: "https://example.com/certificate4",
    //   icon: "☁️",
    // },
  ],

  // EmailJS Configuration (for contact form)
  emailjs: {
    serviceId: "your_service_id",
    templateId: "your_template_id",
    publicKey: "your_public_key",
  },
};

