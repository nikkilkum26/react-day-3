import React from 'react';
function Strike({ data }) {
  let flag=true;
    function clickHandler(){
    
        let field=`I am ${data.name} from ${data.city}`.strike()
        // field.style.setProperty("text-decoration", "line-through")
        document.getElementById(data.id).innerHTML= field;
        
        
        
    }
    return (
        <div>
            <h1 id={data.id} onClick={clickHandler}>I am {data.name} from {data.city}</h1>
        </div>
    )
}
export default Strike