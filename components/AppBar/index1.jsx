import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';

import ActionAccountbox from 'material-ui/svg-icons/action/account-box';
import ActionTurnedin from 'material-ui/svg-icons/action/turned-in';
import ActionViewmodule from 'material-ui/svg-icons/action/view-module';
import ActionViewquilt from 'material-ui/svg-icons/action/view-quilt';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionFingerprint from 'material-ui/svg-icons/action/fingerprint';
import ActionDashboard from 'material-ui/svg-icons/action/dashboard';
import LinkIcon from 'material-ui/svg-icons/content/link';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';

const style = {
  marginRight: 50 ,
  marginTop: 5,
  marginBottom:5
};


export default class MainAppBar extends React.Component {
  constructor() {
    super();
    this.state = {
      open :false,dialogOpen:false
    }
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object
    }
  }

  handleDrawerOpen() {
    this.setState({open: true});
  }


  handleDialog(){
    this.setState({dialogOpen: true});
  }

  handleDialogClose(){
    this.setState({dialogOpen:false})
  }

  uploadFile(e){
    e.preventDefault();
    var fd = new FormData();
    // var fd1 = this.refs.file.getDOMNode(this);
    console.log("Form data is:",fd);
     fd.append( 'file', this.refs.file.files[0] );
      console.log("file array",typeof(this.refs.file.files[0]));
    //  console.log(this.refs.button.value);
      this.uploadFormData(fd);
  }

  uploadFormData(data){
    console.log("Inside uploadform");
    console.log(data);
    $.ajax({
      url: '/api/v1/fileupload',
      type: 'POST',
      data: data,
      dataType: 'json',
      processData: false,
      contentType : 'application/json',
      success : function(data){
          console.log("File Uploaded Successfully to Server");
          this.context.router.push('/dashboard');
      }.bind(this)
    });
  }

  goToHome(e){
    e.preventDefault();
    this.context.router.push('/');
  }

  goToDashboard(e){
    e.preventDefault();
    this.context.router.push('/');
  }

  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleDialogClose.bind(this)}
      />,
      <FlatButton
        label="Upload"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleDialogClose.bind(this)}
      />,
    ];


    return (
      <div className='row'>
            {this.props.page==="home"?
            <AppBar title="{CodeMetrics}" showMenuIconButton={false}
            iconElementRight = {
                <RaisedButton label="Upload Your File" secondary={true} style={style} onTouchTap={this.handleDialog.bind(this)}/>
            }

            />:<AppBar title="{CodeMetrics}" onLeftIconButtonTouchTap={this.handleDrawerOpen.bind(this)}            />}

            <Dialog
              title="Upload your Output file"
              actions={actions}
              modal={false}
              open={this.state.dialogOpen}
              onRequestClose={this.handleDialogClose.bind(this)}
            >
              Browse and Select you outpult file to get to know about the Code Metrics of your project.

              <form ref="uploadForm" className="uploader" encType="multipart/form-data" method="post" >
                <input type="file" ref="file" id="file-input" onChange={this.uploadFile.bind(this)}/>
              </form>

            </Dialog>
            <Drawer
              docked={false}
              width={250}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}
            >
              <List>
                <ListItem primaryText="Home" leftIcon={<ActionHome />} onTouchTap={this.goToHome.bind(this)}/>
                <ListItem primaryText="Dashboard" leftIcon={<ActionDashboard />} onTouchTap={this.goToDashboard.bind(this)}/>
                <ListItem primaryText="Code Quality Metrics" leftIcon={<ActionViewmodule />}/>
                <ListItem primaryText="Graphical Dependencies" leftIcon={<LinkIcon/>}/>
                <ListItem primaryText="Documentation" leftIcon={<ActionViewquilt />}/>
              </List>
            </Drawer>

      </div>
    );
  }
}
