import { Component } from "react";
import Greet from "./greet";

class Message extends Component {

    constructor(props){
        super(props);
        this.state = { message: "Welcome to RseeTech!"}
    }

    updateMessage() {
        this.setState({message: "Thank you for coming to Rseetech!"})
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <Greet />
                <button onClick={() => this.updateMessage()}>Update</button>

                <br />
                <br />
                <br />
            </div>
        )
    }
}

export default Message;