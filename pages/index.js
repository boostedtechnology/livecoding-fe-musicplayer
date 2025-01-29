import { useState } from 'react';
import { useMusic } from './context'

export default function Home() {
  const { musicList, currentIndex, nextSong, prevSong, shuffleSongs } = useMusic();

  var currentSong = musicList[currentIndex];

  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 100

  const displayedSongs = musicList

  return (
    <section className='flex'>
      <section>
        <ul className='h-[500px] overflow-y-auto mb-8'>
          {displayedSongs.map((song, index) => (
            <li
              key={song.id}
              style={{
                cursor: 'pointer',
                fontWeight: index === currentIndex ? 'bold' : 'normal',
              }}
              onClick={() => setCurrentIndex(index)}
            >
              {song.title}
            </li>
          ))}
        </ul>
        <div className='flex items-center gap-6'>
          <select onChange={(e) => setPageSize(Number(e.target.value))}>
            {[10, 20, 30].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <button>
            Previous
          </button>
          <span> Page {currentPage} of {totalPages} </span>
          <button style={{ backgroundColor: 'green', color: 'white' }}>
            Next
          </button>
        </div>
      </section>
      <div className='flex flex-col gap-4'>
        <h2 style={{ color: 'green' }}>Now Playing: {currentSong?.title}</h2>
        <audio controls src={currentSong?.url} autoPlay />

        <div className='flex gap-4 justify-between'>
          <button onClick={prevSong}>Previous</button>
          <button onClick={nextSong}>Next</button>
          <button onClick={shuffleSongs}>Shuffle</button>
        </div>
      </div>
    </section>
  );
}
