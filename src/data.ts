import { Project, Experience, Education, Skill, Internship } from './types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Attendance Management System",
    description: "Developed a web application using SQL for efficient student attendance management. Designed and managed the database to track and update student attendance in real-time, reducing manual effort by 30%.",
    technologies: ["SQL", "Web Development", "Database Design"],
    image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 2,
    title: "Object Detection Using Python",
    description: "Built an object detection system using Python and TensorFlow, capable of identifying and classifying objects in real-time. Fine-tuned pre-trained models (YOLO) to improve detection accuracy by 15% for specific use cases.",
    technologies: ["Python", "TensorFlow", "YOLO", "Computer Vision"],
    image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 3,
    title: "Real-Time Chat Application",
    description: "Developed a real-time chat application using Flutter Flow and Firebase, enabling seamless communication for users.",
    technologies: ["Flutter Flow", "Firebase", "Real-time Database"],
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Data Analyst (Contract)",
    company: "Tech Mahindra Limited",
    location: "Hyderabad, India",
    duration: "2023",
    description: [
      "Collaborated with cross-functional teams to develop and implement data-driven solutions.",
      "Leveraged tools like Crowd Compute Workbench for efficient data management and processing.",
      "Analyzed complex datasets to extract actionable insights for business decision-making."
    ]
  }
];

export const education: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Technology (B.Tech) in Information Technology",
    institution: "NRI Institute of Technology",
    location: "Guntur",
    duration: "2020 - 2024",
    grade: "CGPA: 7.72/10"
  },
  {
    id: 2,
    degree: "Intermediate (MPC)",
    institution: "Sri Chaitanya J.R College",
    location: "Kurnool",
    duration: "2018 - 2020",
    grade: "Percentage: 8.67/10"
  },
  {
    id: 3,
    degree: "Schooling (SSC)",
    institution: "Sri Balaji VN High School",
    location: "Anantapur",
    duration: "2018",
    grade: "Percentage: 10/10"
  }
];

export const skills: Skill[] = [
  { id: 1, name: "Python", category: "programming" },
  { id: 2, name: "SQL", category: "programming" },
  { id: 3, name: "JavaScript", category: "programming" },
  { id: 4, name: "TensorFlow", category: "ai-ml" },
  { id: 5, name: "Keras", category: "ai-ml" },
  { id: 6, name: "OpenCV", category: "ai-ml" },
  { id: 7, name: "HTML", category: "web" },
  { id: 8, name: "CSS", category: "web" },
  { id: 9, name: "JavaScript", category: "web" },
  { id: 10, name: "Flutter Flow", category: "web" },
  { id: 11, name: "Firebase", category: "web" },
  { id: 12, name: "MySQL", category: "database" },
  { id: 13, name: "Firebase", category: "database" },
  { id: 14, name: "GitHub", category: "other" },
  { id: 15, name: "Problem-solving", category: "other" },
  { id: 16, name: "Adaptability", category: "other" },
  { id: 17, name: "Team Collaboration", category: "other" },
  { id: 18, name: "Troubleshooting", category: "other" }
];

export const internships: Internship[] = [
  {
    id: 1,
    title: "Cyber Security Intern",
    company: "Supraja Technologies",
    location: "Vijayawada",
    description: "Gained hands-on experience in troubleshooting and diagnosing cybersecurity issues."
  },
  {
    id: 2,
    title: "Python Programming Intern",
    company: "PySpiders",
    location: "Hyderabad",
    description: "Acquired skills in Python programming, focusing on problem-solving and infrastructure services."
  }
];

export const interests = [
  "Exploring AI chatbots",
  "Solving complex problems and puzzles (e.g., Rubik's Cube)",
  "Photography and image processing using AI tools"
];

export const achievements = [
  "Mentored juniors on project development, earning a Mentor Certification from NRI Institute of Technology"
];

export const contactInfo = {
  phone: "+91 6305666858",
  email: "naveenbasireddy2003@gmail.com",
  location: "Anantapur, India",
  linkedin: "https://www.linkedin.com/in/naveen-kumar-reddy-basireddy/",
  github: "https://github.com/naveenbasireddy"
};