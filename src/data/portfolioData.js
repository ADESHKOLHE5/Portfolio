export const profile = {
  name: 'Adesh Kolhe',
  role: 'Full Stack Java Developer',
  tagline: 'Building scalable, production-ready systems with Java, Spring Boot & React.',
  dob: 'Oct 28, 1999',
  location: 'Pune, Maharashtra',
  phone: '+91 8999384372',
  email: 'aadeshkolhe17@gmail.com',
  languages: 'Hindi, Marathi, English',
  github: 'https://github.com/ADESHKOLHE5',
  linkedin: 'https://www.linkedin.com/in/adeshkolhe5',
  summary:
    'I am a Full Stack Java Developer with hands-on experience building web applications using Java, Spring Boot, React, and SQL. I specialize in designing RESTful APIs, integrating databases, and implementing secure authentication across microservices architectures.',
  summaryExtra:
    'Eager to contribute to scalable, production-ready systems and continuously looking for opportunities to grow in full-stack engineering — from database schema design all the way to polished React UIs.',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const aboutCards = [
  { label: 'Full Name', value: profile.name },
  { label: 'Date of Birth', value: profile.dob },
  { label: 'Location', value: profile.location },
  { label: 'Phone', value: profile.phone },
  { label: 'Email', value: profile.email, span: true },
  { label: 'Languages', value: profile.languages, span: true },
]

export const skillGroups = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'SQL', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['Spring Boot', 'Spring Security', 'Spring Cloud Gateway', 'Microservices', 'React', 'Material UI'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'IntelliJ', 'VS Code', 'Maven', 'Postman'],
  },
  {
    title: 'Other Skills',
    skills: ['REST APIs', 'MVC Architecture', 'Microservices Architecture', 'API Design (OpenAPI/Swagger)'],
  },
]

export const projects = [
  {
    name: 'StayEase',
    problem:
      'Tenants faced high brokerage and difficulty finding reliable PG/hostel/apartment options in Pune.',
    action:
      'Built a full-stack platform using Java, Spring Boot, MySQL, MongoDB, React (MUI), and Spring Security across 4 microservices with real-time availability, wishlist, AI suggestions, and secure login.',
    result:
      'Enabled direct tenant–owner bookings and occupancy tracking — example: rooms reached 4/5 occupancy.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'MongoDB', 'React', 'MUI', 'Spring Security'],
    repo: 'https://github.com/ADESHKOLHE5/StayEase.git',
  },
  {
    name: 'Connect2Play',
    problem: 'Local players struggled to find and join nearby sports teams and book turf slots easily.',
    action:
      'Developed a community platform using Java, Spring Boot, MySQL, and React that lists local teams, manages join requests, and displays real-time turf availability.',
    result: 'Made it simple for local players to discover teams and book turfs without manual coordination.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'React'],
    repo: '#',
  },
  {
    name: 'Back2Decor',
    problem:
      'Bakeries needed an efficient way to procure bulk packaging directly from suppliers to cut costs and complexity.',
    action:
      'Built an e-commerce platform using React.js, Material UI, and JSON Server with role-based authentication and full CRUD dashboards for admins and users.',
    result:
      'Streamlined supplier discovery and bulk ordering with advanced filtering and wishlist features.',
    stack: ['React', 'Material UI', 'JSON Server'],
    repo: 'https://github.com/ADESHKOLHE5/Back2Decor.git',
  },
  {
    name: 'City Complaints',
    problem: 'Citizens lacked a simple, trackable way to report civic issues like potholes and garbage.',
    action:
      'Implemented a microservices backend using Java, Spring Boot, MySQL, MongoDB, and Spring Cloud Gateway (4 services: Complaints, Users, Comments, Notifications) with gateway security and an admin panel.',
    result:
      'Delivered a complaint workflow with status tracking (Pending/Resolved), media-supported reports, and area/category filtering.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'MongoDB', 'Spring Cloud Gateway'],
    repo: 'https://github.com/ADESHKOLHE5/CityComplaints1.git',
  },
  {
    name: 'EcoRide',
    problem: 'Riders and drivers needed a lightweight way to offer and book shared rides without external services.',
    action:
      'Built a console-based ride-sharing application in Core Java emphasizing OOP and robust exception handling to manage rides, bookings, and driver operations.',
    result:
      'Enabled reliable ride creation, search, booking, and booking-history tracking with validation for edge cases.',
    stack: ['Core Java', 'OOP'],
    repo: 'https://github.com/ADESHKOLHE5/EcoRide.git',
  },
]

export const education = [
  {
    school: 'Dr. Babasaheb Ambedkar Technological University, Lonere',
    degree: 'Bachelor of Technology (B.Tech), Computer Engineering',
    meta: 'GPA: 6.9',
    period: 'Jan 2021 — Jan 2024',
  },
  {
    school: 'Government Polytechnic, Aurangabad',
    degree: 'Diploma, Information Technology',
    meta: 'GPA: 65.18%',
    period: 'Jan 2017 — Jan 2019',
  },
]

export const certifications = [
  { title: 'Full Stack Development with GenAI Honour Program', issuer: 'NIIT', date: 'Apr 2026' },
]
