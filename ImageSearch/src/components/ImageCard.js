//the purpose of this component is to show each image at the proper size using the grid-row-end property

import React from 'react'

class ImageCard extends React.Component{
    constructor(props){
        super(props);

        this.state={spans: 0}
        this.imageRef=React.createRef();
    }

    componentDidMount () {
      this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10);
        this.setState({spans: spans});
    }

    render(){
        const {description, urls} = this.props.image;
        return(
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img 
//this component expects to be passed a props image object so that we can access the description and the urls. 
// This image props object is passed through the ImageList Component 
                alt={description}
                src={urls.regular}
                ref={this.imageRef}
                />
            </div>
        );
    }
}

export default ImageCard;