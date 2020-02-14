import React from 'react';
import VideoItem from './VideoItem';

//Using ES6 Syntax for receiving Props
const VideoList = ({videos,onVideoSelect}) => {
  return (
    <div>
      {videos.map((video) => {
        return (
          <div
            key={video.id.videoId} className="ui relaxed divided list">
            <VideoItem
              video={video}
              onVideoSelect={onVideoSelect}
            />
          </div>
        );
      })
    }
    </div>
  );
};

export default VideoList;
