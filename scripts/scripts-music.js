document.addEventListener('DOMContentLoaded', function() {
    const songListItems = document.querySelectorAll('.song-list li');
    const nowPlaying = document.getElementById('now-playing');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const playPauseButton = document.getElementById('play-pause-button');
    const shuffleButton = document.getElementById('shuffle-button');
    const repeatButton = document.getElementById('repeat-button');
    const audioFiles = document.querySelectorAll('.audio-file');

    let currentAudio = null;
    let currentIndex = -1;
    let isPlaying = false;
    let isShuffle = false;
    let isRepeat = false;

    function playSong(index) {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        const song = songListItems[index];
        const audioId = song.getAttribute('data-audio');
        const audio = document.getElementById(audioId);

        audio.play();
        nowPlaying.textContent = song.textContent;
        currentAudio = audio;
        currentIndex = index;
        isPlaying = true;

        playPauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }

    function pauseSong() {
        if (currentAudio) {
            currentAudio.pause();
            isPlaying = false;
            playPauseButton.innerHTML = '<i class="fa-solid fa-play"></i>';
        }
    }

    function togglePlayPause() {
        if (isPlaying) {
            pauseSong();
        } else {
            if (currentIndex === -1 && songListItems.length > 0) {
                playSong(0);
            } else if (currentAudio) {
                currentAudio.play();
                isPlaying = true;
                playPauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
            }
        }
    }

    function playNextSong() {
        if (isShuffle) {
            playRandomSong();
        } else {
            currentIndex = (currentIndex + 1) % songListItems.length;
            playSong(currentIndex);
        }
    }

    function playPrevSong() {
        currentIndex = (currentIndex - 1 + songListItems.length) % songListItems.length;
        playSong(currentIndex);
    }

    function playRandomSong() {
        const randomIndex = Math.floor(Math.random() * songListItems.length);
        playSong(randomIndex);
    }

    playPauseButton.addEventListener('click', togglePlayPause);
    nextButton.addEventListener('click', playNextSong);
    prevButton.addEventListener('click', playPrevSong);

    shuffleButton.addEventListener('click', function() {
        isShuffle = !isShuffle;
        shuffleButton.classList.toggle('active');
    });

    repeatButton.addEventListener('click', function() {
        isRepeat = !isRepeat;
        repeatButton.classList.toggle('active');
    });

    audioFiles.forEach(audio => {
        audio.addEventListener('ended', function() {
            if (isRepeat) {
                audio.play();
            } else {
                playNextSong();
            }
        });
    });

    songListItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            playSong(index);
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const songListItems = document.querySelectorAll('.song-list li');
    const nowPlaying = document.getElementById('now-playing');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const playPauseButton = document.getElementById('play-pause-button');
    const shuffleButton = document.getElementById('shuffle-button');
    const repeatButton = document.getElementById('repeat-button');
    const audioFiles = document.querySelectorAll('.audio-file');

    const progressBar = document.querySelector('.progress-bar');
    const progress = document.querySelector('.progress');
    const progressDot = document.querySelector('.progress-dot');

    let currentAudio = null;
    let currentIndex = -1;
    let isPlaying = false;
    let isShuffle = false;
    let isRepeat = false;

    function playSong(index) {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        const song = songListItems[index];
        const audioId = song.getAttribute('data-audio');
        const audio = document.getElementById(audioId);

        audio.play();
        nowPlaying.textContent = song.textContent;
        currentAudio = audio;
        currentIndex = index;
        isPlaying = true;

        playPauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>';

        // Start updating the progress bar
        updateProgressBar();
    }

    function pauseSong() {
        if (currentAudio) {
            currentAudio.pause();
            isPlaying = false;
            playPauseButton.innerHTML = '<i class="fa-solid fa-play"></i>';
        }
    }

    function togglePlayPause() {
        if (isPlaying) {
            pauseSong();
        } else {
            if (currentIndex === -1 && songListItems.length > 0) {
                playSong(0);
            } else if (currentAudio) {
                currentAudio.play();
                isPlaying = true;
                playPauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>';

                // Start updating the progress bar
                updateProgressBar();
            }
        }
    }

    function playNextSong() {
        if (isShuffle) {
            playRandomSong();
        } else {
            currentIndex = (currentIndex + 1) % songListItems.length;
            playSong(currentIndex);
        }
    }

    function playPrevSong() {
        currentIndex = (currentIndex - 1 + songListItems.length) % songListItems.length;
        playSong(currentIndex);
    }

    function playRandomSong() {
        const randomIndex = Math.floor(Math.random() * songListItems.length);
        playSong(randomIndex);
    }

    function updateProgressBar() {
        if (currentAudio) {
            const percentage = (currentAudio.currentTime / currentAudio.duration) * 100;
            progress.style.width = `${percentage}%`;
            progressDot.style.left = `${percentage}%`;

            // Continue updating the progress bar if the song is playing
            if (!currentAudio.paused) {
                requestAnimationFrame(updateProgressBar);
            }
        }
    }

    playPauseButton.addEventListener('click', togglePlayPause);
    nextButton.addEventListener('click', playNextSong);
    prevButton.addEventListener('click', playPrevSong);

    shuffleButton.addEventListener('click', function() {
        isShuffle = !isShuffle;
        shuffleButton.classList.toggle('active');
    });

    repeatButton.addEventListener('click', function() {
        isRepeat = !isRepeat;
        repeatButton.classList.toggle('active');
    });

    audioFiles.forEach(audio => {
        audio.addEventListener('ended', function() {
            if (isRepeat) {
                audio.play();
            } else {
                playNextSong();
            }
        });
    });

    songListItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            playSong(index);
        });
    });
});
