import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyA8d8G_634lkxztX0uGDuEo8_jd1RboipU';

//Create a new component. It should produce html
const App = () => {
    return <div>Hi!</div>;
}


// Take this component's generated html and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
