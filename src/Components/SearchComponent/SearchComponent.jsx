import React, { Component,Fragment } from 'react'
import "./SearchComponent.style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from "@fortawesome/free-solid-svg-icons";
class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Fragment>
                <form >
                    <input type="text" placeholder="Search" />
                </form>
                <button><FontAwesomeIcon icon={faSearch}/></button>
            </Fragment>
          );
    }
}
 
export default SearchComponent;
