import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyA8d8G_634lkxztX0uGDuEo8_jd1RboipU';

YTSearch({ key:API_KEY, term :'dota2' },(data)=>{
	console.log(data)
})

//Create a new component. It should produce html
const App = () => {
    return (
      <div>
        <SearchBar />
      </div>
    );
}


// Take this component's generated html and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
