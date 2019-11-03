import React, { Component } from 'react'
import {Link} from "react-router-dom";

 

class Navbar extends Component {
    render() {
        return (
            <div className="col-md-8 mb-4">
                User
                <ul>
                    <li>
                    <Link to="/"> Anasayfa </Link> 
                    </li>

                    <li>
                    <Link to="/ekle"> Ekle </Link>
                    </li>
                </ul>
            </div>
        )
    }
}


export default Navbar;
