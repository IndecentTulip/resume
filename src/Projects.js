import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Terminal from './TerminalLib.js'

const Projects = () => {

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("")

  const path = "~/projects"
  const folders = new Map();
  const files = new Map();
  files.set("helth_monitoring_sys", `THIS IS PLACEHOLDER, CONTENT ABOUT THE PROJECT WILL BE ADDED "SOON", you can see more on my github`);
  files.set("tor_cli", `THIS IS PLACEHOLDER, CONTENT ABOUT THE PROJECT WILL BE ADDED "SOON", you can see more on my github`);
  files.set("htmx+React+Golang_ecomerse", `THIS IS PLACEHOLDER, CONTENT ABOUT THE PROJECT WILL BE ADDED "SOON", THIS ONE IS STILL IN PROGRESS, you can see more on my github`);

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

export default Projects;

