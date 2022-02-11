import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div> </div>;
  }
  return (
    <div>
      <img src={video.snippet.thumbnails.medium.url} />
      <div>{video.snippet.title}</div>
    </div>
  );
};

export default VideoDetail;
