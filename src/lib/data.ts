export const personalInfo = {
  name: "Abrham Mulugeta",
  role: "Ethical Hacker & Security Researcher",
  location: "Addis Ababa, Ethiopia",
  email: "abmuhu10@gmail.com",
  github: "https://github.com/xp1oiter",
  linkedin: "https://www.linkedin.com/in/abrham-mulugeta/",
};

export const experience = [
  {
    company: "AASTU Cyber Security Club",
    location: "Addis Ababa, Ethiopia",
    position: "Technical Member & Social Media Manager",
    period: "Jan 2025 - Present",
    achievements: [
      "Created educational cybersecurity content and CTF challenges for members.",
      "Managed social media outreach and organized technical awareness campaigns.",
      "Contributed to internal training and collaboration on student-led security projects.",
    ],
  },
  {
    company: "TryHackMe",
    location: "Online",
    position: "Learner",
    period: "Sep 2024 - Present",
    achievements: [
      "Gained knowledge in both Red Team and Blue Team operations.",
      "Improved understanding of networking, web application security, and basic exploit development.",
    ],
  },
  {
    company: "Independent Research",
    location: "Remote",
    position: "Bug Bounty Hunter",
    period: "Dec 2024 - Present",
    achievements: [
      "Performed reconnaissance and testing on Ethiopian government (.gov.et, .edu.et) and private websites.",
      "Reported security issues to responsible authorities and improved personal hands-on skills in ethical hacking.",
    ],
  },
];

export const skills = {
  categories: [
    {
      name: "Red Team",
      icon: "🎯",
      description: "Offensive security tools and techniques",
      skills: [
        {
          name: "Reconnaissance",
          tools: ["Nmap", "Gobuster", "Dirbuster", "WhatWeb"],
        },
        {
          name: "Web Application Testing",
          tools: ["Burp Suite", "SQLMap", "XSS Hunter", "Firefox Dev Tools"],
        },
        {
          name: "Exploitation",
          tools: ["Metasploit", "Hydra", "Nikto", "Commix"],
        },
      ],
    },
    {
      name: "Blue Team",
      icon: "🛡️",
      description: "Defensive security and monitoring",
      skills: [
        {
          name: "Network Monitoring",
          tools: ["Wireshark"],
        },
        {
          name: "SIEM & Log Analysis",
          tools: ["Splunk", "ELK Stack"],
        },
        {
          name: "Endpoint Security",
          tools: ["Wazuh"],
        },
      ],
    },
  ],
};

export const education = [
  {
    institution: "University of the People",
    location: "Online, USA",
    degree: "BSc in Computer Science",
    period: "Jan 2025 - Jun 2028",
    achievements: [],
  },
  {
    institution: "Addis Ababa Science and Technology University",
    location: "Addis Ababa, Ethiopia",
    degree: "BSc in Electrical and Computer Engineering",
    period: "Sep 2023 - Jun 2028",
    achievements: [],
  },
];

export const projects = [
  {
    title: "CTF Submission Bot",
    //github: "https://github.com/xp1oiter",
    description: [
      "Created a Telegram bot for submitting CTF solutions and flag verifications.",
      "Used for internal cybersecurity competitions at AASTU.",
      "Features include flag checking, leaderboard, and challenge listings.",
    ],
  },
];

export const awards = [
  {
    title: "Certified SOC Analyst",
    issuer: "Cyber Talent",
    date: "Apr 2025",
    type: "Certified",
    verification: "https://verify.cybertalent.gov.et/cert/CSA-Abrham-Mulugeta",
  },
  {
    title: "Ethical Hacking: Web Applications",
    issuer: "Pluralsight",
    date: "Mar 2025",
    type: "Course",
    verification: "https://app.pluralsight.com/profile/",
  },
  {
    title: "ISC2 Candidate Member",
    issuer: "ISC2",
    date: "Apr 2025",
    type: "Professional Badge",
    verification: "https://www.credly.com/badges/abrham-isc2-candidate",
  },
];
