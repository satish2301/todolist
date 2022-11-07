
import './App.css';
import React, { useState, useEffect } from 'react';
import Task from './Task.js';
function App() {

     const currentarry = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
     const [tasks, setTask] = useState(currentarry);
     const [title, setTitle] = useState("");


     const [message, setMessage] = useState("");

     const datasubmit = (e) => {
          e.preventDefault();

          setTask([...tasks, { title, message }]);
          setTitle("");
          setMessage("");
     }

     const deletetask = (index) => {

          const filterArr = tasks.filter((val, i) => {
               return i !== index;
          });
          console.log(filterArr);
          setTask(filterArr);
     }

     useEffect(() => {
          localStorage.setItem("tasks", JSON.stringify(tasks));
     }, [tasks]);



     return (
          <div className="to-do-part">

               <div className="to-do-inside drop-shadow-lg ">
                    <div className="heading drop-shadow-xl">
                         <marquee behavior="alternatei"> <h1>TO DO LIST</h1></marquee>
                    </div>

                    <div className="data-entry">
                         <form onSubmit={datasubmit}>
                              <input type="text" placeholder="Tittle" value={title} onChange={(e) => setTitle(e.target.value)} required />

                              <textarea placeholder="Any message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                              <div className="btn-part">
                                   <button className="add-btn">ADD</button>
                              </div>
                         </form>

                         <div className="data-part mt-1">
                              {tasks.map((item, index) =>
                                   (<Task key={index} title={item.title} message={item.message} deletetask={deletetask} index={index} />)

                              )}

                         </div>
                    </div>


               </div>
          </div>
     );
}

export default App;
