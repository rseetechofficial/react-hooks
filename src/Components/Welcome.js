import { Component } from "react";

class Welcome extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.name} from {this.props.location}</h1>
            </div>
        )
    }
}

export default Welcome;