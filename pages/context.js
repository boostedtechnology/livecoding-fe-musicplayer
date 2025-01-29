import React, { createContext, useState, useContext } from 'react';
import songs from './songlist.json'

const MusicContext = createContext();

export const useMusic = () => useContext(MusicContext);

export const MusicProvider = ({ children }) => {
  const [musicList, setMusicList] = useState(songs.songs);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSong = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % musicList.length);
  };

  const prevSong = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const shuffleSongs = () => {

  };

  return (
    <MusicContext.Provider
      value={{ musicList, currentIndex, nextSong, prevSong, shuffleSongs }}
    >
      {children}
    </MusicContext.Provider>
  );
};
