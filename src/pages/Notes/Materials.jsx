const materials = [
  {
    icon: (
      <svg className="h-7 w-7 sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "MERN Stack Notes",
    desc: "Complete notes covering React.js, Node.js, Express.js, and MongoDB — from basics to advanced concepts with real-world project examples.",
    topics: 53,
    color: "from-cyan-500 to-blue-500",
    content: [
      { heading: "React.js Basics", points: ["JSX Syntax & Expressions", "Components (Functional & Class)", "Props & State Management", "useEffect & Side Effects", "Conditional Rendering & Lists"] },
      { heading: "Node.js & Express", points: ["Setting up Express Server", "Routing & Middleware", "REST API Design Patterns", "Error Handling Middleware", "File Upload with Multer"] },
      { heading: "MongoDB & Mongoose", points: ["CRUD Operations", "Schema Design & Validation", "Population & Aggregation", "Indexing for Performance", "Connection with Mongoose"] },
      { heading: "Full Stack Projects", points: ["Authentication with JWT", "Blog Platform (CRUD)", "E-commerce Cart System", "Real-time Chat with Socket.io", "Deployment on Vercel/Render"] },
    ],
  },
  {
    icon: (
      <svg className="h-7 w-7 sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Java & DSA Notes",
    desc: "Core Java fundamentals, OOP concepts, collections, multithreading, and 200+ DSA problems with detailed explanations.",
    topics: 75,
    color: "from-orange-500 to-red-400",
    content: [
      { heading: "Java Core", points: ["OOP Concepts (Encapsulation, Inheritance, Polymorphism)", "Collections Framework (List, Set, Map)", "Exception Handling & Custom Exceptions", "Multithreading & Concurrency", "I/O Streams & File Handling"] },
      { heading: "Arrays & Strings", points: ["Two Pointer Technique", "Sliding Window Pattern", "Prefix Sum Approach", "Anagram & Palindrome Problems", "Subarray & Subsequence Problems"] },
      { heading: "Trees & Graphs", points: ["Binary Tree Traversals (In, Pre, Post, Level)", "BST Operations", "DFS & BFS Algorithms", "Dijkstra's Shortest Path", "Topological Sorting"] },
      { heading: "Dynamic Programming", points: ["0/1 Knapsack Problem", "Longest Common Subsequence", "Matrix Chain Multiplication", "Coin Change Problem", "Edit Distance Problem"] },
    ],
  },
  {
    icon: (
      <svg className="h-7 w-7 sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Interview Preparation",
    desc: "Curated list of top interview questions for MERN, Java, and DSA — with solutions, tips, and commonly asked patterns.",
    topics: 40,
    color: "from-violet-500 to-purple-500",
    content: [
      { heading: "React Interview Q&A", points: ["Virtual DOM vs Real DOM", "Hooks vs Class Components", "State vs Props", "useCallback vs useMemo", "How React Reconciliation Works"] },
      { heading: "Node.js Interview Q&A", points: ["Event Loop Architecture", "Blocking vs Non-blocking I/O", "Streams & Buffers", "Middleware Execution Order", "Cluster Module & Worker Threads"] },
      { heading: "Java Interview Q&A", points: ["Why Java is Platform Independent", "HashMap Internal Working", "Fail-fast vs Fail-safe Iterators", "Garbage Collection Process", "SOLID Principles with Examples"] },
      { heading: "HR & Behavioral", points: ["Tell me about yourself", "Why should we hire you?", "Strengths & Weaknesses", "Where do you see yourself in 5 years?", "How do you handle pressure?"] },
    ],
  },
];

export default materials;