import React, { useState } from "react";

function App() {
  return <div>

<Folder name="Desktop">
  <Folder name="Music">
    <File name="all_star.mp4"/>
    <File name="express_file.mp4"/>
  </Folder>
  <File name="dog.jpeg"/>
  <File name="cat.png"/>
</Folder>

<Folder name="Applications"/>

  </div>
  
}

const Folder = (props) => {
  const [ isOpen, setIsOpen] = useState(false);
  const {name, children} = props;
  const direction = isOpen ? 'down' : 'right';

const handleClick = () => setIsOpen(!isOpen);


return <div>
  <span onClick={handleClick}>
    <i className="blue folder icon"></i>
    <i className={`caret ${direction} icon`}></i>
    {name}
    </span>
  
    <div style={{margin: '17px'}}>
      {isOpen ? children : null}
    </div>
</div>

};

const File = (props) => {
  const { name } = props;
  const fileExtension = name.split('.')[1];
  const fileIcons = {
    mp4: 'headphones',
    jpeg: 'file image',
    png:'file image outline',
  };

return <div>
    <i className={`${fileIcons[fileExtension]} icon`}></i>
  {name}
</div>

};

export default App;
