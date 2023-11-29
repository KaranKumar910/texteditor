import React from 'react'

function Alert(props) {

    // const capitilize = (word)=>{
    //     const lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase()+lower.slice(1);
    // }
    // {capitilize(props.alert.type)}
  return (
    
    props.alert &&
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>Success</strong>: {props.alert.msg}
        
    </div>
    
  )
}

export default Alert
