/**
 * Created by Peterson S Carvalho on 10/11/17.
 */
import React from "react";
import {Component} from 'react'
import {render} from "react-dom";
import {PropTypes} from 'prop-types';
import  { IndexRoute } from "react-router";
import {BrowserRouter, Link, Route} from 'react-router-dom';


import {Root} from "./components/Root";
import {Home} from "./components/Home";
import {User} from "./components/User"

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" component={Root}/>
                    {/*<IndexRoute component={Home} />*/}
                    <Route path="/user/:id" component={User}/>
                    <Route path="/home" component={Home}/>
                </div>
            </BrowserRouter>
        );
    }

    //
    // constructor() {
    //     super();
    //     this.state = {
    //         homeLink: "Home",
    //         homeMounted: true
    // }
    //     ;
    // }
    //
    // onGreet() {
    //     alert("Hello!");
    // }
    //
    // onChangeLinkName(newName) {
    //     this.setState({
    //         homeLink: newName
    //     });
    // }
    //
    // onChangeHomeMounted() {
    //     this.setState({
    //         homeMounted: !this.state.homeMounted
    //     });
    // }
    //
    // render() {
    //     let homeCmp = "";
    //     if (this.state.homeMounted) {
    //         homeCmp = (
    //             <Home
    //                 name={"Max"}
    //                 initialAge={27}
    //                 greet={this.onGreet}
    //                 changeLink={this.onChangeLinkName.bind(this)}
    //                 initialLinkName={this.state.homeLink}
    //             />
    //         )
    //     }
    //     return (
    //         <div className="container">
    //             <div className="row">
    //                 <div className="col-xs-10 col-xs-offset-1">
    //                     <Header homeLink={this.state.homeLink}/>
    //                 </div>
    //             </div>
    //             <div className="row">
    //                 <div className="col-xs-10 col-xs-offset-1">
    //                     {homeCmp}
    //                 </div>
    //             </div>
    //             <div className="row">
    //                 <div className="col-xs-10 col-xs-offset-1">
    //                     <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(Un)Mount Home Component</button>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }
}

render(<App/>, document.getElementById("app"));