import React from "react";
import './App.css';
import useStorage from "./hooks/useStorage";

function App() {
  const [index, inputName, handleChange, onClick] = useStorage();

  return(
    <div>
    <div className="listName listStudent">
      <p>学生一覧 : [Huyen, Hoa, Hung, Long]</p>
    </div>
    <div className="listStudent" >
    検索名前 :&nbsp;
    <input onChange={handleChange} />
    <button className="myButton" onClick={onClick}>確定</button>
    </div>
    
    
    <div className="listStudent">検索名前: {inputName}</div>

    <div className="listStudent">
      位置: {
        index === -1 ? (
          <a></a>
        ) : (
          index === 0 ? (
            <a>NaN</a>
          ) : (
            <a>{index}</a>
          )
        )
      }
    </div>
  </div>
  );
}

export default App;
