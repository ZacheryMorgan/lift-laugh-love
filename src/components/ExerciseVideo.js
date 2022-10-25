import React from "react";

const ExerciseVideo = ({
  thumbnail,
  publishedTimeText,
  title,
  videoId,
  style,
}) => {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "column",
        flex: 1,
        width: "fit-content",
      }}
    >
      <h4 style={{ paddingBottom: "5px" }}>{title}</h4>
      <a href={`https://www.youtube.com/watch?v=${videoId}`}>
        <img
          style={style}
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
