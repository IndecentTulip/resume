import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Terminal from './TerminalLib.js'

const Main = () => {

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("")

  const path = "~"
  const folders = new Map();
  folders.set("aboutme", true);
  folders.set("education", true);
  folders.set("projects", true);
  folders.set("experience", true);

  const files = new Map();
  files.set("README", `Hello, I'm Oleksandr Babenko
<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
My technical skills are:
* Languages: Python, C, C++, PostgreSQL, MongoDB, JavaScript, HTML/CSS
* Frameworks: React
* Developer Tools: Git, Docker, Vim, Neovim, Linux
* Concepts: Object-Oriented programming, UML diagrams, ER diagram,
Data structures and algorithms
* Libraries: Flask
<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
You can contact me via:
* Mobile Phone: +1 778 814 6839
* Email: aleksandrbabenko02@gmail.com
* Github Accounts: https://github.com/IndecentTulip & https://github.com/CrunchyCloud
* LinkedIn: https://www.linkedin.com/in/oleksandr-babenko-72a5541a8
<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
`);

  const [displayQueue, setDisplayQueue] = useState([]);
  const enqueue = (item) => {
    setDisplayQueue(prevQueue => [...prevQueue, item]);
  };
  const dequeue = () => {
    setDisplayQueue(prevQueue => prevQueue.slice(1));
  };

  const terminal = new Terminal(path, folders, files, displayQueue, setDisplayQueue, enqueue)

  const [helpMessage, setHelpMessage] = useState(false);
  window.onload = function() {
    if (!helpMessage){
      enqueue(terminal.README)
      enqueue(terminal.READMEAdd)
      setHelpMessage(true)
    }
  };

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

export default Main;

