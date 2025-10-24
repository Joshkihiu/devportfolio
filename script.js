const input = document.getElementById("input");
const output = document.getElementById("output");

let history = [];
let historyIndex = -1;
let currentDirectory = "~";

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = input.value.trim();
    output.innerHTML += `<div><span class="prompt">ghost@dev:${currentDirectory}$</span> ${command}</div>`;
    handleCommand(command.toLowerCase());
    history.push(command);
    historyIndex = history.length;
    input.value = "";
    window.scrollTo(0, document.body.scrollHeight);
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    if (historyIndex > 0) {
      historyIndex--;
      input.value = history[historyIndex];
    }
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    if (historyIndex < history.length - 1) {
      historyIndex++;
      input.value = history[historyIndex];
    } else {
      historyIndex = history.length;
      input.value = "";
    }
  } else if (e.key === "Tab") {
    e.preventDefault();
    const cmd = input.value.toLowerCase();
    const commands = ["help", "about", "skills", "skills-frontend", "skills-backend", "skills-database", "skills-security", "skills-all", "projects", "experience", "blog", "contact", "cv", "clear", "ls", "whoami", "date", "pwd", "cd", "cat", "echo", "uname", "neofetch", "tree", "history", "sudo", "exit"];
    const matches = commands.filter(c => c.startsWith(cmd));
    if (matches.length === 1) {
      input.value = matches[0];
    } else if (matches.length > 1) {
      print(matches.join("  "));
    }
  }
});

function print(msg) {
  output.innerHTML += `<div>${msg.replace(/\n/g, "<br>")}</div>`;
}

function handleCommand(cmd) {
  const args = cmd.split(" ");
  const baseCmd = args[0];

  switch (baseCmd) {
    case "help":
    case "ls":
      print(`
Available commands:
<span style="color:#00ffcc">Portfolio Commands:</span>
  about       - Who I am
  skills      - All my technical skills
  skills-frontend  - Frontend skills
  skills-backend   - Backend skills
  skills-database  - Database & cloud skills
  skills-security  - Cybersecurity skills
  projects    - Featured work
  experience  - Education & certs
  blog        - Latest blog posts
  contact     - How to reach me
  cv          - Download my resume

<span style="color:#00ffcc">Linux Commands:</span>
  whoami      - Display current user
  date        - Show current date/time
  pwd         - Print working directory
  cd          - Change directory
  cat         - Display file contents
  echo        - Print text
  uname       - System information
  neofetch    - System info display
  tree        - Directory tree
  history     - Command history
  clear       - Clear terminal
  exit        - Close terminal
      `);
      break;

    case "about":
      print(`I'm Joshua Muhoro, a Computer Science major at Kirinyaga University and a cybersecurity enthusiast. I specialize in secure, scalable applications and I love combining software dev with ethical hacking and UI/UX design.`);
      break;

    case "skills":
      print(`
<span style="color:#00ffcc">Programming Languages:</span>
JavaScript     ██████████████████░░ 92%
Python         ████████████████░░░░ 80%
Java           ███████████████░░░░░ 75%
C++            ██████████████░░░░░░ 70%
Dart           ██████████████████░░ 90%
Kotlin         ████████████████░░░░ 80%
TypeScript     █████████████████░░░ 85%
SQL            ████████████████░░░░ 80%
Bash/Shell     ███████████████░░░░░ 75%

<span style="color:#00ffcc">Frontend Development:</span>
React          ██████████████████░░ 92%
Flutter        ████████████████████ 95%
HTML/CSS       ███████████████████░ 93%
Tailwind CSS   █████████████████░░░ 88%
Redux          ████████████░░░░░░░░ 65%
Material-UI    █████████████████░░░ 85%

<span style="color:#00ffcc">Backend Development:</span>
Node.js        █████████████████░░░ 88%
Express.js     ████████████████░░░░ 82%
Django         ██████████████░░░░░░ 70%
REST APIs      ████████████████░░░░ 83%
GraphQL        █████████████░░░░░░░ 68%

<span style="color:#00ffcc">Database & Cloud:</span>
MongoDB        ████████████████░░░░ 82%
MySQL          ███████████████░░░░░ 78%
PostgreSQL     ██████████████░░░░░░ 72%
Firebase       █████████████████░░░ 85%
AWS            ████████████░░░░░░░░ 62%
Docker         ███████████████░░░░░ 73%

<span style="color:#00ffcc">Cybersecurity:</span>
Penetration Testing    █████████████████░░░ 85%
Network Security       ████████████████░░░░ 80%
Cryptography           ██████████████░░░░░░ 70%
Ethical Hacking        ████████████████░░░░ 82%
Security Auditing      ███████████████░░░░░ 77%

<span style="color:#00ffcc">Tools & Technologies:</span>
Git/GitHub     ███████████████████░ 90%
VS Code        ████████████████████ 95%
Linux          ████████████████░░░░ 83%
Figma          ██████████████████░░ 87%
Postman        █████████████████░░░ 86%
Webpack        ██████████████░░░░░░ 72%

<span style="color:#00ffcc">CS Fundamentals:</span>
Data Structures        ████████████████░░░░ 82%
Algorithms             ███████████████░░░░░ 78%
OOP                    █████████████████░░░ 88%
System Design          ██████████████░░░░░░ 73%
Computer Networks      ████████████████░░░░ 80%
Operating Systems      ███████████████░░░░░ 76%

<span style="color:#00ffcc">Soft Skills:</span>
Problem Solving        ███████████████████░ 92%
Team Collaboration     ████████████████░░░░ 85%
Communication          █████████████████░░░ 87%
Project Management     ███████████████░░░░░ 78%

<span style='color:#00ffcc'>For specific categories, try:</span>
  skills-frontend  skills-backend  skills-database  skills-security
      `);
      break;

    case "skills-frontend":
    case "skills-fe":
      print(`
<span style="color:#00ffcc">Frontend Development Skills:</span>
React.js       ██████████████████░░ 92%
Flutter        ████████████████████ 95%
HTML5          ███████████████████░ 93%
CSS3           ███████████████████░ 93%
JavaScript     ██████████████████░░ 92%
TypeScript     █████████████████░░░ 85%
Tailwind CSS   █████████████████░░░ 88%
Bootstrap      ████████████████░░░░ 82%
Redux          ████████████░░░░░░░░ 65%
Material-UI    █████████████████░░░ 85%
Responsive Design     ██████████████████░░ 90%
Accessibility (a11y)  ███████████████░░░░░ 75%
      `);
      break;

    case "skills-backend":
    case "skills-be":
      print(`
<span style="color:#00ffcc">Backend Development Skills:</span>
Node.js        █████████████████░░░ 88%
Express.js     ████████████████░░░░ 82%
Python         ████████████████░░░░ 80%
Django         ██████████████░░░░░░ 70%
Java           ███████████████░░░░░ 75%
REST APIs      ████████████████░░░░ 83%
GraphQL        █████████████░░░░░░░ 68%
Authentication █████████████████░░░ 86%
API Security   ████████████████░░░░ 84%
Microservices  ████████████░░░░░░░░ 65%
      `);
      break;

    case "skills-database":
    case "skills-db":
      print(`
<span style="color:#00ffcc">Database & Cloud Skills:</span>
MongoDB        ████████████████░░░░ 82%
MySQL          ███████████████░░░░░ 78%
PostgreSQL     ██████████████░░░░░░ 72%
Firebase       █████████████████░░░ 85%
Redis          ████████████░░░░░░░░ 63%
AWS            ████████████░░░░░░░░ 62%
Docker         ███████████████░░░░░ 73%
Kubernetes     ██████████░░░░░░░░░░ 52%
Database Design       ████████████████░░░░ 80%
Query Optimization    ███████████████░░░░░ 75%
      `);
      break;

    case "skills-security":
    case "skills-cyber":
      print(`
<span style="color:#00ffcc">Cybersecurity Skills:</span>
Penetration Testing    █████████████████░░░ 85%
Network Security       ████████████████░░░░ 80%
Web App Security       ████████████████░░░░ 83%
Cryptography           ██████████████░░░░░░ 70%
Ethical Hacking        ████████████████░░░░ 82%
Security Auditing      ███████████████░░░░░ 77%
Vulnerability Assessment  ████████████████░░░░ 81%
OWASP Top 10          █████████████████░░░ 88%
Kali Linux            ████████████████░░░░ 82%
Metasploit            ███████████████░░░░░ 76%
Burp Suite            ████████████████░░░░ 80%
      `);
      break;

    case "skills-all":
      handleCommand("skills");
      break;

    case "projects":
      print(`
<span style="color:#00ffcc">Featured Projects:</span>
1. E-Commerce Mobile App
   Tech: Flutter + Firebase + Stripe
   Desc: Full-featured shopping app with payment integration

2. Cybersecurity Dashboard
   Tech: React + Node.js
   Desc: Real-time threat detection and monitoring

3. Business Analytics Platform
   Tech: React + D3.js
   Desc: Data visualization and reporting dashboard

4. Flutter Development Kit
   Tech: Flutter + GitHub Actions
   Desc: Automated development workflow toolkit

5. React Portfolio Website
   Tech: React + Tailwind CSS
   Desc: Smooth animations and responsive design

6. API Security Framework
   Tech: Node.js + JWT
   Desc: Secure REST API with authentication
      `);
      break;

    case "experience":
      print(`
<span style="color:#00ffcc">Education & Experience:</span>
🎓 Kirinyaga University
   Computer Science (2022 – Present)

🎓 Cybersecurity Courses
   Online platforms (2023 – Present)

🎖 Hackathons
   Participated in multiple dev competitions

🛡 Hack The Box
   Earned certs in pentesting and security
      `);
      break;

    case "contact":
      print(`
<span style="color:#00ffcc">Contact Information:</span>
📍 Location: Nairobi, Kenya
📞 Phone:    0727867559
📧 Email:    joshuamuhoro06@gmail.com
🔗 GitHub:   https://github.com/Joshkihiu
      `);
      break;

    case "blog":
      print(`
<span style="color:#00ffcc">Latest Blog Posts:</span>
2024-01-15 - Advanced Flutter State Management with Riverpod
2024-01-10 - Cybersecurity Best Practices for Web Developers
2024-01-05 - Building Scalable React Applications
      `);
      break;

    case "cv":
    case "resume":
      print("📄 Resume download not set up yet. Check back soon!");
      break;

    case "whoami":
      print("ghost");
      break;

    case "date":
      const now = new Date();
      print(now.toString());
      break;

    case "pwd":
      print(`/home/ghost${currentDirectory === "~" ? "" : "/" + currentDirectory}`);
      break;

    case "cd":
      if (args.length === 1 || args[1] === "~") {
        currentDirectory = "~";
        print("");
      } else if (args[1] === "..") {
        currentDirectory = "~";
        print("");
      } else if (args[1] === "projects") {
        currentDirectory = "~/projects";
        print("");
      } else if (args[1] === "skills") {
        currentDirectory = "~/skills";
        print("");
      } else {
        print(`bash: cd: ${args[1]}: No such file or directory`);
      }
      updatePrompt();
      break;

    case "cat":
      if (args.length === 1) {
        print("cat: missing file operand");
      } else if (args[1] === "about.txt") {
        handleCommand("about");
      } else if (args[1] === "skills.txt") {
        handleCommand("skills");
      } else if (args[1] === "contact.txt") {
        handleCommand("contact");
      } else {
        print(`cat: ${args[1]}: No such file or directory`);
      }
      break;

    case "echo":
      if (args.length > 1) {
        print(args.slice(1).join(" "));
      } else {
        print("");
      }
      break;

    case "uname":
      if (args[1] === "-a") {
        print("Linux ghost-portfolio 5.15.0-kali x86_64 GNU/Linux");
      } else {
        print("Linux");
      }
      break;

    case "neofetch":
      print(`
<span style="color:#00ffcc">          ___</span>          ghost@portfolio
<span style="color:#00ffcc">         (.. |</span>         -----------------
<span style="color:#00ffcc">         (<> |</span>         OS: Portfolio Linux
<span style="color:#00ffcc">        / __  \\</span>        Host: GitHub Pages
<span style="color:#00ffcc">       ( /  \\ /|</span>       Kernel: 5.15.0-kali
<span style="color:#00ffcc">      _/\\ __)/_)</span>       Uptime: Since 2022
<span style="color:#00ffcc">      \\/-____\\/</span>        Shell: terminal.js
                         Theme: Matrix Green
                         CPU: JavaScript V8
                         Memory: Unlimited
      `);
      break;

    case "tree":
      print(`
.
├── about.txt
├── skills.txt
├── projects/
│   ├── ecommerce-app/
│   ├── cyber-dashboard/
│   └── analytics-platform/
├── experience.txt
├── contact.txt
└── blog/
    ├── flutter-riverpod.md
    ├── cybersecurity-practices.md
    └── scalable-react.md
      `);
      break;

    case "history":
      if (history.length === 0) {
        print("No commands in history");
      } else {
        history.forEach((cmd, index) => {
          print(`  ${index + 1}  ${cmd}`);
        });
      }
      break;

    case "sudo":
      if (args.length === 1) {
        print("usage: sudo command");
      } else if (args[1] === "rm" && args[2] === "-rf" && args[3] === "/") {
        print("Nice try! 😄 But I'm not going to delete my portfolio.");
      } else {
        print("[sudo] password for ghost: ");
        setTimeout(() => {
          print("Sorry, try again.");
        }, 1000);
      }
      break;

    case "exit":
    case "quit":
      print("Goodbye! 👋");
      setTimeout(() => {
        print("Just kidding! You can't escape that easily. Try 'clear' instead.");
      }, 1500);
      break;

    case "clear":
    case "cls":
      output.innerHTML = "";
      break;

    case "":
      break;

    default:
      print(`bash: ${baseCmd}: command not found. Type 'help' or 'ls' for available commands.`);
  }
}

function updatePrompt() {
  const promptElements = document.querySelectorAll(".prompt");
  promptElements.forEach(el => {
    el.textContent = `ghost@dev:${currentDirectory}$`;
  });
}

// Focus input on page load
window.addEventListener("load", function() {
  input.focus();
});

// Refocus input when clicking anywhere on terminal
document.querySelector(".terminal").addEventListener("click", function() {
  input.focus();
});
