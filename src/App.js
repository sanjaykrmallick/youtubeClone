import React, { Component, Fragment } from 'react';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <Router>
                    <header>
                        <HeaderComponent/>
                    </header>
                    <main className="container">
                        <Route />
                    </main>
                </Router>                
            </Fragment>
         );
    }
}
 
export default App;