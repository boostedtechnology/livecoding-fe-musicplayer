
## Getting Started

Welcome to the Boosted Technology Technical Screener frontend interview. We're going to perform a quick live-coding react style interview focusing on getting data from an API.

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.


Given an endpoint that returns a list of songs, build a simple web based music player. For simplicity, the songs do not actually contain audio data, nor is it a requirement to play any audio. The sole focus of this excercise is to create a user interface, and emulate some basic functionality.


## Question 1: Building a user interface.

The first task is to create the components of the music player. The purpose of this question is purely visual, and not functional. These functions will be implemented in the next parts.

i) Display the name of the song, artist's name, and year. 

ii) There should be buttons for the following:
- play/pause
- next song
- previous song
- repeat
- shuffle

iii) There should be a scrollbar/scrubber/slider as well as a cursor that indicates the song's progress. This should indicate how much time is remaining in the song, how much time has elapsed, and which part of the song is currently playing.

For reference, look at any youtube video or any music player.

iv) Song list that displays the songs. This should be clickable and allow users to play the selected song.

Use any library of your choice, or pure CSS when it comes to styling. The components should be arranged an in a logical way, and have some consistent style. 


## Question 2: Backend

Create a simple backend using an technology that you prefer.
The backend should simply have 
- json file `users.json` with a list of email/password users
- a `/signin` endpoint that accepts username/password. If valid it generates a JWT token

### Bonus Question (if time is available)
- After logging in, streamthe audio back to the frontend & consume it on the interface built in Question 1