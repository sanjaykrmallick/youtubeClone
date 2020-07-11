import React from 'react'
import VideoItem from './VideoItem';

function VideoList({videos}) {
    // console.log(videos)
    const renderVideo= videos.map((video)=>{
        return <VideoItem video={video} key={video.id.videoId}/>
    })
    return (
        <div>
            {renderVideo}
        </div>
    )
}

export default VideoList
