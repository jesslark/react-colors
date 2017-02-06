import React from 'react';
import Thing from './Thing';

class Grid extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 1,
        };
    }

    makeThings(num) {
        var things =[];
        var j = 0;
        for(var i=0; i<num; i++) {
            j ++;
            j>6 ? j=1 : j;
            things.push(<Thing key={i} num={j} />);
        }
        return things
    }
    
    render() {
        return (
            <div className="container">
                { this.makeThings(88) }
            </div>
        );
    }
}
export default Grid;