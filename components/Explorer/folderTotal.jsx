import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import Folder from './folder.jsx';
import Manager from './manager.jsx';
export default class FolderTotal extends React.Component {
  render(){
    return(
      <Folder folder ={this.props.output} chage = {this.props.chage}>
        <Manager folderList = {this.props.output.folders} chage = {this.props.chage}/>
      </Folder>
    );

  }

}
