// ── Marquee items 
export const MARQUEE_ITEMS = [
  { label: "Web Development", accent: true },
  { label: "React" },
  { label: "Node.js" },
  { label: "Machine Learning", accent: true },
  { label: "Python" },
  { label: "TensorFlow" },
  { label: "DSA", accent: true },
  { label: "LeetCode" },
  { label: "TypeScript" },
  { label: "Next.js", accent: true },
  { label: "PyTorch" },
  { label: "MongoDB" },
];

// ── About stats 
export const STATS = [
  { num: 600, suffix: "+", label: "LeetCode Problems Solved" },
  { num: 15, suffix: "+", label: "Projects Shipped" },
  { num: 9.1, suffix: "", label: "GPA" },
  { num: 5, suffix: "", label: "Hackathon Awards" },
];

// ── Skill categories 
export const SKILL_CATS = [
  {
    icon: "🌐",
title: "Full-Stack & Design",
    desc: "Building fast, high-performance web applications. I love bridging the gap between robust backend architecture and highly engaging visual storytelling.",
    tags: ["React", "Next.js", "Tailwind CSS", "MongoDB", "Node.js", "REST APIs", "Graphic Design"],
  },
  {
    icon: "🧩",
    title: "Data Structures & Algorithms",
    desc: "Solving complex problems with optimized, efficient algorithms and clean logic.",
    tags: ["Arrays & Strings", "Trees & Graphs", "Dynamic Programming", "Sorting", "Binary Search", "Heaps", "Tries", "Backtracking", "System Design"],
  },
  {
    icon: "🤖",
title: "Data Science & ML",
    desc: "Extracting insights from complex datasets, training intelligent models that learn, predict, and solve real-world problems with data. ",
    tags: ["Python", "TensorFlow", "PyTorch", "scikit-learn", "CNNs", "NLP", "Pandas", "NumPy", "Jupyter", "LLMs"],
  },
];

// ── Projects ─────
export const PROJECTS = [
  {
    num: "01 / Featured",
    title: "SnapAttend — AI-powered attendance management system",
    desc: "SnapAttend is an intelligent attendance management system that leverages facial recognition technology to streamline the attendance process. Built with Python and Streamlit, it provides a seamless experience for both teachers and students.",
    stack: ["PyTorch", "Streamlit", "Supabase", "Scikit-learn", "CSS"],
    icon: "🧠",
    image: "/snapattend.png",
    glow: "rgba(104, 193, 255, 0.15)",
    featured: true,
    link: "https://github.com/upskill-hamza/NeuralSketch",
  },
  {
    num: "02",
    title: "NeuralSketch — ML Drawing Classifier",
    desc: "A real-time sketch recognition app powered by a CNN trained on the Quick, Draw! dataset. Achieves 94% accuracy across 50 categories. Built with PyTorch for training and React for the canvas interface.",
    stack: ["PyTorch", "React", "FastAPI", "Canvas API", "Docker"],
    icon: "⚡",
    image: "/neuralsketch.png",
    glow: "rgba(168,85,247,0.15)",
    link: "https://github.com/upskill-hamza/NeuralSketch",
  },
  {
    num: "03",
    title: "Enactus JMI — official website",
    desc: "Developed a responsive website using Next.js to manage organizational content. Integrated Hygraph CMS enabling non-technical members to update blogs and contents dynamically with less effort.",
    stack: ["Next.js", "React", "Tailwind CSS", "Hygraph"],
    icon: "🌐",
    image: "/enactus.png",
    glow: "rgba(255, 195, 35, 0.1)",
    link: "https://enactusjmi.org",
  },
];

// ── Timeline ─────
export const TIMELINE = [
  {
    date: "Summer 2026",
    role: "SnapAttend - AI powered attendance system",
    org: "Personal Project",
    desc: "Developed an intelligent attendance management system that leverages facial recognition technology to streamline the attendance process. Built with Python and Streamlit, that provides a seamless experience for both teachers and students."
  },
  {
    date: "March 2026",
    role: "NeuralSketch - ML Drawing Classifier",
    org: "Personal Project",
    desc: "Developed a real-time sketch recognition app. Achieves 94% accuracy across 50+ categories. User makes a sketch from 50+ trained categoried and model predicts it with top 5 matched sketch."
  },
  {
    date: "Early 2026",
    role: "Enactus JMI",
    org: "College Society",
    desc: "Joined Enactus as Web Development team member. Worked on creating and building the official website of Enactus JMI from scratch. Collaborating with other teams and gaining non-technical experiences."
  },
  {
    date: "Winter 2025",
    role: "Finalist — CodeSlayer 2025",
    org: "48-hour hackathon, 10,000+ participants",
    desc: "Built HealthLink, an AI-powered mental health companion using NLP and LLMs in 48 hours with supportive contribution from team of 4. Awarded Best Use of AI and Best Overall Project.",
  },
  {
    date: "Summer 2025",
    role: "Open Source Contributions",
    org: "GitHub",
    desc: "Contributed bug fixes and improvements to open-source repositories, collaborating through pull requests and code reviews."

  },
  {
    date: "2024 — Present",
    role: "B.Tech in Computer Science",
    org: "Jamia Millia Islamia — CGPA: 9.07/10.0",
    desc: "Starting with general engineering subjects. Continuing with core areas of computer science including algorithms, machine learning systems, distributed computing, computer networks and natural language processing."

  },
];

// ── Social links ─
export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/upskill-hamza", type: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/hamza-ansari-1240ab2b7", type: "linkedin" },
  { label: "Resume", href: "/Hamza_Resume.pdf", type: "resume" },
  { label: "LeetCode", href: "https://leetcode.com/u/hamzaupskill", type: "leetcode" }
];
