import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {

    //Initialize state
    constructor(props){
        super(props);
        this.state = {
          list: []
        }
    }

    // Fetch the list on first mount
    componentDidMount() {
        this.getList();
    }

    // Retrieves the list of items from the Express app
    getList = () => {
        fetch('/api/getList')
            .then(res => res.json())
            .then(list => this.setState({ list }))
    }


    renderList(){
        if(this.state.list.length == 0){
            return (
                <div>
                    <h2>No List Items Found!</h2>
                </div>
            );
        } else{
            return (
                <div>
                    <h2>Item List</h2>
                    {
                        this.state.list.map((item) => {
                            return(
                              <div key={item}>
                                {item}
                              </div>
                            );
                          })
                    }
                </div>
            );
        }
    }
    
    render() {

        let list = (<div></div>);
        return (
            <div className="App">
                <h1>Mango</h1>
                {this.renderList()}
            </div>
        );
    }
}
export default Home;