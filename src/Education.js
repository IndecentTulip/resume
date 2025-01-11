import './Education.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Education = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("")


  const regexNavigate = /^cd [a-zA-Z].*/;


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();  // Prevent page reload
    console.log('Input Value:', inputValue);  // Log the input value to the console (you can use it as needed)

    if (regexNavigate.test(inputValue)){
      const path = inputValue.replace(/^cd /, "")
      navigate("/" + path);
    }

  };

  return (
    <div className='PageContainer'>
      <form onSubmit={handleSubmit}>
        
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

export default Education;

