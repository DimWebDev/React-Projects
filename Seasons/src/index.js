import React from 'react';
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay';
import "semantic-ui-css/semantic.min.css";
import Spinner from './Spinner';


class App extends React.Component {
    state={lat: null, err: ""}

    componentDidMount () {
        window.navigator.geolocation.getCurrentPosition(
             position => this.setState({lat: position.coords.latitude}),
             err => this.setState({err: err.message})
        );
    }

    renderContent(){
        //conditional rendering using a helper function
        if(this.state.err && !this.state.lat) {
            return <div>Error: {this.state.err}</div>
        }else if(!this.state.err && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }else{
            return <Spinner message="Please allow geolocation!" />;
        }
    }
    render() {
        return(
        <div className='border-red'>
            {this.renderContent()}
        </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)




