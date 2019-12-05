import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, videoSelected }) => {
    const renderedList = videos.map(videos => {
        return <VideoItem key={videos.id.videoId} videoSelected={videoSelected} video={videos} />
    })
    return (
        <div className="ui rendered list">{renderedList}</div>
    )
}

export default VideoList;