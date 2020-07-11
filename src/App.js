import React, { Component, Fragment } from 'react';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import YoutubeApi, { baseParams } from './Api/YoutubeApi';
import VideoList from './Components/VideoComponent/VideoList';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            videos: [],
            loading: false,
         }
    }

    FormSubmit = async (term)=> {
        // console.log(term)
        let response = await YoutubeApi.get("/search",{
            params:{
                q: term,
                ...baseParams,
            },
        });
        // console.log(response.data.items)
        this.setState({videos:response.data.items, loading:true});
    }
    render() { 
        return ( 
            <Fragment>
                {/* <Router> */}

                    <header>
                        <HeaderComponent FormAppFromSubmit={this.FormSubmit}/>
                    </header>
                    <main className="container my-4">
                        <VideoList videos={this.state.videos}/>
                    </main>

                {/* </Router>                 */}
            </Fragment>
         );
    }
}
 
export default App;