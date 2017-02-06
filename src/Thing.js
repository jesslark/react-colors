import React from 'react';

class Thing extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    incrementColor() {
        var myNum = this.state.count;
        myNum++;
        myNum>5 ? myNum=0 : myNum;
        this.setState({ count: myNum });
    }

    render() {
        var num = this.props.num + this.state.count;
        num>6 ? num=1 : num;
        return (
            <div onMouseOver={ this.incrementColor.bind(this) } 
                className={ "thing " + "mod" +  num } >
            </div>
        );
    }
}
export default Thing;