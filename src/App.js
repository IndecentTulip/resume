// App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Main from './Main';
import About from './About';
import Education from './Education';
import Projects from './Projects';
import Experience from './Experience';

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/resume" element={<Main />} />
          <Route path="/" element={<Main />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>
  );
};

export default App;

 
//<div>
//Oleksandr Babenko
//+1 778 814 6839 | aleksandrbabenko02@gmail.com | https://github.com/IndecentTulip | https://github.com/CrunchyCloud
//linkedIn
//Education
//Kwantlen Polytechnic University (KPU)
//Diploma in Computer Information Systems
//British Columbia Institute of Technology (BCIT)
//Technology Entry (TE)
//CCNAv7: Introduction to Networks
//Certificate of Course Completion
//Lyceum Of Information Technology
//HS Diploma
//Logika IT school
//Diploma of Course Completion
//Vancouver, BC
//Dec. 2024
//Vancouver, BC
//Oct. 2022
//Online
//May. 2024
//Ukraine
//Jun. 2022
//Ukraine
//May. 2021
//Projects
//Online-Health-Monitoring-System | [ Flask, React, PostgreSQL, PowerShell, Bash, Git ] October 2024 – December 2024
//• Collaborated with team to Developed system architecture documentation, including Software Requirements
//Specification (SRS), Software Design Description (SDD), and created by myself UML diagrams (Class, Data Flow,
//Use Case, Sequence, Flowchart) to ensure clarity in system design.
//• Used ”GitHub Projects” to manage tasks, track progress via Kanban Boards with team members.
//• Achieving key non-functional requirements, including: search operations (less or equal to 5 seconds for 500 records)
//and report generation (less or equal to 30 seconds for summary reports), to ensure seamless user experience.
//• Designed and implemented Normalized tables schema via PostgreSQL.
//• Used locust and pytest for testing API.
//• Ensuring access control based on the role and type of an account.
//• Built a web portal using React and Flask.
//• Developed algorithms to predict health risks based on historical exam data.
//• Created monthly and yearly health summary and prediction reports, based on patient exam data, to obtain insights
//into patient health trends.
//• Created a setup script that will build a database and run the front end and back end, with PowerShell and Bash.
//• Integrated automated email notifications for abnormal test results.
//TOR-CLI-Routing-Project | [ Python, Git ] November 2024
//•
// Implemented client and server that are using sockets to send encrypted with RSA messages over the Tor network.
//•
// Created research paper about Tor and presentation for explanation.
//• Included ”Lab” that includes steps you need to take to set up the Project.
//Win-Server-Setup-Scripts | [ Powershell, Git ] July 2024 – August 2024
//•
// Automated the setup and configuration of a Windows Server environment, including the installation of critical
//features like Active Directory Domain Services, DHCP, DNS, and File Services using powershell
//• Established Active Directory structure by creating Organizational Units for company, users, and groups, and
//automating user account creation with predefined attributes and belonging to the groups using powershell
//• Implemented AGDLP (Accounts, Global Groups, Domain Local Groups, and Permissions) model for access control
//• Configured DHCP settings by defining IP address scopes and integrating DHCP services with Active Directory for
//dynamic IP address management using powershell
//Field Volunteering
//IT Teaching Assistant
// Sep. 2019 – May. 2021
//Logika IT school
// Ukraine
//• Provided instruction to children on Python fundamentals, including functions, object-oriented programming
//(OOP), and the Pygame library
//Tutor for Students
// Feb. 2023 – Dec. 2024
//Kwantlen Polytechnic University (KPU)
// Vancouver, BC
//• Provided academic support to students in various IT subjects, helping them improve their understanding, grades,
//and study skills.
//Technical Skills
//Languages: Python, C, C++, PostgreSQL, MongoDB, JavaScript, HTML/CSS
//Frameworks: React
//Developer Tools: Git, Docker, Vim, Neovim, Linux
//Concepts: Object-Oriented programming, UML diagrams, ER diagram, Data structures and algorithms
//Libraries: Flask
//</div>

