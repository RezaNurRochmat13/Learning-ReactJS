import React from "react";

class Props extends React.Component {
    render() {
        return (
            <div>
                Hello My Name is { this.props.name }
            </div>
        )
    }
}

export default Props;