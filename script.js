const input = document.getElementById("input");
const output = document.getElementById("output");

let history = [];
let historyIndex = -1;

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = input.value.trim();
    output.innerHTML += `<div><span class="prompt">ghost@dev:~$</span> ${command}</div>`;
    handleCommand(command.toLowerCase());
    history.push(command);
    historyIndex = history.length;
    input.value = "";
    window.scrollTo(0, document.body.scrollHeight);
  } else if (e.key === "ArrowUp") {
    if (historyIndex > 0) {
      historyIndex--;
      input.value = history[historyIndex];
    }
  } else if (e.key === "ArrowDown") {
    if (historyIndex < history.length - 1) {
      historyIndex++;
      input.value = history[historyIndex];
    } else {
      input.value = "";
    }
  }
});

function print(msg) {
  output.innerHTML += `<div>${msg.replace(/\n/g, "<br>")}</div>`;
}

function handleCommand(cmd) {
  switch (cmd) {
    case "help":
      print(`
Available commands:
about       - Who I am
skills      - My top skills
projects    - Featured work
experience  - Education & certs
blog        - Latest blog posts
contact     - How to reach me
cv          - Download my resume (coming soon)
clear       - Clear the terminal
      `);
      break;

    case "about":
      print(`I'm Joshua Muhoro, a Computer Science major at Kirinyaga University and a cybersecurity enthusiast. I specialize in secure, scalable applications and I love combining software dev with ethical hacking and UI/UX design.`);
      break;

    case "skills":
      print(`
Flutter: 95%
Dart: 90%
React: 92%
Node.js: 88%
Firebase: 85%
Cybersecurity: 85%
UI/UX: 90%
Kotlin: 80%
      `);
      break;

    case "projects":
      print(`
E-Commerce Mobile App - Flutter + Firebase + Stripe
Cybersecurity Dashboard - Real-time threat detection (React + Node)
Business Analytics Platform - React + D3.js
Flutter Development Kit - Flutter + GitHub Actions
React Portfolio Website - Smooth animations (React + Tailwind)
API Security Framework - Secure API with JWT (Node.js)
      `);
      break; 
      
    case "ls":
      print(`
about       - Who I am
skills      - My top skills
projects    - Featured work
experience  - Education & certs
blog        - Latest blog posts
contact     - How to reach me
cv          - Download my resume (coming soon)
clear       - Clear the terminal
      `);
      break;

      
    case "experience":
      print(`
🎓 Kirinyaga University — Computer Science (2022–Now)
🎓 Cybersecurity Courses — Online platforms (2023–Now)
🎖 Hackathons — Participated in multiple dev competitions
🛡 Hack The Box — Earned certs in pentesting and security
      `);
      break;

    case "contact":
      print(`
📍 Nairobi, Kenya
📞 0727867559
📧 joshuamuhoro06@gmail.com
🔗 GitHub: https://github.com/Joshkihiu
      `);
      break;

    case "blog":
      print(`
2024-01-15 - Advanced Flutter State Management with Riverpod
2024-01-10 - Cybersecurity Best Practices for Web Developers
2024-01-05 - Building Scalable React Applications
      `);
      break;

    case "cv":
      print("📄 Resume download not set up yet. Want me to add it?");
      break;

    case "clear":
      output.innerHTML = "";
      break;

    case "":
      break;

    default:
      print(`❌ Command not found: ${cmd} — type 'help' to see what you can do.`);
  }
}
