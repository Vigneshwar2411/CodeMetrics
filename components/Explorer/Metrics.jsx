import React from 'react';
export default class Metrics extends React.Component {
  render(){
    return(
      <div>
      <h3>TotalLines : {this.props.metrics.totallines}</h3>
      <h3>totalcomments : {this.props.metrics.totalcomments}</h3>
      </div>
    );
  }
}
