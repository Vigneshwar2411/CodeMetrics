import React from 'react';
import {Link} from 'react-router';



const style = {
  marginBottom:12,
  width:'100%',
};

const text = {
  margin:0,
  padding:0,
  textAlign:'center'
}


export default class UploadSuccess extends React.Component{
  constructor(props,context){
    super(props,context);
    console.log("Inside Auth Success View Constructor");
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object
    }
  } // Used to provide property validation.Currently we are saying that we need a context prop of type "React.PropTypes.object"



  render (){
    console.log("=====Inside the Auth Success render function=======");
    this.context.router.push('/');
    return (
      <div>

        <p>File Uploaded Successful...Redirecting to Dashboard....</p>

      </div>

    );
  }
};
