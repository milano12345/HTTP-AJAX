import React from 'react'
import axios from "axios";

class FriendsList extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: []
        }
    }
    componentDidMount() {
        axios
            .get("http://localhost:5000/friends")
            .then(res => this.setState({ friends: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="friendList">
                <h1 className="friend-header">My Friends</h1>
                <div className="friend-cards">
                    {this.state.friends.map((friends) => 
                    (<p>ID: {friends.id} Name: {friends.name}  Age: {friends.age} Email: {friends.email}</p>
                        ))}</div>
            </div>
        )
    }
};

export default FriendsList;