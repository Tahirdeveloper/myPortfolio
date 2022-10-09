import React from 'react';
 function SkillCard(props) {
    return (
         <div>
              <div class="card" style={{width: 270}}>
                   <img src={props.imgSrc} class="card-img-top" alt="..." />
                   <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.description}</p>
                        <a href="#" class="btn btn-info">{props.name}</a>
                   </div>
              </div>
         </div>
    )
}
export default SkillCard;