import React, {useState} from 'react'
// import PropTypes from 'prop-types'


export default function Textfrom(props) {
  
  const handleOnchange = (event)=>{
    // console.log('Onchange');
    setText(event.target.value)
    
  }
  const handleUpclick = ()=>{
    // console.log('Uppercase was Clicked ' + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Convert to Uppercase","success");
  }
  const handleLoclick = ()=>{
    let newText2 = text.toLowerCase();
    setText(newText2);
    props.showAlert("Convert to Lowercase","success");
  }
  
  const handletoclear =()=>{
    let text = '';
    setText(text);
    props.showAlert("Clear text successfully","primary");
  }
  
  const handletocopy =()=>{
    let text = document.getElementById('mybox')
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied Text Successfully","success");
  }


  const [text, setText] = useState('Enter the text here');

  return (
   <>
  <div className='container' style={{color :props.mode==='dark'?'white':'black'}}>
  <h1>{props.Heading}</h1>
  <div className="mb-3">
    
    <textarea className="form-control" id="mybox" style={{backgroundColor : props.mode === 'dark'?'gray':'white',color : props.mode === 'dark'?'white':'black',cursor:'black'}} value={text} rows="8" onChange={handleOnchange}></textarea>
  </div>
  <button className='btn btn-primary mx-2' onClick={handleUpclick}> Convert To Uppercase</button>
  <button className='btn btn-primary' onClick={handleLoclick} > Convert To Lowercase</button>
  <button className='btn btn-primary mx-2' onClick={handletoclear} > Clear Text</button>
  <button className='btn btn-primary mx-2' onClick={handletocopy} > Copy Text</button>
  <div className='mb-3' >
    <h2>Your Text Summary</h2>
    <p>{text.length} Charaters and {text.split(" ").length} Words</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>
  </div> 
  </>
  )
}
