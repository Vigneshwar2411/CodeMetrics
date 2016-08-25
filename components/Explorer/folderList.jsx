import React from 'react';
import Folder from './folder.jsx';
import Manager from './manager.jsx';
export default class FolderList extends React.Component {
  render(){
    var x = this.props.chage;
    return(
      <div>
      {this.props.folders.map(
          function (folder,key) {
            return (
              <Folder folder = {folder} chage = {x}>
                <Manager folderList = {folder.folders} chage = {x}/>
              </Folder>
            );
          }
        )}
      </div>
    );
  }
}
