import React, { Component } from 'react';


class SearchBar extends Component {
    render() {
        return (
            <input onChange={this.onInputChange}/>
        );
    }

    onInputChange(event){//event can be any name
        console.log(event.target.value)
    }
}

export default SearchBar;

// const SearchBar ()=>{
//     return <input/>
// };