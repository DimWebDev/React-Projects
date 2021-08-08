import React from 'react';
import VideoItem from './VideoItem';


const VideoList=({videos, onVideoSelect})=>{
    // instead of props.videos we are destructuring videos from 
    // the  props object which has a property of videos
    // and we pass it as an argument to the functional component
     const renderedList = videos.map((video)=>{
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>;
    });
    return  <div className="ui relaxed list">{renderedList}</div>;
        /* We pass the videos property in order to create a reference 
        to the array of videos that we got back from the http request
        videos: response.data.items and write eventually {videos} instead
        of props.videos */

     
};

export default VideoList;