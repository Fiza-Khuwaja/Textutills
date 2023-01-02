  import React, {useState}from 'react'

  export default function TextForm(props) {
      
      const handleUpClick = ()=>{
      //   console.log("Uppercase was clicked"+ text);
          let newText = text.toUpperCase();
          setText(newText)
          props.showAlert("Converted to UpperCase! " , "success");
      }
      const handleLoClick = ()=>{
          //   console.log("Uppercase was clicked"+ text);
            let newText = text.toLowerCase();
            setText(newText)
            props.showAlert("Converted to LowerrCase! " , "success");
        }
        const handClearText = ()=>{
          //   console.log("Uppercase was clicked"+ text);
            let newText = '';
            setText(newText)
            props.showAlert("Text has been cleared! " , "success");
        }
      const handleOnChange = (event)=>{
        //  console.log("OnChange");
          setText(event.target.value)
      }
      const handleCopy=()=>{
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied! " , "success");

      }
      const handleExtraSpaces = ()=>{
        let newText=text.split(/[  ]+/);
        setText(newText.join(""))
        props.showAlert("Extra spaces has been removed! " , "success");
      }
      const [text, setText]=useState('');
    return (
      <>
      <div  className='container'style={{color:props.mode==='dark'?'white':'black'}}>
          <h1>{props.heading}</h1>
  <div class="mb-3">
    {/* <label for="myBox" class="form-label">Example textarea</label> */}
    <textarea className="form-control" value={text} onChange={handleOnChange}style={{backgroundColor:props.mode==='dark'?'grey':'white' , color:props.mode==='dark'?'white':'black' }} id="myBox" rows="8">
    </textarea>
  </div>
  <button class="btn btn-primary mx-1" type="submit" onClick={handleUpClick} >Convert to UpperCase</button>
  <button class="btn btn-primary mx-1" type="submit" onClick={handleLoClick} >Convert to LowerCase</button>
  <button class="btn btn-primary mx-1" type="submit" onClick={handClearText} >Clear text</button>
  <button class="btn btn-primary mx-1" type="submit" onClick={handleCopy} >Copy Text </button>
  <button class="btn btn-primary mx-1" type="submit" onClick={handleExtraSpaces} >Remove Extra Spaces </button>

      </div>
    
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} character</p>
            <p>{0.008*text.split(" ").length}Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
      </>
    )
  }
