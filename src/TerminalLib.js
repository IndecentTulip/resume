
class Terminal{

  README =`
                          ______ ______
                         /      Y      \\
                        / ~~ ~~ | ~~ ~  \\
                       / ~ ~ ~~ | ~~~ ~~ \\    
                      /________.|.________\\   
                     \`---------\`-'---------'
Here are some linux commands you can use :)
- ls
  (show you "files" that you can interact with)
- cd [foldername] 
  (open a "folder", you can use "cd" & "cd .." to return to main page)
- view/cat [filename]
  (open a "file" and show it's contence)
- clear
  (clear the screen/terminal)
- help 
  (will show this message again)
`

  READMEPhone =`Here are some commands you can use :)
- ls
  (show you "files" that you can interact with)
- cd [foldername] 
  (open a "folder", you can use "cd" & "cd .." to return to main page)
- view/cat [filename]
  (open a "file" and show it's contence)
- clear
  (clear the screen/terminal)
- help 
  (will show this message again)
`

  READMEAdd
  README2 = `Don't forget that you can use 
"cd" to go back to the "main page" where you came from !!!`

  ps1 = "you@webbrowser:"
  regexNavigate = /^[cC][dD] [a-zA-Z].*/;
  regexNavigateHome = /^[cC][dD]$/;
  regexNavigateHome2 = /^[cC][dD] ..$/;
  regexDisplay = /^[lL][sS]$/;
  regexClear = /^[cC][lL][eE][aA][rR]$/;
  regexHelp = /^[hH][eE][lL][pP]$/;
  regexOpen = /^[cC][aA][tT] [a-zA-Z].*$/;
  regexOpen2 = /^[vV][iI][eE][wW] [a-zA-Z].*$/;
  contence = ``
  
  constructor(path, folders, files, displayQueue, setDisplayQueue, enqueue){
    this.ps1 += path
    if (!(folders instanceof Map)) {
      throw new Error('Expected a Map for folders');
    }
    this.folders = folders
    if (!(files instanceof Map)) {
      throw new Error('Expected a Map for files');
    }
    this.files = files

    this.displayQueue = displayQueue
    this.setDisplayQueue = setDisplayQueue
    this.enqueue = enqueue

    for (const key of this.folders.keys()) {
      this.contence += key + `\n`
    }

    for (const key of this.files.keys()) {
      this.contence += key + `\n`
    }

    this.READMEAdd = 
    <div> 
      <p style={{color: 'white'}}>white - means a file (can open with "cat")</p>
      <p style={{color: '#579db6'}}>blue - means a folder (can go to it with "cd")</p>
    </div>

  }

  finalRender(inputValue, prevRender){
    return (
      <>
        <p className="PS1">{this.ps1}</p> 
        <span>$</span><span> {inputValue}</span> 
        <>{prevRender}</>
      </>
    )
  }

  renderLs(){

    return this.contence.split('\n').map((line, index) => {
      const trimmedLine = line.trim();
      
      if (this.folders.has(trimmedLine)) {
        return (
          <p key={index} className='folder'>
            {line}
          </p>
        );
      }
      return (
        <p key={index} className="file">
          {line}
        </p>
      );

    });
  };

  renderCat(filename){
    if (this.files.has(filename)){
      const contence = this.files.get(filename)
      return (<p> {contence} </p>)
    }
  };

  renderDisplayQueue(){
    return this.displayQueue.map((item, index) => {
      return (
        <pre key={index}>
          {item}
        </pre>
      );
    });
  };

  interpretCommand(inputValue, navigate, setInputValue,){


    if (this.regexNavigate.test(inputValue)){
      const path = inputValue.replace(/^cd /, "")
      if (this.folders.has(path)){
        navigate("/" + path);
      }
    }
    if (this.regexNavigateHome.test(inputValue)){
      navigate("/resume")
    }
    if (this.regexNavigateHome2.test(inputValue)){
      navigate("/resume")
    }
    if (this.regexDisplay.test(inputValue)){
      this.enqueue(this.finalRender(inputValue,this.renderLs()))
    }
    if (this.regexOpen.test(inputValue)){
      const fileName = inputValue.replace(/^cat /, "")
      if (this.files.has(fileName)){
        this.enqueue(this.finalRender(inputValue,this.renderCat(fileName)))
      }
    }
    if (this.regexOpen2.test(inputValue)){
      const fileName = inputValue.replace(/^view /, "")
      if (this.files.has(fileName)){
        this.enqueue(this.finalRender(inputValue,this.renderCat(fileName)))
      }
    }
    if (this.regexClear.test(inputValue)){
      this.setDisplayQueue([])
    }
    if (this.regexHelp.test(inputValue)){
      this.enqueue(this.finalRender(inputValue, this.README))
      this.enqueue(this.READMEAdd)
    }



    setInputValue("")
  };



}

export default Terminal;
