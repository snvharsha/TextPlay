import React,{useState} from 'react'

export default function TextForm(props) {
    
    const [text,setText]=useState(" ");
    const handleUpclick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("UpperCase is enabled","success");
    }
    const handleloclick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("LowerCase is enabled","success");
    }
    const handleSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("RemoveExtraSpace is enabled","success");
    }
    const handleCopy=()=>{
        let newText=document.getElementById("floatingTextarea");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied to clipboard","success");
    }
    const handleOnchange=(event)=>{
        setText(event.target.value);
    }
    const handleClear=()=>{
        setText("");
        props.showAlert("ClearText is enabled","success");
    }
  return (
    <>
    <div style={{color: props.mode==='light'?'black':'white'}}>
          <h2>{props.heading}</h2>
       <div className="mb-3" >
            <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'#404040':'white',color:props.mode==='dark'?'white':'black'}} id="floatingTextarea" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1 my-2' onClick={handleUpclick}>Convert to UpperCase</button>
        <button className='btn btn-secondary mx-1 my-2' onClick={handleloclick}>Convert to LowerCase</button>
        <button className='btn btn-info mx-1 my-2' onClick={handleSpace}>Remove Spaces</button>
        <button className='btn btn-danger mx-1 my-2' onClick={handleClear}>Clear Text</button>
        <button className='btn btn-primary mx-1 my-2' onClick={handleCopy}>Copy Text</button>

    </div>
    <div className="container my-2"  style={{color: props.mode==='dark'?'white':'black'}}>    
    <h2>Text summary</h2>
    <p>{text.split(" ").filter((element)=>{return element.length!==0;}).length} words & {text.length} characters </p>
    <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0;}).length } Minutes read</p>
    <div className="previw my-2">
        <h3>Preview</h3>
        {text.length>0?text:'Enter the text to preview'}
    </div>
    </div>
    </>
  )
}


// in class based components we can use say this.state="some state" but in function based components we use hooks like const [count,setCount]=useState(0);