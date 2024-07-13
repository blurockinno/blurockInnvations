import { useState } from "react";
import team from "/assets/team-work.jpg";
import { Play } from "lucide-react";
import Stats from "./Stats";

const AboutVideo = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleThumbnailClick = () => {
    setIsVideoPlaying(true);
  };

  const handleStatsClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="mt-20 relative bg-white px-10 md:px-44 py-20 md:py-40 plus-jakarta-sans -top-96">
      {!isVideoPlaying ? (
        <div className="cursor-pointer relative" onClick={handleThumbnailClick}>
          <img
            src={team}
            alt="Thumbnail"
            className="w-full h-[400px] object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 bg-white text-[#141415] p-4 rounded-full shadow-lg flex items-center justify-center hover:border-2 hover:border-[#146ef5] group">
              <Play className="group-hover:text-[#146ef5]" />
            </button>
          </div>
        </div>
      ) : (
        <div className="relative" style={{ paddingTop: "56.25%" }}>
          {/* 16:9 aspect ratio placeholder */}
          <iframe
            width="100%"
            height="70%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 rounded-lg"
          ></iframe>
        </div>
      )}

      {/* Prevent video from playing when clicking on stats */}
      <div onClick={handleStatsClick}>
        <Stats />
      </div>
    </div>
  );
};

export default AboutVideo;
