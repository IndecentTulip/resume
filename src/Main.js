import './Main.css';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Main = () => {
  const ls = 
`
ls
aboutme
education
projects
experience
test
`
  const test =
`
hello this is placeholder
`


  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("")
  const [isShowingLs, setIsShowingLs] = useState(false);

  const [displayQueue, setDisplayQueue] = useState([]);
  const enqueue = (item) => {
    setDisplayQueue(prevQueue => [...prevQueue, item]);
  };
  const dequeue = () => {
    setDisplayQueue(prevQueue => prevQueue.slice(1));
  };

  const is_a_folder = new Map();
  is_a_folder.set("aboutme", true);
  is_a_folder.set("education", true);
  is_a_folder.set("projects", true);
  is_a_folder.set("experience", true);

  const is_a_file = new Map();
  is_a_file.set("test", test);


  const regexNavigate = /^cd [a-zA-Z].*/;
  const regexNavigateHome = /^cd$/;
  const regexDisplay = /^ls$/;
  const regexClear = /^clear$/;
  const regexOpen = /^cat [a-zA-Z].*$/;

  const renderLs = () => {
    return ls.split('\n').map((line, index) => {
      const trimmedLine = line.trim();
      
      if (is_a_folder.has(trimmedLine)) {
        return (
          <p key={index} style={{ color: 'lightblue' }}>
            {line}
          </p>
        );
      }

      return <p key={index}>{line}</p>;
    });
  };

  const renderCat = (contence) => {
    return (<p> {contence} </p>)
  };

  useEffect(() => {
    if (displayQueue.length > 3) {
      dequeue();  
    }
  }, [displayQueue]); 


  const renderDisplayQueue = () => {
    return displayQueue.map((item, index) => {
      return (
        <pre>
        {item}
        </pre>
      );
    });
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();  // Prevent page reload
    console.log('Input Value:', inputValue);  // Log the input value to the console (you can use it as needed)

    if (regexNavigate.test(inputValue)){
      const path = inputValue.replace(/^cd /, "")
      if (is_a_folder.has(path)){
        navigate("/" + path);
      }
    }
    if (regexNavigateHome.test(inputValue)){
      navigate("/resume")
    }
    if (regexDisplay.test(inputValue)){
      enqueue(renderLs())
    }
    if (regexOpen.test(inputValue)){
      const fileName = inputValue.replace(/^cat /, "")
      if (is_a_file.has(fileName)){
        console.log(is_a_file.get(fileName))
        enqueue(renderCat(is_a_file.get(fileName)))
      }
    }
    if (regexClear.test(inputValue)){
      setDisplayQueue([])
    }

    setInputValue("")

  };

  return (
    <div className='PageContainer'>

      {renderDisplayQueue()}

      <p>you@webbrowser:~</p>
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

