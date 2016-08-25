import React from 'react';
import FolderList from './folderList.jsx';
export default class Folder extends React.Component {
  render(){
    return(
      <div>
        <FolderList folders = {this.props.folderList} chage = {this.props.chage}/>
      </div>
    );
  }
}
