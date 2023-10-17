import React, { memo, useEffect, useState } from 'react';
import styles from './styles.module.css'

type Props = {
  //
};

const FrameAvatar: React.FC<Props> = () => {

  const [svg, setSvg] = useState(<></>);

  useEffect(() => {
    setSvg(
      <svg id={styles.svg} viewBox="0 0 166 166" fill="none" xmlns="http://www.w3.org/2000/svg">
        <animateMotion xlinkHref="#circle" dur="3s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path" />
        </animateMotion>
        <g clip-path="url(#clip0_360_3)">
          <path id='path' d="M158 8H8V158H158V8Z" stroke="#FFC700" stroke-width="3" />
          <g id='circle' filter="url(#filter0_d_360_3)">
            <circle r="1" fill="#FFC700" />
          </g>
        </g>
        <defs>
          <filter id="filter0_d_360_3" x="-12" y="-12" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_360_3" />
            <feOffset />
            <feGaussianBlur stdDeviation="3.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.780392 0 0 0 0 0 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_360_3" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_360_3" result="shape" />
          </filter>
          <clipPath id="clip0_360_3">
            <rect width="166" height="166" fill="white" />
          </clipPath>
        </defs>
      </svg>
    )
  }, [])

  return (
    <>
      <div className={`${styles.wrapper}`}>
        {svg}
      </div>
    </>
  );
};

export default memo(FrameAvatar);
