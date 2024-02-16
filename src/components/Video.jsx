import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

const Video = ({ src, isPlaying }) => {
  // useRef จะเป็นการเก็บตัวแปรที่เป็น Reference เอาไว้เพื่อใช้สำหรับการเปลี่ยนแปลง
  const ref = useRef(null);

  const [isPlay, setIsPlay] = useState(false);

  const handleClick = () => {
    setIsPlay(!isPlay);
    if (!isPlay) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
    console.log(isPlay);
  };

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);
  
  return (
    <div>
      <video ref={ref} src={src} loop playsInline />
      <button
        onClick={handleClick}
        className="bg-slate-600 rounded text-[25px] text-white m-2 p-1 hover:bg-slate-400"
      >
        {isPlay ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default Video;

Video.propTypes = {
  src: PropTypes.string,
  isPlaying: PropTypes.bool,
};
