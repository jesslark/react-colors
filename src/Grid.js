import React from 'react';
import Thing from './Thing';

class Grid extends React.Component {

    makeThings(num) {
        var things =[];
        var j = 0;
        for(var i=0; i<num; i++) {
            //j ++;
            //j>6 ? j=1 : j;
            var randNum = Math.round(Math.random() * (6 - 1) + 1);
            things.push(<Thing key={i} num={randNum} />);
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