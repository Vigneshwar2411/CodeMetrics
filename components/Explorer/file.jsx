import React from 'react';
export default class Folder extends React.Component {
  render(){
    return(
      <div>
        <i className="fa fa-file-code-o" aria-hidden="true" style = {{paddingLeft:"40px",paddingRight:"10px",color:"#3333ff"}}></i>
        <span>{this.props.filename}</span>
      </div>
    );
  }
}
