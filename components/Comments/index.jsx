import React from 'react';
import {List, ListItem} from 'material-ui/List';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  tabs:{
    margin:0,padding:0,border:0,borderLeft:1,borderStyle:'solid',borderColor:'grey'
  },
  tabdivs:{
    padding:10
  }
};

export default class Comments extends React.Component{

  constructor(props,context){
    super(props,context);
    console.log("File data in Comments is",this.props.data);
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object
    }
  }

  render(){
    if(this.props.data==[] || this.props.data == null || this.props.data == undefined)
    {return( <div><p>Please select a particular file on the left pane for details</p></div>)}
    else{
    return (
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" >
              <div style={styles.tabdivs}>
                {this.props.flag?<p>Please select a particular file on the left pane for details</p>:
                  <div>
                  <h2 style={styles.headline}>File Name: {this.props.data.FileName}</h2>
                  <p style={{fontWeight:'bold'}}>
                    Total Number of Comments: {this.props.data.Comments.length}
                    <br/>
                    Time Stamp: {this.props.data.fileTakenOn}
                    <br/>
                    The Comments are as follows,
                  </p>
                    <List>
                      {this.props.data.Comments.map((data) => (
                        <ListItem
                          primaryText={data}
                          disabled ={true}
                        />
                      ))}
                    </List>
                </div>
              }
              </div>
          </div>
        </div>
    );
  }
  }
}
//
// {this.props.data.Comments.map(function(comment){
//   console.log("Inside loop",comment);
//   <h1>Comments</h1>
// })}
