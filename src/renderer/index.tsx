import React from 'react';
import ReactDOM from 'react-dom';

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

const App = () => {
    return (<h1>        Hi from a world app            </h1>);
};

ReactDOM.render(<App />, mainElement);