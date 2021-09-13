import React from 'react';
import moment from 'moment'


let NameListItems = (props) =>{
    return(
       
        <li> 
            <p> <img src={props.avatar} />{props.name}</p>
            <p>city : {props.city}</p>
            <p>email :{props.email}</p>
            <p>Birthday :{moment(props.birtday).format('YYYY-MM-DD')}</p>
            

        </li>
        
    )
};

export default NameListItems