import React from 'react'
//manupulate date
import Moment from 'react-moment';
import 'moment-timezone';

import "./video.styles.css"

function VideoItem({video}) {
    console.log(video.snippet)
    return (
        <div className="videoList">
            <div className="videoBlockImg">
                <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
            </div>
            <div className="videoBlockDescription">
                <h1>{video.snippet.title}</h1>
                <p className="channelTitle">
                    {video.snippet.channelTitle}
                    <span>
                        <Moment fromNow ago>{video.snippet.publishTime}</Moment>
                        <span style={{margin:"0px 5px"}}>ago</span>
                    </span>
                </p>
                {/* <span>{video.snippet.publishAt}</span> */}
                <p className="description">{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoItem

            