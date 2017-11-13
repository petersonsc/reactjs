/**
 * Created by synus on 10/11/17.
 */
import React from "react";
import {Link} from "react-router-dom"
import {PropTypes} from 'prop-types';

export const Header = (props) => {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            {/*<li><a href="#">{props.homeLink}</a></li>*/}
                            <li><Link to={"/home"}>Home</Link></li>
                            <li><Link to={"/user/10"}>User</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
}