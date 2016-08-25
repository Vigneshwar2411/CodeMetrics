import React from 'react';
import FolderExporer from './folderTotal.jsx';
export default class FileList extends React.Component {
  constructor(){
    super();
    var self = this;
    this.state = {
        content:{
          "foldername" : "codeMetrics",
          "version" : "0.3.2",
          "datetime" : "2016-09-08 00:00:01",
          "totallines"  : 200,
          "totalcomments": 50,
          "dependencies" : 10,
          "folders" : [
            {
              "foldername" : "http-server",
              "folders": [
                  {
                    "foldername" : "jsonserver","folders": [],
                    "files": [
                                {"filename": "file1.js","totallines": 10, "totalcomments":5},
                                {"filename": "file2.js","totallines": 10, "totalcomments":5}
                            ]
                 },
                 {
                   "foldername" : "common-ui","folders": [],
                   "files": [
                               {"filename": "header.jsx","totallines": 10, "totalcomments":5},
                               {"filename": "navbar.jsx","totallines": 10, "totalcomments":5}
                           ]
                }
              ],
              "files": [
                {"filename": "httpserver1.js","totallines": 10, "totalcomments":5},
                {"filename": "httpserver2.js","totallines": 10, "totalcomments":5}
              ]
            },

            {
              "foldername" : "rest-server",
              "folders": [],
              "files": [
                {"filename": "restserver1.js","totallines": 10, "totalcomments":5},
                {"filename": "restserver2.js","totallines": 10, "totalcomments":5}
              ]
            }
          ],

          "files" : [
            {"filename": "server.js","totallines": 10, "totalcomments":5},
            {"filename": "style.css","totallines": 10, "totalcomments":5}
          ]
        },
        newOutput : {
          "foldername" : "codeMetrics",
          "version" : "0.3.2",
          "datetime" : "2016-09-08 00:00:01",
          "totallines"  : 200,
          "totalcomments": 50,
          "dependencies" : 10,
          "folders" : [
            {
              "foldername" : "http-server",
              "folders": [
                  {
                    "foldername" : "jsonserver","folders": [],
                    "files": [
                                {"filename": "file1.js","totallines": 20, "totalcomments":25},
                                {"filename": "file2.js","totallines": 10, "totalcomments":2225}
                            ]
                 },
                 {
                   "foldername" : "common-ui","folders": [],
                   "files": [
                               {"filename": "header.jsx","totallines": 10, "totalcomments":5},
                               {"filename": "navbar.jsx","totallines": 10, "totalcomments":5}
                           ]
                }
              ],
              "files": [
                {"filename": "httpserver1.js","totallines": 10, "totalcomments":5},
                {"filename": "httpserver2.js","totallines": 10, "totalcomments":5}
              ]
            },

            {
              "foldername" : "rest-server",
              "folders": [],
              "files": [
                {"filename": "restserver1.js","totallines": 10, "totalcomments":5},
                {"filename": "restserver2.js","totallines": 10, "totalcomments":5}
              ]
            }
          ],

          "files" : [
            {"filename": "server.js","totallines": 10, "totalcomments":5},
            {"filename": "style.css","totallines": 10, "totalcomments":5}
          ]
        }
  }
  //window.obj=this;
  this.chageContent = this.chageContent.bind(this);
}
chageContent(file){

 this.setState({content:file});

}
  render(){
    return(
      <div className="container">
        <div className = "row">
          <div className = "col-sm-6">
            <FolderExporer output = {this.state.newOutput} chage = {this.chageContent}/>
          </div>
          <div className = "col-sm-6">
            <h3>TotalLines : {this.state.content.totallines}</h3>
            <h3>totalcomments : {this.state.content.totalcomments}</h3>
          </div>
        </div>
      </div>
    );
  }
}
