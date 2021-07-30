import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {

    state={images: [] };//we initialize the images property with a value of
    //an empty array, in order to be able later on to use array methods like map
 onSearchSubmit = async (term) =>{
       const response = await unsplash.get('/search/photos', {
            params: { query: term},
        });
        this.setState({images: response.data.results});
    }


    render() {
        return ( 
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/> 
                {/* onSubmit as object property get a value which in this case is a callback function and
                behaves as an object method. This means that when it is called inside the SearchBar Component
                as an object method, it accepts as argument the this.state.term. object methods in general are called
                as follows: objectProperty.method(arg) */}
                <ImageList images={this.state.images} />
            </div>
    );
    }
};

export default App;