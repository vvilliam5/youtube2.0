import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

const KEY = 'AIzaSyDXXl95HeJdO71HZuxX5doDa5U1ga7asc0';

class App extends React.Component {
    state = { videos: [], videoSelected: null };

    componentDidMount() {
        this.onFormSubmit('welcome')
    }

    onFormSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: KEY,
                q: term
            }
        })

        this.setState({
            videos: response.data.items,
            videoSelected: response.data.items[0]
        });
    }

    videoSelected = (video) => {
        this.setState({ videoSelected: video })
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onFormSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.videoSelected} />
                        </div>
                        <div className="five wide column">
                            <VideoList videoSelected={this.videoSelected} videos={this.state.videos} />
                        </div>
                    </div>


                </div>

            </div>

        )
    }
}

export default App;
