import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector("iframe");
const player = new Player (iframe);
const key = "videoplayer-current-time";
const local = localStorage.getItem(key);
if (local) {
    player.setCurrentTime(parseFloat(local));
  }
player.on('timeupdate', throttle ((data)=>{
  
  localStorage.setItem(key, data.seconds.toString());
}, 1000)
);
