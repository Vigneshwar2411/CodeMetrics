import React from 'react';
// import Header from './header.jsx';
// import Footer from './footer.jsx';
import Home from './homeComponent.jsx';
import MainAppBar from '../AppBar/index.jsx';


export default class HomePage extends React.Component{
  render(){
    return (
      <div>
        <MainAppBar page="home"/>
        <div className="container-fluid" >
          <div className="row" >
            <div style={{width: "100%"}} >
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <Home/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
