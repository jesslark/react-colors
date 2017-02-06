import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './Grid';

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        React.createElement(Grid),
        document.getElementById('app')
    )
});