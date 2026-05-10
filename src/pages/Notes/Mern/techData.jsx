const techData = [
  {
    icon: (
      <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "HTML5",
    desc: "Semantic tags, forms, media elements, accessibility attributes, SEO-friendly structure, and modern HTML5 APIs for building responsive web pages.",
    color: "from-orange-400 to-red-500",
  },

  {
    icon: (
      <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343"
        />
      </svg>
    ),
    title: "CSS3",
    desc: "Flexbox, Grid, animations, transitions, responsive layouts, media queries, custom properties, and modern UI/UX styling techniques.",
    color: "from-blue-400 to-indigo-500",
  },

  {
    icon: (
      <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18"
        />
      </svg>
    ),
    title: "JavaScript",
    desc: "ES6+ features, DOM manipulation, async/await, closures, promises, event loop, APIs, error handling, and dynamic web application logic.",
    color: "from-yellow-400 to-amber-500",
  },

  {
    icon: (
      <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4"
        />
      </svg>
    ),
    title: "Node.js",
    desc: "Server-side JavaScript, REST APIs, file system, streams, buffers, event-driven architecture, authentication, and scalable backend development.",
    color: "from-green-600 to-lime-500",
  },

  {
    icon: (
      <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01"
        />
      </svg>
    ),
    title: "React.js",
    desc: "Components, hooks, state management, context API, routing, reusable UI architecture, performance optimization, and SPA development.",
    color: "from-cyan-400 to-blue-500",
  },

  {
    icon: (
      <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 9l3 3-3 3m5 0h3"
        />
      </svg>
    ),
    title: "Terminal / CLI",
    desc: "Command line operations, file navigation, shell scripting, SSH, permissions, process management, and developer productivity workflows.",
    color: "from-gray-700 to-black",
  },

  {
    icon: (
      <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7v8a2 2 0 002 2h6"
        />
      </svg>
    ),
    title: "Git & GitHub",
    desc: "Version control, repositories, branching, merging, pull requests, collaboration workflows, conflict resolution, and deployment integration.",
    color: "from-gray-600 to-gray-900",
  },

  {
    icon: (
      <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 12h14M5 12a2 2 0 01-2-2V6"
        />
      </svg>
    ),
    title: "Express.js",
    desc: "Middleware, routing, RESTful APIs, JWT authentication, error handling, MVC architecture, file uploads, and backend best practices.",
    color: "from-gray-500 to-gray-700",
  },

  {
    icon: (
      <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7"
        />
      </svg>
    ),
    title: "SQL",
    desc: "Relational databases, joins, queries, normalization, indexing, transactions, stored procedures, and database optimization techniques.",
    color: "from-sky-500 to-blue-700",
  },

  {
    icon: (
      <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
        />
      </svg>
    ),
    title: "MongoDB",
    desc: "NoSQL database, CRUD operations, aggregation pipeline, schema design, indexing, Mongoose ODM, and scalable database architecture.",
    color: "from-green-500 to-emerald-600",
  },

  {
    icon: (
      <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1"
        />
      </svg>
    ),
    title: "Deployment",
    desc: "Deploying applications using Vercel, Netlify, Render, environment variables, CI builds, hosting, and production optimization.",
    color: "from-pink-500 to-rose-500",
  },

  {
    icon: (
      <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Docker",
    desc: "Containerization, Docker images, containers, Docker Compose, environment isolation, networking, and scalable application deployment.",
    color: "from-cyan-500 to-blue-600",
  },

  {
    icon: (
      <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z"
        />
      </svg>
    ),
    title: "Kubernetes",
    desc: "Container orchestration, scaling, pods, deployments, services, cluster management, auto-healing, and cloud-native infrastructure.",
    color: "from-indigo-500 to-blue-700",
  },

  {
    icon: (
      <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17v-6h13M9 7v6H1"
        />
      </svg>
    ),
    title: "CI/CD",
    desc: "Continuous Integration & Deployment pipelines using GitHub Actions, Jenkins, automated testing, builds, deployments, and DevOps workflows.",
    color: "from-violet-500 to-purple-700",
  },

  {
    icon: (
      <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7h18M3 12h18M3 17h18"
        />
      </svg>
    ),
    title: "Projects",
    desc: "Real-world full stack projects including MERN applications, authentication systems, dashboards, REST APIs, and scalable production-ready apps.",
    color: "from-orange-500 to-pink-600",
  },
];

export default techData;