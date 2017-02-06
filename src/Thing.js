import React from 'react';

class Thing extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    incrementColor() {
        this.state.count >= 6 ? this.state.count=0 : null;
        this.setState({ count: this.state.count + 1 });
    }

    render() {

        return (
                <div onMouseOver={ this.incrementColor.bind(this) } 
                    className={ "thing " + "mod"+this.props.num } >
                </div>
        );
    }
}
export default Thing;