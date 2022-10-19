import { useState, useEffect, useMemo, useRef } from "react";
const songs = require("./songlist.json");

// songs contains an array of objects, each with a title, artist, duration in seconds. Refer to README for more details.

/*
{
    "title": "#40",
    "artist": "Dave Matthews",
    "duration": 35
},
*/

const convertDuration = (time) => {
  const hour = Math.floor(time / 3600);
  const minute = Math.floor((time % 3600) / 60);
  const second = time % 60;
  const result = [];
  if (hour > 0) {
    result.push(hour);
  }

  result.push(minute);
  result.push(second);

  return result.map((item) => (item < 10 ? `0${item}` : item)).join(":");
};

export default function Home() {
  const [songIndex, setSongIndex] = useState(0);
  const [played, setPlayed] = useState(false);
  const [playing, setPlaying] = useState(0);
  const [repeated, setRepeated] = useState(false);
  const timePointer = useRef();

  const handleClickPlayPause = () => {
    if (songIndex === undefined) {
      alert("Please select a song");
      return;
    }

    setPlayed((oldPlayed) => {
      if (!oldPlayed) {
        if (timePointer.current) {
          clearInterval(timePointer.current);
          handleStartSong();
        } else {
          handleStartSong();
        }
      } else {
        if (timePointer.current) {
          clearInterval(timePointer.current);
        }
      }
      return !oldPlayed;
    });
  };

  const handleClickNext = () => {
    if (songIndex === songs.songs.length - 1) {
      return;
    }
    setSongIndex(songIndex + 1);
  };

  const handleClickPrev = () => {
    if (songIndex === 0) {
      return;
    }
    setSongIndex(songIndex - 1);
  };

  const handleClickRepeat = () => {
    setRepeated(!repeated);
  };

  const handleClickShuffle = () => {};

  const handleClickSong = (index) => {
    setSongIndex(index);
  };

  const handleStartSong = () => {
    timePointer.current = setInterval(() => {
      setPlaying((prevPlaying) => prevPlaying + 1);
    }, 1000);
    setPlayed(true);
  };

  useEffect(() => {
    setPlayed(false);
    setPlaying(0);

    if (timePointer.current) {
      clearInterval(timePointer.current);
      handleStartSong();
    } else {
      handleStartSong();
    }
  }, [songIndex]);

  useEffect(() => {
    if (
      selectedSong &&
      playing >= selectedSong.duration &&
      timePointer.current
    ) {
      if (repeated) {
        setPlaying(0);
      } else {
        handleClickNext();
      }
    }
  }, [playing, repeated, songIndex, timePointer]);

  const selectedSong = useMemo(() => {
    if (songIndex === null) {
      return;
    }
    return songs.songs[songIndex];
  }, [songIndex]);

  return (
    <div className="main">
      <div className="song-list">
        {songs.songs.map((item, index) => (
          <div
            className={`song-item ${songIndex === index ? "selected" : ""}`}
            key={index}
            onClick={() => handleClickSong(index)}
          >
            <div className="song-item-top">
              <div className="song-title">{item.title}</div>
              <div className="song-duration">
                {convertDuration(item.duration)}
              </div>
            </div>
            <div className="song-artist">{item.artist}</div>
          </div>
        ))}
      </div>
      <div className="player">
        <div className="player-main">
          <div
            className="player-inner"
            style={{
              width: `${
                selectedSong ? (playing / selectedSong.duration) * 100 : 0
              }%`,
            }}
          ></div>
        </div>
        <div className="player-actions">
          <button className="player-action" onClick={handleClickPrev}>
            Prev
          </button>
          <button className="player-action" onClick={handleClickPlayPause}>
            {played ? "Pause" : "Play"}
          </button>
          <button className="player-action" onClick={handleClickNext}>
            Next
          </button>
          <button
            className={`player-action ${repeated ? "selected" : ""}`}
            onClick={handleClickRepeat}
          >
            Repeat
          </button>
          <button className={`player-action `} onClick={handleClickShuffle}>
            Shuffle
          </button>
        </div>
      </div>
    </div>
  );
}
