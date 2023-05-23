import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const videoPlayer = new Player(iframe);

videoPlayer.on(
  'timeupdate',
  throttle(e => {
    localStorage.setItem('videoplayer-current-time', e.seconds);
  }, 1000)
);
videoPlayer
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .catch(function (eror) {
    console.eror(eror);
  });
