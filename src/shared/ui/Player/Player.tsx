import React, { memo, useState } from 'react';
import ReactPlayer from 'react-player/youtube';

import cls from './Player.module.scss';
import { Modal } from '../Modal';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface PlayerProps {
   className?: string;
   width: number;
   height: number;
   url: string;
   onReady?: () => void;
   addPanel?: boolean;
   poster: string;
}

const Player = memo((props: PlayerProps) => {
   const { className, width, height, url, onReady, addPanel, poster } = props;

   const [isPlaying, setIsPlaying] = useState(false);
   const widthPlayer = 1200;
   const heightPlayer = 800;

   const startVideo = () => {
      setIsPlaying(true);
   };

   const endVideo = () => {
      setIsPlaying(false);
   };

   const configYoutube = {
      playerVars: {
         cc_load_policy: 0,
         iv_load_policy: 3,
         modestbranding: 1,
      },
   };

   return (
      <div
         style={{ width, height }}
         className={classNames(cls.videoContainer, { [cls.fullscren]: isPlaying }, [className])}
      >
         {!isPlaying && (
            <div onClick={startVideo}>
               <img className={cls.poster} src={poster} alt='видео' />
               <span className={classNames(cls.video_play, { [cls.addPanel]: addPanel }, [])}></span>
               {addPanel && (
                  <div className={cls.video_info}>
                     <span>Посмотрите видео «Как правильно делать монтаж»</span>
                     <div className={cls.btn}>Смотреть 2 мин.</div>
                  </div>
               )}
            </div>
         )}
         {isPlaying && (
            <Modal
               onClose={endVideo}
               isOpen={isPlaying}
               buttonCloseHeight={15}
               buttonCloseRight={15}
               buttonCloseTop={15}
               buttonCloseWidth={15}
               delayClose={200}
            >
               <ReactPlayer
                  controls
                  playing={isPlaying}
                  onReady={onReady}
                  width={widthPlayer}
                  height={heightPlayer}
                  url={url}
                  onEnded={endVideo}
                  config={configYoutube}
               />
            </Modal>
         )}
         {/* <ReactPlayer
            controls
            playing={playing}
            onReady={onReady}
            width={width}
            height={height}
            url={url}
            onEnded={onEnded}
            config={configYoutube}
         /> */}
      </div>
   );
});

export default Player;
