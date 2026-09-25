import { useState } from "react";
import {
  Routes,
  Route,
  Link,
  useLocation,
  useParams,
} from "react-router-dom";

import {
  Brain,
  LayoutDashboard,
  BookOpen,
  Code2,
  Database,
  Trophy,
  Bot,
  Search,
  Bell,
  Menu,
  X,
  ArrowRight,
  Target,
  Flame,
  CheckCircle2,
  Clock3,
  Sparkles,
  Puzzle,
  BarChart3,
  Calculator,
} from "lucide-react";

const nav: [string, string, React.ElementType][] = [
  ["/dashboard", "Dashboard", LayoutDashboard],
  ["/practice", "Practice", BookOpen],
  ["/coding", "Coding", Code2],
  ["/dsa", "DSA", Database],
  ["/technical", "Technical", BookOpen],
  ["/challenges", "Challenges", Trophy],
  ["/ai-assistant", "AI Assistant", Bot],
];

function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <div className="app">
      <header className="topbar">
        <Link to="/" className="brand">
          <span className="logo">
            <Brain size={22} />
          </span>
          <span>
            Placement <b>AI</b>
          </span>
        </Link>

        <nav className="desktop-nav">
          {nav.map(([p, n, I]) => {
            const isActive =
              loc.pathname === p ||
              (p !== "/" &&
                (loc.pathname.startsWith(`${p}/`) ||
                  loc.pathname === p));

            return (
              <Link
                className={isActive ? "active" : ""}
                to={p as string}
                key={p as string}
              >
                {(() => {
                  const Icon = I as React.ElementType;
                  return <Icon size={17} />;
                })()}
                {n as string}
              </Link>
            );
          })}
        </nav>

        <div className="topbar-actions">
          <button
            className="icon-btn"
            onClick={() => {
              setSearchOpen(true);
              setNotificationsOpen(false);
            }}
            aria-label="Search"
          >
            <Search size={18} />
          </button>

          <button
            className="icon-btn"
            onClick={() => {
              setNotificationsOpen(!notificationsOpen);
              setSearchOpen(false);
            }}
            aria-label="Notifications"
          >
            <Bell size={18} />
          </button>

          <Link to="/profile" className="avatar">
            V
          </Link>

          <button
            className="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      {searchOpen && (
  <div
    className="overlay"
    onClick={() => setSearchOpen(false)}
  >
    <div
      className="search-panel"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="search-header">
        <Search size={20} />
        <input
          autoFocus
          placeholder="Search Placement AI..."
        />
        <button
          onClick={() => setSearchOpen(false)}
          className="close-search"
        >
          <X size={18} />
        </button>
      </div>

      <div className="search-suggestions">
        <p>Quick access</p>

        <Link
          to="/practice"
          onClick={() => setSearchOpen(false)}
        >
          Practice
        </Link>

        <Link
          to="/coding"
          onClick={() => setSearchOpen(false)}
        >
          Coding
        </Link>

        <Link
          to="/dsa"
          onClick={() => setSearchOpen(false)}
        >
          DSA
        </Link>

        <Link
          to="/technical"
          onClick={() => setSearchOpen(false)}
        >
          Technical
        </Link>

        <Link
          to="/ai-assistant"
          onClick={() => setSearchOpen(false)}
        >
          AI Assistant
        </Link>
      </div>
    </div>
  </div>
)}
    {notificationsOpen && (
  <div className="notification-panel">

    <div className="notification-header">
      <div>
        <strong>Notifications</strong>
        <span>3 new updates</span>
      </div>

      <button
        onClick={() => setNotificationsOpen(false)}
      >
        <X size={17} />
      </button>
    </div>

    <div className="notification-item">
      <div className="notification-dot" />
      <div>
        <strong>Daily goal</strong>
        <p>Complete 20 aptitude questions today.</p>
      </div>
    </div>

    <div className="notification-item">
      <div className="notification-dot" />
      <div>
        <strong>New challenge</strong>
        <p>Your Python Problem of the Day is ready.</p>
      </div>
    </div>

    <div className="notification-item">
      <div className="notification-dot" />
      <div>
        <strong>Keep your streak</strong>
        <p>You are on a 7-day preparation streak.</p>
      </div>
    </div>

  </div>
)}
      {open && (
        <div className="mobile-nav">
          {nav.map(([p, n, I]) => (
            <Link
              onClick={() => setOpen(false)}
              to={p as string}
              key={p as string}
            >
              {(() => {
                const Icon = I as React.ElementType;
                return <Icon size={18} />;
              })()}
              {n as string}
            </Link>
          ))}
        </div>
      )}

      <main>{children}</main>
    </div>
  );
}

const stats = [
  ["Current Streak", "7 days", Flame],
  ["Questions Solved", "248", CheckCircle2],
  ["Accuracy", "78%", Target],
  ["Study Time", "18.5 hrs", Clock3],
];

function Dashboard() {
  return (
    <Layout>
      <section className="page">

        <div className="hero-row">
          <div>
            <p className="eyebrow">WELCOME BACK, VAISHNAVI</p>

            <h1>
              Build skills. <span>Get placed.</span>
            </h1>

            <p className="muted">
              Your personalized placement preparation workspace.
            </p>
          </div>

          <Link className="primary" to="/practice/test">
            Start a Mock Test
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="stats">
          {stats.map(([a, b, I]) => {
            const Icon = I as React.ElementType;

            return (
              <div className="stat" key={a as string}>
                <Icon size={21} />
                <small>{a as string}</small>
                <strong>{b as string}</strong>
              </div>
            );
          })}
        </div>

        <div className="grid-2">

          <section className="card">
            <div className="section-head">
              <h2>Today's Focus</h2>
              <span className="pill">3 tasks</span>
            </div>

            {[
              "Quantitative Aptitude",
              "Python Basics",
              "Logical Reasoning",
            ].map((x, i) => (
              <Link
                to={
                  i === 0
                    ? "/practice/quantitative"
                    : "/technical"
                }
                className="task"
                key={x}
              >
                <span className="task-num">
                  0{i + 1}
                </span>

                <span>
                  <b>{x}</b>

                  <small>
                    {i === 0
                      ? "20 questions · 25 min"
                      : i === 1
                      ? "15 questions · 20 min"
                      : "15 questions · 15 min"}
                  </small>
                </span>

                <ArrowRight size={17} />
              </Link>
            ))}
          </section>

          <section className="card">
            <div className="section-head">
              <h2>Progress</h2>
              <Link to="/progress">View all</Link>
            </div>

            <div className="progress-ring">
              <div>
                <strong>68%</strong>
                <small>overall</small>
              </div>
            </div>

            <p className="center muted">
              Keep your streak going! You're making steady progress.
            </p>
          </section>

        </div>

        <section className="card">
          <div className="section-head">
            <h2>Recommended for you</h2>
            <Sparkles size={19} />
          </div>

          <div className="rec-grid">

            <Link
              to="/practice"
              className="recommend"
            >
              <div className="rec-icon">
                <Calculator size={23} />
              </div>

              <b>Aptitude Mastery</b>

              <span>
                Continue learning <ArrowRight size={13} />
              </span>
            </Link>

            <Link
              to="/dsa"
              className="recommend"
            >
              <div className="rec-icon">
                <Code2 size={23} />
              </div>

              <b>Top 50 DSA Patterns</b>

              <span>
                Continue learning <ArrowRight size={13} />
              </span>
            </Link>

            <Link
              to="/technical"
              className="recommend"
            >
              <div className="rec-icon">
                <Database size={23} />
              </div>

              <b>Core CS Interview Prep</b>

              <span>
                Continue learning <ArrowRight size={13} />
              </span>
            </Link>

          </div>
        </section>

      </section>
    </Layout>
  );
}

function Home() {
  return (
    <Layout>
      <section className="landing">

        <div className="hero">

          <div>

            <div className="badge">
              <Sparkles size={13} />
              SMART PLACEMENT PREP
            </div>

            <h1>
              Prepare smarter.
              <br />
              <span>Get interview-ready.</span>
            </h1>

            <p>
              One focused platform for aptitude, coding, DSA and
              technical preparation — with an AI study companion.
            </p>

            <div className="hero-buttons">
              <Link
                className="primary"
                to="/dashboard"
              >
                Enter Placement AI
                <ArrowRight size={18} />
              </Link>

              <Link
                className="secondary"
                to="/practice"
              >
                Explore Practice
              </Link>
            </div>

          </div>

          <div className="hero-card">

            <div className="mini-top">
              <span>Placement readiness</span>
              <b>68%</b>
            </div>

            <div className="bar">
              <i style={{ width: "68%" }} />
            </div>

            {[
              ["Aptitude", 82],
              ["Coding", 64],
              ["Technical", 58],
            ].map(([x, value]) => (
              <div
                className="mini-row"
                key={x as string}
              >
                <span>{x as string}</span>
                <b>{value as number}%</b>
              </div>
            ))}

          </div>

        </div>

        <div className="feature-row">

          <div className="feature">
            <div className="feature-icon">
              <BookOpen size={23} />
            </div>
            <b>Practice</b>
            <small>Aptitude & reasoning</small>
          </div>

          <div className="feature">
            <div className="feature-icon">
              <Code2 size={23} />
            </div>
            <b>Code</b>
            <small>Build DSA confidence</small>
          </div>

          <div className="feature">
            <div className="feature-icon">
              <Bot size={23} />
            </div>
            <b>AI Assistant</b>
            <small>Get instant guidance</small>
          </div>

          <div className="feature">
            <div className="feature-icon">
              <Trophy size={23} />
            </div>
            <b>Challenges</b>
            <small>Stay consistent</small>
          </div>

        </div>

      </section>
    </Layout>
  );
}
function Practice() {
  const [selected, setSelected] = useState<string | null>(null);

  const tracks = [
    {
      title: "Quantitative Aptitude",
      description: "Percentages, averages, ratios, time & work and more.",
      icon: <Calculator size={28} />,
      questions: "20 Questions",
      time: "25 Minutes",
      path: "/practice/quantitative",
    },
    {
      title: "Logical Reasoning",
      description: "Patterns, puzzles, coding-decoding and analytical reasoning.",
      icon: <Puzzle size={28} />,
      questions: "20 Questions",
      time: "20 Minutes",
      path: "/practice/logical",
    },
    {
      title: "Verbal Ability",
      description: "Grammar, vocabulary, sentence correction and comprehension.",
      icon: <BookOpen size={28} />,
      questions: "20 Questions",
      time: "20 Minutes",
      path: "/practice/verbal",
    },
    {
      title: "Mock Tests",
      description: "Practice with a complete placement-style timed test.",
      icon: <Clock3 size={28} />,
      questions: "30 Questions",
      time: "30 Minutes",
      path: "/practice/test",
    },
  ];

  return (
    <Layout>
      <section className="page">

        <p className="eyebrow">PRACTICE CENTER</p>

        <h1>Sharpen your skills</h1>

        <p className="muted">
          Choose a preparation track and start practicing.
        </p>

        <div className="practice-grid">

          {tracks.map((track) => (
            <div
              className={`big-card ${
                selected === track.title ? "selected-card" : ""
              }`}
              key={track.title}
            >

              <div className="card-icon">
                {track.icon}
              </div>

              <h2>{track.title}</h2>

              <p>{track.description}</p>

              <div className="practice-meta">
                <span>{track.questions}</span>
                <span>{track.time}</span>
              </div>

              <Link
                className="practice-start"
                to={track.path}
                onClick={() => setSelected(track.title)}
              >
                Start Practice
                <ArrowRight size={16} />
              </Link>

            </div>
          ))}

        </div>

      </section>
    </Layout>
  );
}
function PracticeSession() {
  const questionSets: Record<string, any[]> = {
    quantitative: [
      {
        question: "A shopkeeper buys an article for ₹800 and sells it for ₹960. What is the profit percentage?",
        options: ["15%", "20%", "25%", "30%"],
        answer: "20%",
      },
      {
        question: "What is 25% of 240?",
        options: ["40", "50", "60", "80"],
        answer: "60",
      },
      {
        question: "The average of 10, 20, 30, 40 and 50 is:",
        options: ["25", "30", "35", "40"],
        answer: "30",
      },
      {
        question: "A train travels 120 km in 2 hours. What is its speed?",
        options: ["40 km/h", "50 km/h", "60 km/h", "80 km/h"],
        answer: "60 km/h",
      },
      {
        question: "If the ratio of boys to girls is 3:2 and there are 30 boys, how many girls are there?",
        options: ["15", "20", "25", "30"],
        answer: "20",
      },
    ],

    logical: [
      {
        question: "Find the next number: 2, 4, 8, 16, ?",
        options: ["20", "24", "32", "36"],
        answer: "32",
      },
      {
        question: "If CAT is coded as DBU, how is DOG coded?",
        options: ["EPH", "EOH", "DPH", "EPG"],
        answer: "EPH",
      },
      {
        question: "Find the odd one out.",
        options: ["Apple", "Mango", "Carrot", "Banana"],
        answer: "Carrot",
      },
      {
        question: "If today is Monday, what day will it be after 10 days?",
        options: ["Wednesday", "Thursday", "Friday", "Saturday"],
        answer: "Thursday",
      },
      {
        question: "Complete the series: A, C, E, G, ?",
        options: ["H", "I", "J", "K"],
        answer: "I",
      },
    ],

    verbal: [
      {
        question: "Choose the synonym of 'Rapid'.",
        options: ["Slow", "Fast", "Weak", "Late"],
        answer: "Fast",
      },
      {
        question: "Choose the correct sentence.",
        options: [
          "She go to college.",
          "She going to college.",
          "She goes to college.",
          "She gone to college.",
        ],
        answer: "She goes to college.",
      },
      {
        question: "Choose the antonym of 'Ancient'.",
        options: ["Old", "Historic", "Modern", "Traditional"],
        answer: "Modern",
      },
      {
        question: "Fill in the blank: He ___ playing football.",
        options: ["is", "are", "am", "be"],
        answer: "is",
      },
      {
        question: "Choose the correctly spelled word.",
        options: ["Recieve", "Receive", "Receeve", "Receve"],
        answer: "Receive",
      },
    ],

    test: [
      {
        question: "What is 20% of 150?",
        options: ["20", "25", "30", "35"],
        answer: "30",
      },
      {
        question: "Which data structure follows LIFO?",
        options: ["Queue", "Stack", "Array", "Linked List"],
        answer: "Stack",
      },
      {
        question: "Which SQL command is used to retrieve data?",
        options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
        answer: "SELECT",
      },
      {
        question: "Which language is commonly used for data analysis?",
        options: ["Python", "HTML", "CSS", "XML"],
        answer: "Python",
      },
      {
        question: "What is the output concept of a binary search?",
        options: [
          "Searches randomly",
          "Divides the search space",
          "Always checks every element",
          "Only works on strings",
        ],
        answer: "Divides the search space",
      },
    ],
  };

  const type = window.location.pathname.split("/").pop() || "quantitative";

  const questions = questionSets[type] || questionSets.quantitative;

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[current];

  function selectAnswer(option: string) {
    if (selected) return;

    setSelected(option);

    if (option === question.answer) {
      setScore(score + 1);
    }
  }

  function nextQuestion() {
    if (current === questions.length - 1) {
      setFinished(true);
      return;
    }

    setCurrent(current + 1);
    setSelected(null);
  }

  function restart() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    const percentage = Math.round(
      (score / questions.length) * 100
    );

    return (
      <Layout>
        <section className="page narrow">

          <div className="result-card">

            <div className="result-icon">
              <CheckCircle2 size={42} />
            </div>

            <p className="eyebrow">PRACTICE COMPLETE</p>

            <h1>Great work!</h1>

            <p className="muted">
              You completed this practice session.
            </p>

            <div className="score-box">
              <strong>{score}/{questions.length}</strong>
              <span>{percentage}% Score</span>
            </div>

            <div className="result-actions">
              <button
                className="primary"
                onClick={restart}
              >
                Practice Again
              </button>

              <Link
                className="secondary"
                to="/practice"
              >
                Back to Practice
              </Link>
            </div>

          </div>

        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="page narrow">

        <div className="practice-session-header">

          <div>
            <p className="eyebrow">
              PRACTICE SESSION
            </p>

            <h1>Question {current + 1}</h1>
          </div>

          <span className="question-count">
            {current + 1} / {questions.length}
          </span>

        </div>

        <div className="question-progress">
          <div
            style={{
              width: `${((current + 1) / questions.length) * 100}%`,
            }}
          />
        </div>

        <div className="question-card">

          <h2>{question.question}</h2>

          <div className="options">

            {question.options.map((option: string) => {

              let className = "option";

              if (selected) {
                if (option === question.answer) {
                  className += " correct";
                } else if (option === selected) {
                  className += " wrong";
                }
              }

              return (
                <button
                  className={className}
                  key={option}
                  onClick={() => selectAnswer(option)}
                  disabled={!!selected}
                >
                  <span className="option-letter">
                    {String.fromCharCode(
                      65 + question.options.indexOf(option)
                    )}
                  </span>

                  <span>{option}</span>
                </button>
              );
            })}

          </div>

          {selected && (
            <div
              className={
                selected === question.answer
                  ? "answer-feedback correct-feedback"
                  : "answer-feedback wrong-feedback"
              }
            >
              {selected === question.answer
                ? "Correct! Nice work."
                : `Incorrect. The correct answer is ${question.answer}.`}
            </div>
          )}

          <div className="question-actions">

            <span className="score-label">
              Score: {score}
            </span>

            <button
              className="primary"
              onClick={nextQuestion}
              disabled={!selected}
            >
              {current === questions.length - 1
                ? "Finish"
                : "Next Question"}

              <ArrowRight size={17} />
            </button>

          </div>

        </div>

      </section>
    </Layout>
  );
}
function DSA() {
  const topics = [
    ["Arrays & Strings", "12 Problems", Code2],
    ["Hashing", "10 Problems", Database],
    ["Linked Lists", "10 Problems", ArrowRight],
    ["Stacks & Queues", "10 Problems", Database],
    ["Trees & BST", "12 Problems", Database],
    ["Graphs", "10 Problems", Database],
    ["Dynamic Programming", "15 Problems", Target],
  ];

  return (
    <Layout>
      <section className="page">

        <p className="eyebrow">DATA STRUCTURES & ALGORITHMS</p>

        <h1>Master DSA step by step</h1>

        <p className="muted">
          Follow a structured roadmap from fundamentals to interview-level problems.
        </p>

        <div className="dsa-grid">

          {topics.map(([title, count, Icon]) => {
            const TopicIcon = Icon as React.ElementType;

            return (
              <div className="dsa-card" key={title as string}>

                <div className="dsa-icon">
                  <TopicIcon size={22} />
                </div>

                <div className="dsa-content">
                  <h3>{title as string}</h3>
                  <span>{count as string}</span>
                </div>

                <Link
                    to={`/dsa/${String(title)
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")}`}
                >
                  <ArrowRight size={18} />
                </Link>

              </div>
            );
          })}

        </div>

      </section>
    </Layout>
  );
}
function Coding() {
  const problems = [
    ["Two Sum", "Arrays", "Easy"],
    ["Valid Parentheses", "Stack", "Easy"],
    ["Binary Search", "Searching", "Easy"],
    ["Reverse Linked List", "Linked List", "Medium"],
    ["Maximum Subarray", "Arrays", "Medium"],
    ["Merge Intervals", "Arrays", "Medium"],
  ];

  return (
    <Layout>
      <section className="page">

        <p className="eyebrow">CODING PRACTICE</p>

        <h1>Build coding confidence</h1>

        <p className="muted">
          Solve placement-style coding problems and improve your problem-solving skills.
        </p>

        <div className="coding-filters">
          <button className="filter active">All</button>
          <button className="filter">Easy</button>
          <button className="filter">Medium</button>
          <button className="filter">Hard</button>
        </div>

        <div className="coding-list">

          {problems.map(([title, topic, difficulty], index) => (
            <div className="coding-card" key={title}>

              <div className="coding-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="coding-info">
                <h3>{title}</h3>

                <div className="coding-meta">
                  <span>{topic}</span>
                  <span className={`difficulty ${difficulty.toLowerCase()}`}>
                    {difficulty}
                  </span>
                </div>
              </div>

              <Link
                to={`/coding/${index + 1}`}
                className="outline practice-button"
              >
                Solve
                <ArrowRight size={15} />
              </Link>

            </div>
          ))}

        </div>

      </section>
    </Layout>
  );
}
function Technical() {
  const subjects = [
    {
      title: "Python",
      description: "Python fundamentals, functions, OOP and problem solving.",
      icon: Code2,
      topics: "12 Topics",
    },
    {
      title: "DBMS & SQL",
      description: "SQL queries, joins, normalization, transactions and indexing.",
      icon: Database,
      topics: "14 Topics",
    },
    {
      title: "Operating Systems",
      description: "Processes, threads, scheduling, memory and deadlocks.",
      icon: LayoutDashboard,
      topics: "10 Topics",
    },
    {
      title: "Computer Networks",
      description: "OSI model, TCP/IP, protocols and networking concepts.",
      icon: Database,
      topics: "10 Topics",
    },
    {
      title: "OOP Concepts",
      description: "Classes, objects, inheritance, polymorphism and abstraction.",
      icon: Code2,
      topics: "8 Topics",
    },
    {
      title: "Data Structures",
      description: "Core data structures frequently asked in interviews.",
      icon: Brain,
      topics: "12 Topics",
    },
  ];

  return (
    <Layout>
      <section className="page">

        <p className="eyebrow">TECHNICAL PREPARATION</p>

        <h1>Strengthen your technical core</h1>

        <p className="muted">
          Revise the subjects commonly tested in placement interviews.
        </p>

        <div className="technical-grid">

          {subjects.map((subject) => {
            const Icon = subject.icon;

            return (
              <div className="technical-card" key={subject.title}>

                <div className="technical-icon">
                  <Icon size={23} />
                </div>

                <h2>{subject.title}</h2>

                <p>{subject.description}</p>

                <div className="technical-bottom">

                  <span>{subject.topics}</span>

                  <Link
  to={`/technical/${subject.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")}`}
  className="technical-study"
>
  Study
  <ArrowRight size={15} />
</Link>

                </div>

              </div>
            );
          })}

        </div>

      </section>
    </Layout>
  );
}
function CodingProblem() {
  const params = useParams();
  const problemId = params?.problemId;

  const problems: Record<string, {
    title: string;
    difficulty: string;
    description: string;
  }> = {
    "1": {
      title: "Two Sum",
      difficulty: "Easy",
      description:
        "Given an array of integers and a target value, return the indices of two numbers that add up to the target.",
    },
    "2": {
      title: "Valid Parentheses",
      difficulty: "Easy",
      description:
        "Given a string containing brackets, determine whether the brackets are correctly balanced.",
    },
    "3": {
      title: "Binary Search",
      difficulty: "Easy",
      description:
        "Given a sorted array and a target value, find the position of the target using binary search.",
    },
    "4": {
      title: "Reverse Linked List",
      difficulty: "Medium",
      description:
        "Reverse a singly linked list and return the new head of the list.",
    },
    "5": {
      title: "Maximum Subarray",
      difficulty: "Medium",
      description:
        "Find the contiguous subarray with the largest possible sum.",
    },
    "6": {
      title: "Merge Intervals",
      difficulty: "Medium",
      description:
        "Merge all overlapping intervals in a collection of intervals.",
    },
  };

  const problem = problems[problemId || "1"] || problems["1"];

  return (
    <Layout>
      <section className="page narrow">

        <Link to="/coding" className="back-link">
          ← Back to Coding
        </Link>

        <div className="problem-header">
          <p className="eyebrow">CODING PROBLEM</p>
          <h1>{problem.title}</h1>

          <span className={`difficulty ${problem.difficulty.toLowerCase()}`}>
            {problem.difficulty}
          </span>
        </div>

        <div className="problem-card">

          <h2>Problem</h2>

          <p>{problem.description}</p>

          <div className="code-editor">
            <div className="editor-top">
              <span>Python</span>
              <span>Demo Editor</span>
            </div>

            <textarea
              defaultValue={`def solution():\n    # Write your solution here\n    pass`}
            />

          </div>

          <div className="problem-actions">
            <button className="secondary">
              Run Code
            </button>

            <button className="primary">
              Submit
            </button>
          </div>

        </div>

      </section>
    </Layout>
  );
}
function TechnicalTopic() {
  const parts = window.location.pathname.split("/");
  const subject = parts[2];
  const topicId = parts[3];

  const topicData: Record<string, string[]> = {
    python: [
      "Variables & Data Types",
      "Conditions & Loops",
      "Functions",
      "Strings",
      "Lists & Tuples",
      "Dictionaries & Sets",
      "OOP Basics",
    ],

    "dbms-sql": [
      "SQL Queries",
      "Joins",
      "GROUP BY & HAVING",
      "Subqueries",
      "Normalization",
      "ACID Properties",
      "Indexes",
    ],

    "operating-systems": [
      "Processes",
      "Threads",
      "CPU Scheduling",
      "Memory Management",
      "Deadlocks",
      "Virtual Memory",
    ],

    "computer-networks": [
      "OSI Model",
      "TCP/IP",
      "HTTP & HTTPS",
      "IP Addressing",
      "DNS",
      "TCP vs UDP",
    ],

    "oop-concepts": [
      "Classes & Objects",
      "Encapsulation",
      "Inheritance",
      "Polymorphism",
      "Abstraction",
      "Interfaces",
    ],

    "data-structures": [
      "Arrays",
      "Linked Lists",
      "Stacks",
      "Queues",
      "Trees",
      "Graphs",
      "Hashing",
    ],
  };

  const topics =
    topicData[subject || "python"] || topicData.python;

  const topic =
    topics[Number(topicId) - 1] || topics[0];

  const [started, setStarted] = useState<number | null>(null);

  const modules = [
    "Understand the key concept",
    "Revise the most important patterns",
    "Solve a beginner-friendly problem",
    "Practice a mock interview question",
  ];

  function startModule(index: number) {
    setStarted(index);
  }

  return (
    <Layout>
      <section className="page">

        <Link
          to={`/technical/${subject}`}
          className="back-link"
        >
          ← Back to {subject}
        </Link>

        <p className="eyebrow">
          TECHNICAL PREPARATION
        </p>

        <h1>{topic}</h1>

        <p className="muted">
          Practice {topic.toLowerCase()} with targeted
          interview-focused revision.
        </p>

        <div className="topic-list">

          {modules.map((module, index) => (
            <div
              className="topic-item"
              key={module}
            >

              <span className="num">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3>{module}</h3>
                <p>Technical learning module</p>
              </div>

              <button
                className="outline"
                onClick={() => startModule(index)}
              >
                {started === index ? "Started" : "Start"}
              </button>

            </div>
          ))}

        </div>

        {started !== null && (
          <div className="study-module">

            <p className="eyebrow">
              MODULE {started + 1}
            </p>

            <h2>{modules[started]}</h2>

            <p>
              You are now studying{" "}
              <strong>{topic}</strong>.
            </p>

            {started === 0 && (
              <div className="study-content">
                <h3>Key Concept</h3>

                <p>
                  Review the fundamental concepts of{" "}
                  {topic} and understand the terminology
                  commonly used in technical interviews.
                </p>

                <ul>
                  <li>Understand the basic definition.</li>
                  <li>Learn the important concepts.</li>
                  <li>Review common interview questions.</li>
                </ul>
              </div>
            )}

            {started === 1 && (
              <div className="study-content">
                <h3>Important Patterns</h3>

                <p>
                  Focus on the concepts and patterns that
                  frequently appear during placement
                  preparation.
                </p>

                <ul>
                  <li>Revise important terminology.</li>
                  <li>Compare related concepts.</li>
                  <li>Practice explaining the concepts.</li>
                </ul>
              </div>
            )}

            {started === 2 && (
              <div className="study-content">
                <h3>Beginner Practice</h3>

                <p>
                  Try solving a simple problem related to{" "}
                  {topic}.
                </p>

                <div className="practice-question">
                  <strong>
                    Interview Practice
                  </strong>

                  <p>
                    Explain the main concept of{" "}
                    {topic} in your own words.
                  </p>
                </div>
              </div>
            )}

            {started === 3 && (
              <div className="study-content">
                <h3>Mock Interview</h3>

                <p>
                  Imagine an interviewer asks you:
                </p>

                <div className="practice-question">
                  <strong>
                    "What do you know about {topic}?"
                  </strong>

                  <p>
                    Try answering the question
                    clearly and confidently.
                  </p>
                </div>
              </div>
            )}

          </div>
        )}

      </section>
    </Layout>
  );
}
function TechnicalSubject() {
  const subject = window.location.pathname.split("/").pop();

  const subjects: Record<string, {
    title: string;
    description: string;
    topics: string[];
  }> = {
    python: {
      title: "Python",
      description: "Prepare Python fundamentals and common placement concepts.",
      topics: [
        "Variables & Data Types",
        "Conditions & Loops",
        "Functions",
        "Strings",
        "Lists & Tuples",
        "Dictionaries & Sets",
        "OOP Basics",
      ],
    },

    "dbms-sql": {
      title: "DBMS & SQL",
      description: "Revise the database concepts frequently asked in interviews.",
      topics: [
        "SQL Queries",
        "Joins",
        "GROUP BY & HAVING",
        "Subqueries",
        "Normalization",
        "ACID Properties",
        "Indexes",
      ],
    },

    "operating-systems": {
      title: "Operating Systems",
      description: "Revise important OS concepts for technical interviews.",
      topics: [
        "Processes",
        "Threads",
        "CPU Scheduling",
        "Memory Management",
        "Deadlocks",
        "Virtual Memory",
      ],
    },

    "computer-networks": {
      title: "Computer Networks",
      description: "Prepare networking concepts commonly asked in placements.",
      topics: [
        "OSI Model",
        "TCP/IP",
        "HTTP & HTTPS",
        "IP Addressing",
        "DNS",
        "TCP vs UDP",
      ],
    },

    "oop-concepts": {
      title: "OOP Concepts",
      description: "Master the four core principles of object-oriented programming.",
      topics: [
        "Classes & Objects",
        "Encapsulation",
        "Inheritance",
        "Polymorphism",
        "Abstraction",
        "Interfaces",
      ],
    },

    "data-structures": {
      title: "Data Structures",
      description: "Revise the fundamental data structures used in programming.",
      topics: [
        "Arrays",
        "Linked Lists",
        "Stacks",
        "Queues",
        "Trees",
        "Graphs",
        "Hashing",
      ],
    },
  };

  const data =
    subjects[subject || "python"] || subjects.python;

  return (
    <Layout>
      <section className="page">

        <Link to="/technical" className="back-link">
          ← Back to Technical
        </Link>

        <p className="eyebrow">TECHNICAL PREPARATION</p>

        <h1>{data.title}</h1>

        <p className="muted">
          {data.description}
        </p>

        <div className="topic-list">

          {data.topics.map((topic, index) => (
            <div className="topic-item" key={topic}>

              <span className="num">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3>{topic}</h3>
                <p>Placement preparation topic</p>
              </div>

            <Link
  to={`/technical/${subject || "python"}/${index + 1}`}
  className="outline"
>
  Study
</Link>

            </div>
          ))}

        </div>

      </section>
    </Layout>
  );
}
function DSATopic() {
  const topicSlug = window.location.pathname.split("/").pop();

  const topicNames: Record<string, string> = {
    "arrays-strings": "Arrays & Strings",
    hashing: "Hashing",
    "linked-lists": "Linked Lists",
    "stacks-queues": "Stacks & Queues",
    "trees-bst": "Trees & BST",
    graphs: "Graphs",
    "dynamic-programming": "Dynamic Programming",
  };

  const title =
    topicNames[topicSlug || "arrays-strings"] ||
    "Arrays & Strings";

  const [started, setStarted] = useState<number | null>(null);

  const modules = [
    "Understand the fundamentals",
    "Learn important patterns",
    "Solve easy problems",
    "Practice interview-level questions",
  ];

  function startModule(index: number) {
    setStarted(index);
  }

  return (
    <Layout>
      <section className="page">

        <Link to="/dsa" className="back-link">
          ← Back to DSA
        </Link>

        <p className="eyebrow">
          DATA STRUCTURES & ALGORITHMS
        </p>

        <h1>{title}</h1>

        <p className="muted">
          Practice {title} concepts commonly used in placement interviews.
        </p>

        <div className="topic-list">

          {modules.map((item, index) => (
            <div
              className="topic-item"
              key={item}
            >

              <span className="num">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3>{item}</h3>
                <p>DSA learning module</p>
              </div>

              <button
                className="outline"
                onClick={() => startModule(index)}
              >
                {started === index ? "Started" : "Start"}
              </button>

            </div>
          ))}

        </div>

        {started !== null && (
          <div className="study-module">

            <p className="eyebrow">
              MODULE {started + 1}
            </p>

            <h2>{modules[started]}</h2>

            <p>
              You are now studying{" "}
              <strong>{title}</strong>.
            </p>

            {started === 0 && (
              <div className="study-content">

                <h3>Fundamentals</h3>

                <p>
                  Start by understanding the basic concepts,
                  terminology and structure of {title}.
                </p>

                <ul>
                  <li>Understand the basic concept.</li>
                  <li>Learn the important terminology.</li>
                  <li>Understand how the data structure works.</li>
                </ul>

              </div>
            )}

            {started === 1 && (
              <div className="study-content">

                <h3>Important Patterns</h3>

                <p>
                  Focus on the common problem-solving patterns
                  used when working with {title}.
                </p>

                <ul>
                  <li>Identify the appropriate pattern.</li>
                  <li>Understand the steps involved.</li>
                  <li>Practice applying the pattern.</li>
                </ul>

              </div>
            )}

            {started === 2 && (
              <div className="study-content">

                <h3>Beginner Problem</h3>

                <p>
                  Try solving a beginner-friendly problem
                  based on {title}.
                </p>

                <div className="practice-question">

                  <strong>
                    Practice Question
                  </strong>

                  <p>
                    Explain how you would approach a simple
                    {` ${title}`} problem before writing code.
                  </p>

                </div>

              </div>
            )}

            {started === 3 && (
              <div className="study-content">

                <h3>Interview Practice</h3>

                <p>
                  Imagine an interviewer asks you:
                </p>

                <div className="practice-question">

                  <strong>
                    "What do you know about {title}?"
                  </strong>

                  <p>
                    Try explaining the concept clearly,
                    including its use cases and important
                    characteristics.
                  </p>

                </div>

              </div>
            )}

          </div>
        )}

      </section>
    </Layout>
  );
}
function Assistant() {
  const [q, setQ] = useState("");

  const [messages, setMessages] = useState<
    { type: "ai" | "you"; text: string }[]
  >([
    {
      type: "ai",
      text: "Hi! I'm Placement AI. I can help you with aptitude, Python, DSA, DBMS, interviews and study planning. What would you like to learn?",
    },
  ]);

  function getAIResponse(question: string) {
    const text = question.toLowerCase();

    if (
      text.includes("aptitude") ||
      text.includes("percentage") ||
      text.includes("profit") ||
      text.includes("average") ||
      text.includes("time and work")
    ) {
      return "For aptitude, start with percentages, ratios, averages, profit & loss, time & work, and time-speed-distance. Practice questions with a timer so you improve both accuracy and speed.";
    }

    if (
      text.includes("python") ||
      text.includes("python code") ||
      text.includes("python programming")
    ) {
      return "For placement preparation, focus on Python basics first: variables, conditions, loops, functions, strings, lists, dictionaries and problem solving. After that, practice small coding problems every day.";
    }

    if (
      text.includes("dsa") ||
      text.includes("data structure") ||
      text.includes("algorithm") ||
      text.includes("array") ||
      text.includes("linked list")
    ) {
      return "For DSA, follow this order: Arrays & Strings → Hashing → Two Pointers → Stack & Queue → Linked List → Trees → Graphs → Dynamic Programming. Start with easy problems and gradually increase difficulty.";
    }

    if (
      text.includes("dbms") ||
      text.includes("sql") ||
      text.includes("database")
    ) {
      return "For DBMS and SQL placements, focus on SELECT queries, WHERE, GROUP BY, HAVING, JOINs, subqueries, aggregate functions, normalization, keys, ACID properties and indexing.";
    }

    if (
      text.includes("interview") ||
      text.includes("hr") ||
      text.includes("resume")
    ) {
      return "For interviews, prepare a short self-introduction, your projects, technical fundamentals, common HR questions and questions related to your resume. Practice explaining your project clearly in 1–2 minutes.";
    }

    if (
      text.includes("study plan") ||
      text.includes("schedule") ||
      text.includes("prepare")
    ) {
      return "A simple daily plan is: 45 minutes aptitude, 60 minutes Python/coding, 45 minutes DSA, 30 minutes technical subjects and 15 minutes interview preparation. Consistency matters more than studying everything at once.";
    }

    if (
      text.includes("placement") ||
      text.includes("job") ||
      text.includes("career")
    ) {
      return "For placements, build four areas together: aptitude, coding/DSA, technical fundamentals and communication. Track your accuracy and practice consistently rather than only solving questions randomly.";
    }

    if (
      text.includes("hello") ||
      text.includes("hi") ||
      text.includes("hey")
    ) {
      return "Hi! I'm ready to help with your placement preparation. You can ask me about Python, DSA, aptitude, SQL, interviews or study plans.";
    }

    return "I can currently help with aptitude, Python, DSA, SQL/DBMS, interviews, placement preparation and study planning. Try asking something specific, such as 'How should I prepare DSA?' or 'Give me a Python study plan.'";
  }

  function send() {
    const question = q.trim();

    if (!question) return;

    const answer = getAIResponse(question);

    setMessages((current) => [
      ...current,
      {
        type: "you",
        text: question,
      },
      {
        type: "ai",
        text: answer,
      },
    ]);

    setQ("");
  }

  return (
    <Layout>
      <section className="page narrow">

        <div className="assistant-head">

          <div className="bot">
            <Bot size={26} />
          </div>

          <div>
            <p className="eyebrow">
              PLACEMENT AI
            </p>

            <h1>AI Assistant</h1>

            <p className="muted">
              Your placement preparation companion
            </p>
          </div>

        </div>

        <div className="chat">

          {messages.map((message, index) => (
            <div
              className={`msg ${message.type}`}
              key={index}
            >
              {message.text}
            </div>
          ))}

        </div>

        <div className="chat-input">

          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                send();
              }
            }}
            placeholder="Ask about Python, DSA, aptitude, SQL..."
          />

          <button
            className="primary"
            onClick={send}
          >
            Send
          </button>

        </div>

        <div className="assistant-suggestions">

          <button onClick={() => setQ("How should I prepare DSA?")}>
            DSA preparation
          </button>

          <button onClick={() => setQ("Give me a Python study plan")}>
            Python study plan
          </button>

          <button onClick={() => setQ("How can I improve aptitude?")}>
            Aptitude tips
          </button>

          <button onClick={() => setQ("What should I prepare for interviews?")}>
            Interview preparation
          </button>

        </div>

      </section>
    </Layout>
  );
}
function Profile() {
  return (
    <Layout>
      <section className="page narrow">

        <p className="eyebrow">
          PROFILE
        </p>

        <h1>Your profile</h1>

        <div className="profile card">

          <div className="avatar large">
            V
          </div>

          <h2>A. Vaishnavi</h2>

          <p className="muted">
            Placement preparation journey
          </p>

          <div className="profile-stats">

            <div>
              <b>7</b>
              <span>Day streak</span>
            </div>

            <div>
              <b>248</b>
              <span>Solved</span>
            </div>

            <div>
              <b>68%</b>
              <span>Readiness</span>
            </div>

          </div>

        </div>

      </section>
    </Layout>
  );
}
function Challenges() {
  const [started, setStarted] = useState<number | null>(null);
  const [completed, setCompleted] = useState<number[]>([]);

  const challenges = [
    {
      title: "7-Day Aptitude Sprint",
      description: "Practice quantitative aptitude and reasoning every day.",
      difficulty: "Beginner",
      tasks: [
        "Number Systems",
        "Percentages",
        "Profit & Loss",
        "Time & Work",
        "Logical Reasoning",
      ],
    },
    {
      title: "Python Problem of the Day",
      description: "Solve a Python problem and improve your coding skills.",
      difficulty: "Easy",
      tasks: [
        "Variables & Data Types",
        "Conditions",
        "Loops",
        "Functions",
        "Lists & Strings",
      ],
    },
    {
      title: "DSA Weekend Challenge",
      description: "Strengthen your problem-solving skills with DSA practice.",
      difficulty: "Intermediate",
      tasks: [
        "Arrays",
        "Strings",
        "Hashing",
        "Linked Lists",
        "Stacks & Queues",
      ],
    },
    {
      title: "SQL Query Challenge",
      description: "Practice SQL queries commonly asked in placement interviews.",
      difficulty: "Intermediate",
      tasks: [
        "SELECT Queries",
        "WHERE & ORDER BY",
        "GROUP BY",
        "JOINs",
        "Subqueries",
      ],
    },
  ];

  function startChallenge(index: number) {
    setStarted(index);
  }

  function completeChallenge(index: number) {
    if (!completed.includes(index)) {
      setCompleted([...completed, index]);
    }
  }

  return (
    <Layout>
      <section className="page">

        <p className="eyebrow">
          PLACEMENT PREP
        </p>

        <h1>Challenges</h1>

        <p className="muted">
          Stay consistent with focused challenges designed for placement preparation.
        </p>

        <div className="challenge-grid">

          {challenges.map((challenge, index) => {

            const isStarted = started === index;
            const isCompleted = completed.includes(index);

            return (
              <div className="challenge-card" key={challenge.title}>

                <div className="challenge-top">

                  <span className="num">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="challenge-level">
                    {challenge.difficulty}
                  </span>

                </div>

                <h2>{challenge.title}</h2>

                <p className="muted">
                  {challenge.description}
                </p>

                <div className="challenge-tasks">

                  {challenge.tasks.map((task, taskIndex) => (
                    <div className="challenge-task" key={task}>
                      <span>
                        {String(taskIndex + 1).padStart(2, "0")}
                      </span>
                      {task}
                    </div>
                  ))}

                </div>

                <button
                  className="primary-button challenge-start"
                  onClick={() => startChallenge(index)}
                >
                  {isStarted ? "Challenge Started" : "Start Challenge"}
                </button>

                {isStarted && (
                  <div className="challenge-progress">

                    <p>
                      Challenge in progress
                    </p>

                    <button
                      className="outline"
                      onClick={() => completeChallenge(index)}
                    >
                      {isCompleted ? "Completed" : "Mark as Completed"}
                    </button>

                  </div>
                )}

              </div>
            );
          })}

        </div>

      </section>
    </Layout>
  );
}
function Generic({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: string[];
}) {
  return (
    <Layout>
      <section className="page">
        <div className="card">
          <div className="section-head">
            <h2>{title}</h2>
          </div>

          {subtitle && <p className="muted">{subtitle}</p>}

          <ul className="generic-list">
            {items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export default function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/practice"
        element={<Practice />}
      />

      <Route
        path="/practice/:type"
        element={<PracticeSession />}
      />
      <Route
  path="/coding"
  element={<Coding />}
/>

<Route
  path="/coding/:problemId"
  element={<CodingProblem />}
/>

<Route
  path="/dsa"
  element={<DSA />}
/>

<Route
  path="/dsa/:topic"
  element={<DSATopic />}
/>

<Route
  path="/technical"
  element={<Technical />}
/>

<Route
  path="/technical/:subject"
  element={<TechnicalSubject />}
/>
<Route
  path="/technical/:subject/:topicId"
  element={<TechnicalTopic />}
/>

      <Route
       path="/challenges" element={<Challenges />} />

      <Route
        path="/ai-assistant"
        element={<Assistant />}
      />

      <Route
        path="/progress"
        element={
          <Generic
            title="Your progress"
            subtitle="Track your preparation across every skill."
            items={[
              "Aptitude — 82%",
              "Coding — 64%",
              "DSA — 58%",
              "Technical — 71%",
            ]}
          />
        }
      />

      <Route
        path="/profile"
        element={<Profile />}
      />

      <Route
        path="*"
        element={
          <Generic
            title="Page not found"
            subtitle="Let's get you back to preparation."
            items={["Go to Dashboard"]}
          />
        }
      />

    </Routes>
  );
}