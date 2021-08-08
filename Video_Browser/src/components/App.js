import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../APIs/youtube';
import VideoList from './VideoList';
import VideoDetail from  './VideoDetail';

class App extends React.Component {
    state={
        videos: [],
        selectedVideo: null
    };

    componentDidMount(){
        this.onTermSubmit('nature')
    }
    //Define a callback function to pass it as 
    // an object method to the SearchBar component
    onTermSubmit= async (term)=>{
       const response= await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0] 
        });
    };

    onVideoSelect=(video)=>{
        //the video argument is going to be given from the destructuring
        // that will take place in the VideoList and VideoITem components
        this.setState({selectedVideo: video});
    };
    

    render(){
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
                {/* We pass the videos property in order to create a reference 
                to the array of videos that we got back from the http request */}
            </div>
            );
    }
}

export default App;