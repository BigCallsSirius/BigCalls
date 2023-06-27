import React, { useEffect, useRef } from 'react';
import {MindARReact} from './mindar-controller';



export function MindARViewThree(props) {
    const containerRef = useRef(null);
    let mindarThree;
    useEffect(() => {
      mindarThree ??= new MindARReact({
        imageTargetSrc: "./streamingassets/targets.mind",
        video: props.video,
      });
 
      mindarThree.initiateAR();
    }, []);
 
    return (
      <div style={{position: "absolute", width: "100vw", height: "100vh", zIndex: -3}} ref={containerRef}>
      </div>
    )
  }