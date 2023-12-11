import React, { useEffect, useRef, useState } from 'react'


const AppYoutubePlayer = ({videoId, onClose}) => {
    const playerRef = useRef(null); 

    useEffect(() => {
        // Loads YouTubeAPI script on HTML
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
      // Loads iframe on div with id=player
      const onYouTubeIframeAPIReady = () => {
        if (window.YT && window.YT.Player)
        {
            playerRef.current = new window.YT.Player('player', {
                height: 'auto',
                width: 'auto',
                videoId: videoId,
                playerVars: {
                  autoplay: 1,
                  controls: 1,
                  playsinline: 1,
                },
                events: {
                  onReady: onPlayerReady,
                  onStateChange: onPlayerStateChange,
                },
              });
        }
        else 
        {
            // YT.Player object is not available yet, wait and retry after a delay
            setTimeout(() => {
                onYouTubeIframeAPIReady()
            }, 100); // Retry after 100 milliseconds
        }
      }
      const onPlayerReady = event => {
        event.target.playVideo();
      };

      const onPlayerStateChange = (event) => {
        if (event.data == YT.PlayerState.ENDED){ 
            playerRef.current.destroy();
        }
      }
        
      onYouTubeIframeAPIReady();

      return () => {
        // unmounts the YT.player by accessing through playerRef 
        if (playerRef.current) {
          playerRef.current.destroy();
        }
      };
    }, [videoId]);

    return (
      <div className='h-full'>
        <div className='w-full h-full' id="player" />
      </div>
    );
  };
  
export default AppYoutubePlayer;