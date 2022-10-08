import React from 'react'
import ProgressBar from 'react-customizable-progressbar';
function Progress(props) {
    return (
        
        <div className="item ">
        
            <ProgressBar
                radius={100}
                progress={props.progress}
                strokeWidth={18}
                strokeColor={props.color}
                strokeLinecap="square"
                trackStrokeWidth={18}
                transition = {'1.5s ease'}
                trackTransition= {'2s ease'}
                initialAnimation= 'true'
                trackStrokeColor = {'white'}
                children = {
                <div >
                   <h4>{props.progress}%</h4> 
                </div>
                }
            >
                
            </ProgressBar>
        </div>
    )
}


export default Progress;