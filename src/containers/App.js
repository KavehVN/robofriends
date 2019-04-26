import React from 'react';
import CardList from '../CardList';
import Searchbox from '../Searchbox';
import './App.css';
import Scroll from '../Scroll';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            usersArray: [],
            searchField: ''
        }

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response => Response.json())
            .then(users => this.setState({ usersArray: users }))
    }

    onSearchChange = (event) => {
        this.setState({
            searchField: event.target.value
        })
    }

    render() {
        const filteredUsers = this.state.usersArray.filter(user => {
            return user.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return (
            <div className="tc">
                    <div>
                        <h1 className='f1'>ROBOFRIENDS</h1>
                        <Searchbox searchChange={this.onSearchChange} />
                    </div>
                    
                <div>
                <Scroll>
                    <CardList users={filteredUsers} />
                    </Scroll>
                </div>
                
            </div>
        );
    }
}

export default App;