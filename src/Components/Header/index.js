import React  from 'react';
import './style.css'

function index ({ headerPrimary, headerSecondary } ){
   return (
                   <div className="row data">
                       <div className="col">
                           {headerPrimary}
                       </div>
                       <div className="col">
                           {headerSecondary}
                       </div>
                   </div>
               );
}
export default index 