import { BotMessageSquare, BatteryCharging, Fingerprint, ShieldHalf, PlugZap, GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "Sudha",
    company: "Sharadamba Independent Pre-University College",
    image: user1,
    text: "iEvaluation has completely transformed how we handle student assessments at Sharadamba PU College. The AI agent's ability to instantly evaluate exams and provide detailed feedback has not only saved us hours of work but also improved the overall efficiency of our grading process.",
  },
  {
    user: "Naveen",
    company: "Sharadamba Independent Pre-University College",
    image: user2,
    text: "With iEvaluation, we've been able to streamline our entire evaluation workflow. The accuracy and speed of the AI agent in assessing assignments and exams have allowed us to focus more on teaching and less on paperwork, making the process much more productive.",
  },
  {
    user: "Suma",
    company: "Siddaganga Institute of Technology",
    image: user3,
    text: "The AI-powered iEvaluation agent has significantly improved our exam evaluation system at Siddaganga Institute of Technology. Its ability to provide instant results and real-time analytics on student performance has enhanced both faculty and student experiences alike.",
  },
  {
    user: "Kavita",
    company: "Siddaganga Institute of Technology",
    image: user4,
    text: "iEvaluation has been a game-changer for our academic assessments. It has simplified the grading process, reduced manual effort, and provided insights that help us better understand student performance and areas of improvement.",
  },
  {
    user: "Vidya",
    company: "Siddaganga Institute of Technology",
    image: user5,
    text: "Implementing iEvaluation in our workflow has been one of the best decisions we’ve made. The real-time evaluation and feedback have greatly improved how we manage exams and assignments, ensuring quick and accurate results every time.",
  },
  {
    user: "Sheela",
    company: "Siddaganga Institute of Technology",
    image: user6,
    text: "iEvaluation has revolutionized our approach to assessments. The AI-driven agent ensures seamless, error-free evaluations while providing us with meaningful data to enhance student learning and academic outcomes. It's been a valuable tool for our faculty.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "On-demand Vertical AI Agents",
    description:
      "Provides tailored automation for tasks like exams, grant management, and student services, enhancing efficiency across all departments.",
  },
  {
    icon: <Fingerprint />,
    text: "Drag-and-Drop Interface",
    description:
      "Allows faculty to seamlessly move and organize student responses into designated grading areas, simplifying and speeding up the evaluation process.",
  },
  {
    icon: <ShieldHalf />,
    text: "NLP Based Interactive and Customizable Avatar",
    description:
      "Offers personalized assistance, enabling natural conversations and tailored experiences for users across various university workflows.",
  },
  {
    icon: <BatteryCharging />,
    text: "Analytics Dashboard",
    description:
      "Analytics Dashboard provides instant evaluation of student exams, assignments, and projects, delivering immediate insights and feedback to both students and faculty.",
  },
  {
    icon: <PlugZap />,
    text: "Faculty Collaboration",
    description:
      "Faculty collaboration tools enable seamless teamwork on grants, research projects, and academic initiatives, fostering efficient communication and joint success.",
  },
  {
    icon: <GlobeLock />,
    text: "Student Recommendations",
    description:
      "Personalized suggestions help students focus on areas of improvement. Students can track their performance over time, making learning more targeted and effective.",
  },
];

export const checklistItems = [
  {
    title: "Automated Grading Made Effortless",
    description:
      "Instantly evaluate exams, assignments, and projects with AI-powered precision.",
  },
  {
    title: "Real-Time Feedback to Improve Learning",
    description:
      "Provide students with immediate feedback to enhance their performance and understanding.",
  },
  {
    title: "AI-Driven Insights for Faculty Efficiency",
    description:
      "Streamline the evaluation process with AI, reducing the manual effort and saving valuable time.",
  },
  {
    title: "Collaborative Assessment Across Department TAs and Faculties",
    description:
      "Enable faculty to work together with TAs seamlessly on grading and feedback, fostering a consistent evaluation process.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "1 AI Agent",
      "10 Evaluation",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pay-Pro",
    price: "$0.5",
    features: [
      "1 AI Agent",
      "Pay by Evaluation",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$40",
    features: [
      "Multiple AI Agents",
      "Unlimited Evaluation",
      "High Performance Analytics",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];