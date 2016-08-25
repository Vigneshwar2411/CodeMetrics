import React from 'react';
import {Link} from 'react-router';
import MainAppBar from '../AppBar/index.jsx';
import {List, ListItem} from 'material-ui/List';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import ActionSearch from 'material-ui/svg-icons/action/search';
import {Tabs, Tab} from 'material-ui/Tabs';
import Divider from 'material-ui/Divider';

import CodeMetrics from '../CodeMetrics/index.jsx';
import Comments from '../Comments/index.jsx';
import Functions from '../Functions/index.jsx';

const iconStyles = {
  margin: 30,
};

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  tabs:{
    margin:0,padding:0,border:0,borderLeft:1,borderStyle:'solid',borderColor:'grey',height:'99vh'
  },
  tabdivs:{
    padding:10
  }
};

var win = $(window);
var doc = $(document);
win.scroll(function(){
  console.log("Scrolled");
})
export default class Dashboard extends React.Component{
  constructor(props,context){
    super(props,context);
    this.state={
      projectdata: [],tabindex:0,flag:true,count:0
    }
    console.log("Inside Dashboard Constructor");
    console.log("Project Name",this.props.params.name);
    console.log("Project Version",this.props.params.pversion);


    console.log("Document Height:",doc.height());
    console.log("Window Height:",win.height());
  }

  componentDidMount(){
    $.ajax({
      url: '/api/getproject/'+this.props.params.name+'/'+this.props.params.pversion,
      type: 'GET',
      contentType : 'application/json',
      success : function(data){
          console.log("Specific Project retrieved Successfully From Server");
          this.setState({
            projectdata : this.state.projectdata.concat(data)
          },function(){
            console.log("Project Data:",this.state.projectdata);
            console.log("Project Data:",this.state.projectdata[0].files);
            console.log("Project Data:",typeof(this.state.projectdata[0].files));
          })
      }.bind(this)
    });
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object
    }
  } // Used to provide property validation.Currently we are saying that we need a context prop of type "React.PropTypes.object"

  handleActive(tab,tabname) {
    console.log("Tab name is",tabname);
    this.setState({
      tabname: tabname
    })
    if(this.state.flag){
      alert(`Please select a particular file on the left pane for details`);
    }else{
      console.log("Inside handleActive for Tabs",this.state.flag);
    }
  }

  selectList(file){
    console.log("Selected File is",file);
    var outerThis = this;
    // this.state.projectdata[0].files.map(function(data){
    //   if(data.FileName===file){
    //     outerThis.setState({
    //       selectFileData: data
    //     },function(){
    //       console.log("Selected File data is",this.state.selectFileData,this.state.count);
    //     })
    //   }
    // });
    this.setState({
      tabindex: 1 , flag: false , selectFileData : file
    })
  }


  render (){
    if(this.state.projectdata.length<=0)
    {return(
      <div>
        <MainAppBar page="dashboard"/>
        <div className="container-fluid" >
            <div className="row" style={{paddingTop:'64px'}}>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4" >
                    <div className="col-lg-6 col-md-6 col-sm-6" style={{margin:0,padding:0,border:0}}>
                      <TextField hintText="Enter Name of a file" floatingLabelText="Search Files" />
                      </div>
                    <div className="col-lg-6 col-md-6 col-sm-6" style={{margin:0,padding:0,border:0}}>
                    <span style={{cursor:'pointer'}}><ActionSearch style={iconStyles} color={blue500}/></span>
                    </div>

                  <List>
                    <Subheader style={{fontSize:25}}>{this.props.params.name}</Subheader>
                    <Subheader style={{fontSize:15}}>{this.props.params.pversion}</Subheader>
                  </List>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8" style={styles.tabs}>
                <Tabs initialSelectedIndex={this.state.tabindex}>
                    <Tab label="Project Details" >
                      <div style={styles.tabdivs}>
                        <h2 style={styles.headline}>Project Name: {this.props.params.name}</h2>
                        <p style={{fontWeight:'bold'}}>
                          Project Version: {this.props.params.pversion}
                          <br/>
                          Total Number of Lines:
                          <br/>
                          Total Number of Characters:
                          <br/>
                          Total Number of Files:
                          <br/>
                          Time Stamp:
                        </p>
                        <p>
                          <b>Note:</b> Select on each file on the left pane to view the metrics of that specific file
                        </p>
                      </div>
                    </Tab>
                    <Tab label="Code Metrics" onActive={this.handleActive.bind(this,"CM",'CM')}>
                      <div>
                      {this.state.tabname==="CM"?<CodeMetrics data={this.state.selectFileData} flag={this.state.flag}/>:null}
                      </div>
                    </Tab>
                    <Tab label="Comments" onActive={this.handleActive.bind(this,"Comments",'Comments')}>
                      <div>
                      {this.state.tabname==="Comments"?<Comments data={this.state.selectFileData} flag={this.state.flag}/>:null}
                      </div>
                    </Tab>
                    <Tab
                      label="Functions" onActive={this.handleActive.bind(this,"Functions",'Functions')}
                    >
                      <div>
                      {this.state.tabname==="Functions"?<Functions data={this.state.selectFileData} flag={this.state.flag}/>:null}
                      </div>
                    </Tab>
                </Tabs>
              </div>
            </div>
          </div>
      </div>
    )}
    else{
    return (
      <div>
        <MainAppBar page="dashboard"/>
        <div className="container-fluid">
            <div className="row" style={{paddingTop:'64px' ,height:'99vh'}}>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4" style={{height:'99vh',overflowY:'auto'}}>
                    <div className="col-lg-6 col-md-6 col-sm-6" style={{margin:0,padding:0,border:0}}>
                      <TextField hintText="Enter Name of a file" floatingLabelText="Search Files" />
                      </div>
                    <div className="col-lg-6 col-md-6 col-sm-6" style={{margin:0,padding:0,border:0}}>
                    <span style={{cursor:'pointer'}}><ActionSearch style={iconStyles} color={blue500}/></span>
                    </div>

                  <List>
                    <Subheader style={{fontSize:25}}>{this.props.params.name}</Subheader>
                    <Subheader style={{fontSize:15}}>{this.props.params.pversion}</Subheader>
                    {this.state.projectdata[0].files.map((data) => (
                      <ListItem
                        leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
                        primaryText={data.FileName} onTouchTap={this.selectList.bind(this,data)}
                      />
                    ))}
                  </List>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8" style={styles.tabs}>
                <Tabs >
                    <Tab label="Project Details" >
                      <div style={styles.tabdivs}>
                        <h2 style={styles.headline}>Project Name: {this.state.projectdata[0].projectName}</h2>
                        <p style={{fontWeight:'bold'}}>
                          Project Version: {this.state.projectdata[0].projectVersion}
                          <br/>
                          Total Number of Lines: {this.state.projectdata[0].totalNoOfLines}
                          <br/>
                          Total Number of Characters: {this.state.projectdata[0].totalNoOfChars}
                          <br/>
                          Total Number of Files: {this.state.projectdata[0].totalNoOfFiles}
                          <br/>
                          Time Stamp: {this.state.projectdata[0].fileTakenOn}
                        </p>
                        <p>
                          <b>Note:</b> Select on each file on the left pane to view the metrics of that specific file
                        </p>
                      </div>
                    </Tab>
                    <Tab label="Code Metrics" onActive={this.handleActive.bind(this,"CM",'CM')}>
                      <div>
                      {this.state.tabname==="CM"?<CodeMetrics data={this.state.selectFileData} flag={this.state.flag}/>:null}
                      </div>
                    </Tab>
                    <Tab label="Comments" onActive={this.handleActive.bind(this,"Comments",'Comments')}>
                      <div>
                      {this.state.tabname==="Comments"?<Comments data={this.state.selectFileData} flag={this.state.flag}/>:null}
                      </div>
                    </Tab>
                    <Tab
                      label="Functions" onActive={this.handleActive.bind(this,"Functions",'Functions')}
                    >
                      <div>
                      {this.state.tabname==="Functions"?<Functions data={this.state.selectFileData} flag={this.state.flag}/>:null}
                      </div>
                    </Tab>
                </Tabs>
              </div>
            </div>
          </div>
      </div>
    );
  }
  }
};
