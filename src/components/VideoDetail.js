import React from 'react';

const VideoDetails = ({ video }) => {
    if (video) {
        const videoSRC = `https://www.youtube.com/embed/${video.id.videoId}`;
        return (
            <div>
                <div className="ui embed">
                    <iframe title="video player" src={videoSRC}></iframe>
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{video.snippet.title}</h4>
                    <p>{video.snippet.description} </p>
                </div>
            </div>

        )
    }
    else {
        return <div>Loading...</div>
    }
}

export default VideoDetails;