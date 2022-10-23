import React from "react";

const ExerciseVideo = ({ thumbnail, publishedTimeText, title, videoId }) => {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <h3>{title}</h3>
      <a href={`https://www.youtube.com/watch?v=${videoId}`}>
        <img
          className="video-thumbnail"
          src={thumbnail}
          alt={`Youtube link for ${title}`}
          width="360px"
          height="202px"
        />
      </a>
      <p>{publishedTimeText}</p>
    </div>
  );
};

export default ExerciseVideo;
