import React, { memo, useState } from 'react';
import ReactPlayer from 'react-player/youtube';

import cls from './Player.module.scss';
import { Modal } from '../Modal';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useSizesScreen } from '@/shared/lib/hooks/useSizesScreen';
import { useResize } from '@/shared/lib/hooks/useResize';

export interface PlayerProps {
   className?: string;
   url: string;
   onReady?: () => void;
   addPanel?: boolean;
   poster: string;
}

const Player = memo((props: PlayerProps) => {
   const { className, url, onReady, addPanel, poster } = props;
   const [isPlaying, setIsPlaying] = useState(false);
   const { width, height } = useSizesScreen();
   const { isHorizontal } = useResize();

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
      <div className={classNames(cls.videoContainer, { [cls.fullscren]: isPlaying }, [className])}>
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
                  width={`${isHorizontal ? width / 1.3 : width / 1.1}px`}
                  height={`${isHorizontal ? height / 1.2 : width / 2.2}px`}
                  url={url}
                  onEnded={endVideo}
                  config={configYoutube}
               />
            </Modal>
         )}
      </div>
   );
});

export default Player;
