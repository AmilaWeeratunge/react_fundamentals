import React from 'react';
import NameListItems from './NameListItems';

 function NameList() {

    const namelist ={
      "name": {
        "title": "mr",
        "first": "brad",
        "last": "gibson"
      },
      "location": {
       
        "city": "kilcoole",
        
        
        },
        "email": "brad.gibson@example.com",
        "dob": {
          "date": "1993-07-20T09:44:18.674Z",
          "age": 26
        },
        "picture": {
          
          "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
          
        },
    };
    return (
        <React.Fragment>
        
          <h1>name list</h1>
          <hr/>
          <NameListItems 
          name ={namelist.name.title + ' ' + namelist.name.first + ' ' + namelist.name.last}
          city ={namelist.location.city}
          email={namelist.email}
          birtday = {namelist.dob.date}
          avatar= {namelist.picture.medium}
          />
          
          
        </React.Fragment>
       
       );
 }

 export default NameList;