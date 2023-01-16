import React, { Fragment, useState } from 'react';
import IconMusic from '@assets/images/music-icon.png';
import IconMusicStop from '@assets/images/music-stop-icon.png';
import ngaydautien from '@assets/music/ngaydautien.mp3';
import thichthich from '@assets/music/thichthich.mp3';
import thuongthuong from '@assets/music/thuongthuong.mp3';

import { styMusicFloating } from './styles';

function FloatingMusic() {
  const [play, setPlay] = useState(true);
  const songs = [ngaydautien, thichthich, thuongthuong]
  const song = songs[Math.floor(Math.random() * songs.length)];
  const toggleMusic = () => {
    const myAudio = document.getElementById('myAudio');
    /**
     * This function built-in with html5 function
     * doc: https://www.w3schools.com/tags/ref_av_dom.asp
     */
    if (play) {
      myAudio.pause();
    } else {
      myAudio.play();
    }

    setPlay(!play);
  };

  return (
    <Fragment>
      <div css={styMusicFloating}>
        <audio id="myAudio" loop className="hide">
          <source src={song} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <div onClick={toggleMusic}>
          <img
            src={play ? IconMusic : IconMusicStop}
            className="icon-music"
            alt="icon-music"
            title={`${play ? 'Matikan Musik' : 'Putar Musik'}`}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default FloatingMusic;
