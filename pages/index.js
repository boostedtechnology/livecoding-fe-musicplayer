import { useMusic } from './context'

export default function Home() {
  const { musicList, currentIndex, nextSong, prevSong, shuffleSongs } = useMusic();

  var currentSong = musicList[currentIndex];

  return (
    <section className='flex items-start justify-around mt-12'>
      <section>
        <ul className='h-[500px] overflow-y-auto mb-8'>
          {musicList.map((song, index) => (
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
          <select>
            {[10, 20, 30].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <button>
            Previous
          </button>
          <span> Page 1 of 1 </span>
          <button>
            Next
          </button>
        </div>
      </section>
      <div className='flex flex-col gap-4'>
        <h2>Now Playing: {currentSong?.title}</h2>
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
