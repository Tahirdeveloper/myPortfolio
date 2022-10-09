import React from 'react';

function Buttons(props) {
     return (
          <div>
               <button className="btn btn-info text-white">{props.name}</button>

          </div>
     )
}

export function Buttons2(props) {
     return (
          <div>
               <button className="btn btn-outline-info text-white" >{props.name}</button>

          </div>
     )
}



export default Buttons;