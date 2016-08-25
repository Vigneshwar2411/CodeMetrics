import React from 'react';
import FileList from './fileList.jsx'
export default class Folder extends React.Component {
  constructor(){
    super();
    this.state = {
      display :"none",
      toggle :["glyphicon glyphicon-menu-right","glyphicon glyphicon-menu-down"]
    };
  }
  toggleDisplay(){
    var state = this.state.display;
    if(state == "none"){
      this.setState({display:"block"});
    }
    else{
      this.setState({display:"none"});
    }
  }
  render(){
    var state = this.state.display;
    var icon = this.state.toggle[1];
    if(state == "none"){
      icon = this.state.toggle[0];
    }

    var change = this.props.chage;
    return(
      <div className = "container" key={this.props.folder.foldername}>
        <div>
          <span className={icon} onClick = {this.toggleDisplay.bind(this)}></span>
          <i className="fa fa-folder" aria-hidden="true" style = {{paddingLeft:"10px",paddingRight:"10px",color:"orange"}}></i>
          <span>{this.props.folder.foldername}</span>
        </div>
        <div style = {{display:state}}>
          {this.props.children}
          <FileList fileList = {this.props.folder.files} change = {change}/>
        </div>
      </div>
    );
  }
}
