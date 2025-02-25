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

  const readme =
<div>
  <p style={{color: '#00ff00'}}>Hello, I'm Oleksandr Babenko</p>
  <p style={{color: '#ff9700'}}>My technical skills are:</p>
  <p>* Languages: Python, C, C++, PostgreSQL, MongoDB, JavaScript, HTML/CSS</p>
  <p>* Frameworks: React</p>
  <p>* Developer Tools: Git, Docker, Vim, Neovim, Linux</p>
  <p>* Concepts: Object-Oriented programming, UML diagrams, ER diagram, Data structures and algorithms</p>
  <p>* Libraries: Flask, Echo, HTMX</p>
  <p style={{color: '#ff9700'}}>You can contact me via:</p>
  <p>* Mobile Phone: +1 778 814 6839</p>
  <p>* Email: <a href="aleksandrbabenko02@gmail.com">aleksandrbabenko02@gmail.com</a></p>
  <p>* Github Accounts: <a href="https://github.com/IndecentTulip">https://github.com/IndecentTulip</a> & <a href="https://github.com/CrunchyCloud">https://github.com/CrunchyCloud</a></p>
  <p>* LinkedIn: <a href="https://www.linkedin.com/in/oleksandr-babenko-72a5541a8</">https://www.linkedin.com/in/oleksandr-babenko-72a5541a8</a></p>
</div>
  files.set("README", readme);

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
    const userAgent = window.navigator.userAgent;
    const isMobileDevice = /Mobi|Android/i.test(userAgent);
    if (!helpMessage){
      if (isMobileDevice){
        enqueue(terminal.READMEPhone)
      }else{
        enqueue(terminal.README)
      }
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
    // TODO add an ability to click on Cat and play animation where it shows hearts
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

export default Main;

