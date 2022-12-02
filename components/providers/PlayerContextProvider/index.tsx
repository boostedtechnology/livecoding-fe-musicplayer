import { createContext, useContext, useEffect, useState } from "react"

import { TrackDetailsType } from "../../player/common/types.common"
import songs from "../../../static/songlist.json"
import { shuffleArray } from "../../../helpers/shuffle-array"

export enum RepeatStateType {
  DISABLED = "disabled",
  ALL = "all",
  SINGLE = "single",
}

interface AppContextInterface {
  trackList: TrackDetailsType[]
  currentTrack?: TrackDetailsType
  setCurrentTrack: (props: TrackDetailsType) => void
  isPlaying: boolean
  togglePlayPause: () => void
  isShuffled: boolean
  shuffle: () => void
  repeat: RepeatStateType
  handleRepeat: () => void
  nextTrack: () => void
  prevTrack: () => void
}

const PlayerContext = createContext<AppContextInterface | null>(null)

// reusable useContext hook
export const usePlayerContext = () => useContext(PlayerContext)

const RAW_DATA = songs["songs"]

type PlayerContextProviderProps = {
  children: React.ReactNode
}

export const PlayerContextProvider = ({
  children,
}: PlayerContextProviderProps) => {
  const [data, setData] = useState<TrackDetailsType[]>([...RAW_DATA])
  const [isShuffled, setIsShuffled] = useState<boolean>(false)
  const [trackHistory, setTrackHistory] = useState<TrackDetailsType[]>([])
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [repeat, setRepeat] = useState<RepeatStateType>(
    RepeatStateType.DISABLED
  )
  const [currentTrack, setCurrentTrack] = useState<
    undefined | TrackDetailsType
  >()

  // scrambles data when shuffle is set
  useEffect(() => {
    setData(isShuffled ? [...shuffleArray(data)] : [...RAW_DATA])
  }, [isShuffled])

  const handleSetCurrentTrack = (props: TrackDetailsType) => {
    setCurrentTrack(props)
    setIsPlaying(true)
  }

  const handleTogglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleNextTrack = () => {
    if (currentTrack) {
      setTrackHistory([...trackHistory, currentTrack])

      let index = data.map(({ title }) => title).indexOf(currentTrack.title)

      if (repeat === "single") {
        setCurrentTrack({
          ...data.find(({ title }) => title === currentTrack?.title),
        })
      } else if (index >= 0 && index < data.length - 1) {
        setCurrentTrack({ ...data[index + 1] })
      } else if (repeat === RepeatStateType.ALL) {
        setCurrentTrack({ ...data[0] })
      } else {
        setIsPlaying(false)
        setCurrentTrack(undefined)
      }
    }
  }

  const handlePrevTrack = () => {
    const tracksHistoryClone = [...trackHistory]
    const previousTrack = tracksHistoryClone.pop()
    setCurrentTrack(previousTrack)
    setTrackHistory(tracksHistoryClone)
  }

  const handleShuffle = () => {
    setIsShuffled(!isShuffled)
  }

  const handleSetRepeat = () => {
    let repeatUpdate: RepeatStateType = RepeatStateType.DISABLED

    switch (repeat) {
      case RepeatStateType.DISABLED:
        repeatUpdate = RepeatStateType.ALL
        break
      case RepeatStateType.ALL:
        repeatUpdate = RepeatStateType.SINGLE
        break
      default:
        repeatUpdate = RepeatStateType.DISABLED
    }

    setRepeat(repeatUpdate)
  }

  return (
    <PlayerContext.Provider
      value={{
        trackList: data,
        currentTrack,
        setCurrentTrack: handleSetCurrentTrack,
        isPlaying,
        togglePlayPause: handleTogglePlayPause,
        nextTrack: handleNextTrack,
        prevTrack: handlePrevTrack,
        isShuffled,
        shuffle: handleShuffle,
        handleRepeat: handleSetRepeat,
        repeat,
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}
