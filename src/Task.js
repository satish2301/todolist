import React from 'react';

const Task=({title,message,deletetask,index})=>{
	return(

      <>
        <fieldset className="border mt-2" >
                           <legend>{title}</legend>
                           <div className="show-data">
                           
                           <p className="store">{message}</p>
                           <button className="remove" onClick={()=>deletetask(index)}>-</button>
                           </div>
         </fieldset>
      </>
		);
}

export default Task;