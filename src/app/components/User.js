/**
 * Created by synus on 13/11/17.
 */
import React from "react"
import { Component } from "react"

export class User extends Component {

    onNavigateHome() {
        this.props.history.push("/home");
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-10 offset-1">
                    <h3>The user page</h3>
                    <p>User ID: {this.props.match.params.id}</p>
                    <button onClick={this.onNavigateHome.bind(this)} className="btn btn-primary">Go Home!</button>
                </div>
            </div>
        )
    }
}