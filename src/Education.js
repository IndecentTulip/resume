import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Terminal from './TerminalLib.js'

import highSchoolImg from './assets/High_school.jpg'
import kpulogo from './assets/kpu_logo.png'
import bcitlogo from './assets/BCIT-logo-.png'
import ciscologo from './assets/cisco-logo.png'

const Education = () => {

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("")

  const path = "~/education"
  const folders = new Map();
  const files = new Map();
  const highSchool = 
<div>
  <img src={highSchoolImg} alt="high school photo" width="400" height="400" />
  <p>* Lyceum Of Information Technology</p>
  <p>Jun. 2022</p>
</div>
  files.set("highSchool", highSchool);

  // TODO ADD an ability to download a transcript
  const universities =
<div>
  <img src={kpulogo} alt="KPU logo" width="100" height="100" />
  <p>* Kwantlen Polytechnic University (KPU)</p>
  <p style={{color: '#ff9700'}}>Diploma in Computer Information Systems</p>
  <p>Jan. 2023 -- Dec. 2024</p>
  <p>GPA: 3.2</p>
  <img src={bcitlogo} alt="BCIT logo" width="100" height="100" />
  <p>* British Columbia Institute of Technology (BCIT)</p>
  <p style={{color: '#ff9700'}}>Technology Entry (TE) </p>
  <p>Jul. 2022  -- Oct. 2022</p>
</div>

  files.set("universities", universities);

  // TODO ADD an ability to download a certificat conformation 
  const certification =
<div>
  <img src={ciscologo} alt="cisco logo" width="100" height="50"/>
  <p style={{color: '#ff9700'}}>CCNAv7: Introduction to Networks</p>
  <p>May. 2024</p>
</div>
  files.set("certification", certification);

  const [displayQueue, setDisplayQueue] = useState([]);
  const enqueue = (item) => {
    setDisplayQueue(prevQueue => [...prevQueue, item]);
  };
  const dequeue = () => {
    setDisplayQueue(prevQueue => prevQueue.slice(1));
  };

  const terminal = new Terminal(path, folders, files, displayQueue, setDisplayQueue, enqueue)

  const location = useLocation();
  useEffect(() => {
    console.log('URL changed to:', location.pathname);
      enqueue(terminal.README2)
  }, [location]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();  
    console.log('Input Value:', inputValue);

    terminal.interpretCommand(inputValue, navigate, setInputValue);

  };

  useEffect(() => {
    if (displayQueue.length > 3){
      dequeue()
    }
  }, [handleSubmit]);



  return (

    <div>
    <div className='Cat'> </div>
    <div className='PageContainer'>

      {terminal.renderDisplayQueue()}

      <p className='PS1'>{terminal.ps1}</p>
      <form onSubmit={handleSubmit} className='TerminalInput'>
        <span>$</span>
        <input 
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter command"
        />
      </form>
    </div>
    </div>
  );

};

export default Education;

