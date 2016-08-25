import React from 'react';
import File from './file.jsx';
export default class FileList extends React.Component {
  render(){
    var change = this.props.change;
    return(
      <div>
      {this.props.fileList.map(
          function (file) {
            return (
              <a onClick = {(event) => change(file)}>
              <File filename = {file.filename}/>
              </a>
            );
          }
        )}
      </div>
    );
  }
}
