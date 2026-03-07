// ── Marquee items ─────────────────────────────────────────────────────────────
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

// ── About stats ───────────────────────────────────────────────────────────────
export const STATS = [
  { num: 350, suffix: "+", label: "LeetCode Problems Solved" },
  { num: 15, suffix: "+", label: "Projects Shipped" },
  { num: 9.1, suffix: "", label: "GPA" },
  { num: 5, suffix: "", label: "Hackathon Awards" },
];

// ── Skill categories ──────────────────────────────────────────────────────────
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

// ── Projects ──────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    num: "01 / Featured",
    title: "NeuralSketch — ML Drawing Classifier",
    desc: "A real-time sketch recognition app powered by a CNN trained on the Quick, Draw! dataset. Achieves 94% accuracy across 50 categories. Built with PyTorch for training and React for the canvas interface.",
    stack: ["PyTorch", "React", "FastAPI", "Canvas API", "Docker"],
    icon: "🧠",
    glow: "rgba(168,85,247,0.15)",
    featured: true,
    link: "#",
  },
  {
    num: "02",
    title: "AlgoViz — DSA Visualizer",
    desc: "Interactive visualization of 30+ algorithms and data structures with step-by-step animations and complexity analysis.",
    stack: ["Next.js", "TypeScript", "Framer Motion"],
    icon: "⚡",
    glow: "rgba(0,229,255,0.1)",
    featured: false,
    link: "#",
  },
  {
    num: "03",
    title: "DevCollab — Real-time Code Platform",
    desc: "Full-stack collaborative coding platform with live editing, syntax highlighting, and video chat powered by WebRTC.",
    stack: ["React", "Socket.io", "WebRTC", "MongoDB"],
    icon: "🌐",
    glow: "rgba(255,61,113,0.1)",
    featured: false,
    link: "#",
  },
];

// ── Timeline ──────────────────────────────────────────────────────────────────
export const TIMELINE = [
  {
    date: "2026 - Present",
    role: "Recommendation System Project",
    org: "Personal Project",
    desc: "Designed and implemented a collaborative filtering recommendation engine. Built data pipelines using Python and Apache Spark to process large-scale event data and generate personalized recommendations."
  },
  {
    date: "Winter 2025",
    role: "Finalist — CodeSlayer 2025",
    org: "48-hour hackathon, 10,000+ participants",
    desc: "Built HealthLink an AI-powered mental health companion using NLP and LLMs in 48 hours. Awarded Best Use of AI and Best Overall Project.",
  },
  {
    date: "Summer 2025",
    role: "Open Source Contributor",
    org: "GitHub",
    desc: "Contributed bug fixes and improvements to open-source repositories, collaborating through pull requests and code reviews."

  },
  {
    date: "2024 — Present",
    role: "B.Tech in Computer Science",
    org: "Jamia Millia Islamia — CGPA: 9.07/10.0",
    desc: "Studying core areas of computer science including algorithms, machine learning systems, distributed computing, and natural language processing. Dean's List all semesters."

  },
];

// ── Social links ──────────────────────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/upskill-hamza", type: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/hamza-ansari-1240ab2b7", type: "linkedin" },
  { label: "Resume", href: "/resume.pdf", type: "resume" },
  { label: "LeetCode", href: "https://leetcode.com/u/9gtm6LLdDI", type: "leetcode" }
];
