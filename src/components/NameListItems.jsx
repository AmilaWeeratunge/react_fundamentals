import React from 'react';


let NameListItems = (props) =>{
    return(
       
        <li> {props.name} - current course is {props.course}</li>
        
    )
};

export default NameListItems