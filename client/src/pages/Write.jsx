import React,{useState} from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState('');
  console.log(value);
  return (
    <div className="write">
      <div className="content">
      <input type='text' placeholder='Title' />
      <div className="editorContainer">
      <ReactQuill theme="snow" value={value} onChange={setValue} />;
      </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Visibility:</b> Public 
          
          </span>
          <input style={{display:'none'}}type="file" name="" id="file" />
          <label htmlFor='file'>Upload Image </label>
          <div className="buttons">
            <button>Save as draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <input type="radio" name="cat" value="art" />
        </div>
      </div>
    </div>
  );
};

export default Write;