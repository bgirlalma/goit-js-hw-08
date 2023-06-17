import Player from '@vimeo/player';
import throttle from "lodash.throttle"

// получаю доступ по Id
const video = document.querySelector('#vimeo-player');

// инициализирую Video Player с video
const player = new Player(video);

const throttleTime = throttle(second => {
    localStorage.setItem(videoplayer-current-time, second)
}, 1000);

player.on('timeupdate ', function(data) {
    throttleTime(data.second)
});

const timeSave = localStorage.getItem("videoplayer-current-time");

    if(timeSave){
        player.setCurrentTime(timeSave)
    }

