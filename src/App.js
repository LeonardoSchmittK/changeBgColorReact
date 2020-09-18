import React, { Component } from "react";


class ChangeColor extends React.Component{
  constructor(){
   super()
   this.state={
     color:'#fafafa'
   }
  }
 handleChange(event){
    this.setState({
     color:event.target.value
    })
 } 




  render(){


   const styleContainerInput={
    width:400,
    height:400,
    background:this.state.color, 
    // border:'1px solid grey',
    borderRadius:'50%',
    margin:'auto',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    position:'relative',
    boxShadow:'inset 0 10px 70px #d6d2d2'
  }
  const styleTextColor={
    position:'absolute',
    fontFamily:'cursive',
  }
   return (
    <div style={styleContainerInput}>
     <h1 style={styleTextColor}>{this.state.color}</h1>
       <input type='color' value={this.state.color} style={{margin:'auto',width:150,height:150,padding:10}} onChange={this.handleChange.bind(this)} />
       
       {/* <h1 style={}> {window.document.body.style.backgroundColor=this.state.color}</h1> */}
    </div>
          
    )
  }
}

 function App() {
 return(
   <ChangeColor />
 )
}

export default App