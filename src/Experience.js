import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Terminal from './TerminalLib.js'

const Experience = () => {

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("")

  const path = "~/experience"
  const folders = new Map();
  const files = new Map();
  files.set("volunteering", `hello this is placeholder`);

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
  );

};

export default Experience;

