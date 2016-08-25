import React from 'react';
import FileInput from 'react-file-input';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import ActionSearch from 'material-ui/svg-icons/action/search';
import ActionOpen from 'material-ui/svg-icons/action/open-in-new';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import AutoComplete from 'material-ui/AutoComplete';





const iconStyles = {
  margin: 30,
};

const styles = {
  button: {
    margin: 12,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width:900,
    overflowY: 'auto',
  },
};



export default class Tour extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      allProjects: [] ,title: "All Projects"
    }
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object
    }
  }

  componentDidMount(){
    console.log("inside component did mount of home component");
    this.loadAllProjects();
  }

  loadAllProjects(){
    console.log("Inside Load allProjects");
    $.ajax({
      url: '/api/getallprojects',
      type: 'GET',
      contentType : 'application/json',
      success : function(data){
          console.log("Projects retrieved Successfully From Server",typeof(data));
          this.setState({
            allProjects : this.state.allProjects.concat(data) ,title: "All Projects"
          },function(){
            // console.log(this.state.allProjects);
          })
          // console.log(this.state.allProjects);
          // this.context.router.push('/dashboard');
      }.bind(this)
    });
  }

  handleProject(name,version){
    this.context.router.push('/dashboard/'+name+'/'+version);
  }

  searchSubmit(e){
    var outerThis = this;
    if(e.keyCode===13){
        var tempstring = e.target.value;
        var parts =tempstring.split("/",2);
        outerThis.state.allProjects.map(function(data){
          if(data._id.projectName===parts[0] && data._id.projectVersion===parts[1]){
            outerThis.setState({
              allProjects: outerThis.state.allProjects.splice(1,outerThis.state.allProjects.length,data),
              title: "Search Results"
            })
          }
        })
    }
  }

  reload(){
    console.log("Inside reload");
    this.setState({
      allProjects: this.state.allProjects.splice(this.state.allProjects.length)
    })
    this.loadAllProjects();
  }


  render(){
    var projects = this.state.allProjects.map(function(data){
                var temp = data._id.projectName+"/"+data._id.projectVersion;
                return(temp)
        })
    return (
      <div className="row center-xs" style={{paddingTop:'64px'}}>
        <div className="col-lg-11 col-md-11 col-sm-7">
          <Paper style={{padding: '60px', margin: '40px'}}>
            {this.state.title==="All Projects"?
            <div className="row">
              <div className="col-lg-1 col-md-1 col-sm-1" style={{margin:0,padding:0,border:0}}>
              <ActionSearch style={iconStyles} color={blue500}/>
              </div>
              <div className="col-lg-11 col-md-11 col-sm-11" style={{margin:0,padding:0,border:0}}>
              <AutoComplete
                floatingLabelText="Search Projects"
                hintText="Enter the Name of you Project"
                fullWidth={true}
                filter={AutoComplete.fuzzyFilter}
                dataSource={projects}
                maxSearchResults={5}
                onKeyDown={this.searchSubmit.bind(this)}
              />
              </div>
            </div>:this.state.title==="Search Results"?
            <RaisedButton label="Close Search" primary={true} onTouchTap={this.reload.bind(this)}/> : null}

            <div className="row" style={{paddingTop:20}}>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div style={styles.root}>
                    <GridList
                      cols={4}
                      cellHeight={200}
                      style={styles.gridList}
                    >
                      <Subheader style={{fontSize:30,padding:20}}>{this.state.title}</Subheader>
                      {this.state.allProjects.map((data) => (
                        <GridTile
                          title={data._id.projectName}
                          subtitle={<span>version <b>{data._id.projectVersion}</b></span>}
                          actionIcon={<RaisedButton
                              label="View"
                              labelStyle={{fontSize:10}}
                              primary={true}
                              icon={<ActionOpen/>}
                              onTouchTap={this.handleProject.bind(this,data._id.projectName,data._id.projectVersion)}
                            />}
                        >
                          <img src="../../img/briefcase.png" />
                        </GridTile>
                      ))}
                    </GridList>
                  </div>
              </div>
            </div>
          </Paper>

        </div>
      </div>

    );
  }
}




// <Paper style={{padding:'30px', margin:'10px'}}>
//   <h3> Select Your File and Upload </h3>
//     <center style={{padding:"30px"}}>
        // <form >
        //   <input type="file" id="file-input" onChange={this.onchange.bind(this)}/>
        // </form>
//     </center>
// </Paper>
// <h5>Or</h5>
// <Paper style={{padding:'30px', margin:'10px'}}>
//   <h3> GitHub Link </h3>
//   <TextField hintText="GitHub Link" fullWidth={true} floatingLabelText="Link to you GitHub"/>
// </Paper>
// <RaisedButton
//   label="Upload"
//   primary={true}
//   fullWidth={true}
//   onTouchTap={this.handleChange.bind(this)}
// />


//
// <FileInput name="myImage"
//            accept=".png,.gif,.json"
//            placeholder="My Image"
//            className="inputClass"
//            onChange={this.handleChange.bind(this)} />

// //
// <div className="row" style={{backgroundColor:'yellow'}}>
// <label className="control-label">Select File</label>
// <input id="input-1a" type="file" className="file" data-show-preview="false"/>
// </div>
