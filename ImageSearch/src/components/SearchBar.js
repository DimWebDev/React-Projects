import React from 'react';

class SearchBar extends React.Component {

    state={term: ""} 
    
     onInputChange=(e)=>{
        this.setState({term: e.target.value})
        //this sets the input as the term
    }
    
    onFormSubmit=(e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state.term); //Passes as argument the term
        // to the onSubmit object property, which has been given in the App.js 
        // a corresponding method of onSearchSubmit
        // console.log(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text"  
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
            );
    }
}


export default SearchBar; 