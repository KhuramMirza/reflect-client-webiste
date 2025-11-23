export const ROADMAP_QUESTIONS = [
  {
    question: "What is your current experience level in tech or programming?",
    options: [
      { text: "No experience", value: "no_experience" },
      { text: "Beginner", value: "beginner" },
      { text: "Intermediate", value: "intermediate" },
      { text: "Advanced", value: "advanced" },
    ],
    key: "experience_level",
  },
  {
    question: "What is your primary learning goal?",
    options: [
      { text: "Get a job in tech", value: "job" },
      { text: "Build personal projects", value: "projects" },
      { text: "Contribute to open source", value: "opensource" },
      { text: "Prepare for interviews", value: "interviews" },
    ],
    key: "learning_goal",
  },
  {
    question: "Which field are you most interested in?",
    options: [
      { text: "Web Development", value: "web_dev" },
      { text: "Data Science / AI", value: "data_science" },
      { text: "Mobile App Development", value: "mobile" },
      { text: "Cybersecurity", value: "cyber_security" },
      { text: "Game Development", value: "game_dev" },
      { text: "DevOps / Cloud", value: "devops" },
      { text: "Not Sure Yet", value: "unsure" },
    ],
    key: "tech_interest",
  },
  {
    question:
      "How many hours per week can you consistently dedicate to learning?",
    options: [
      { text: "Less than 3 hours", value: "lt_3" },
      { text: "3–5 hours", value: "3_5" },
      { text: "5–10 hours", value: "5_10" },
      { text: "More than 10 hours", value: "gt_10" },
    ],
    key: "weekly_time",
  },
  {
    question: "What is your preferred way of learning?",
    options: [
      { text: "Video tutorials", value: "video" },
      { text: "Reading documentation/books", value: "reading" },
      { text: "Building hands-on projects", value: "projects" },
      { text: "Mentorship or group learning", value: "mentorship" },
    ],
    key: "learning_style",
  },
  {
    question: "Do you have experience with any programming languages?",
    options: [
      { text: "No experience", value: "none" },
      { text: "Python", value: "python" },
      { text: "JavaScript", value: "javascript" },
      { text: "Java", value: "java" },
      { text: "C++", value: "cpp" },
      { text: "Other", value: "other" },
    ],
    key: "language_experience",
  },
  {
    question: "What kind of resources do you enjoy using?",
    options: [
      { text: "Interactive platforms", value: "interactive" },
      { text: "Video courses", value: "video" },
      { text: "Text-based guides/blogs", value: "text" },
      { text: "Coding challenges", value: "challenges" },
    ],
    key: "resource_preference",
  },
  {
    question: "Do you prefer working on visual or analytical tasks?",
    options: [
      { text: "Visual (UI, Front-End)", value: "visual" },
      { text: "Logical (APIs, Back-End)", value: "logical" },
      { text: "Analytical (Data, ML, Security)", value: "analytical" },
      { text: "Mix of everything", value: "mix" },
    ],
    key: "task_preference",
  },
  {
    question:
      "What is your target time frame to start applying your skills practically?",
    options: [
      { text: "1–2 months", value: "1_2_months" },
      { text: "3–6 months", value: "3_6_months" },
      { text: "6–12 months", value: "6_12_months" },
      { text: "No specific deadline", value: "no_deadline" },
    ],
    key: "goal_timeline",
  },
  {
    question:
      "Do you prefer structured step-by-step guidance or open-ended learning?",
    options: [
      { text: "Structured roadmap", value: "structured" },
      { text: "Flexible exploration", value: "flexible" },
      { text: "Mix of both", value: "mix" },
    ],
    key: "learning_structure",
  },
];
