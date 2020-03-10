import React from 'react';

class Event extends React.Component {
    showMe = () => {
        alert('Show Me is cliked!');
    }
    render() {
        return(
            <div>
                <button onClick={this.showMe}>Click Me!</button>
            </div>
        )
    }
}


export default Event;