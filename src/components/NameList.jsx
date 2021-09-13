import React from 'react';
import NameListItems from './NameListItems';

 function NameList() {
    return (
        <React.Fragment>
        
          <h1>name list</h1>
          <hr/>
          <NameListItems name ="Ajith" course ="C#"/>
          <NameListItems name = "Saman" course ="VB"/>
          <NameListItems name ="Rangika" course ="JAVA"/>
          <NameListItems name ="Sumith" course ="mango DB"/>
          <NameListItems name ="Nihal" course ="PHP"/>
          
        </React.Fragment>
       
       );
 }

 export default NameList;