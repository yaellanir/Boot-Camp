import {React, useRef} from "react";

function Video() {
  const vidRef = useRef()

function playMovie() {
  return vidRef.current.play()
}

function pauseMovie(params) {
  return vidRef.current.pause()
}

  return (
    <div className="flex-center">
      <video
        ref={vidRef}
        width= "600px"
        type="video/mp4"
        preload="auto"
        className="video"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      />
      <button className="play" onClick={playMovie}>play</button>
      <button className="pause" onClick={pauseMovie}>pause</button>
    </div>
  );
}

export default Video;
