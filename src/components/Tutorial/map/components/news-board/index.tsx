import React, { memo, useEffect, useState } from 'react';
import styles from './styles.module.css'

type Props = {
  //
};

const NewsBoard: React.FC<Props> = () => {

  const [svg, setSvg] = useState(<></>)

  useEffect(() => {
    setSvg(
      <svg id={styles.svg} viewBox="0 0 500 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <animateMotion xlinkHref="#circle" dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path" />
        </animateMotion>

        <animateMotion xlinkHref="#circle-2" begin={'-5s'} dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path" />
        </animateMotion>

        <path id='path' d="M27 42V61L27.4902 558.51C27.4956 564.029 31.9711 568.5 37.4901 568.5H463C468.523 568.5 473 564.023 473 558.5V42C473 36.4772 468.523 32 463 32H37C31.4772 32 27 36.4772 27 42Z" fill="black" fill-opacity="0.5" stroke="#FFC700" stroke-opacity="0.5" stroke-width="5" />

        <g id='circle' clip-path="url(#clip0_303_60)">
          <path d="M6 -14H-4C-9.52285 -14 -14 -9.52285 -14 -4V6C-14 11.5228 -9.52285 16 -4 16H6C11.5228 16 16 11.5228 16 6V-4C16 -9.52285 11.5228 -14 6 -14Z" fill="url(#paint0_radial_303_65)" />
          <defs>
            <radialGradient id="paint0_radial_303_65" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1 1) rotate(90) scale(15)">
              <stop offset="0.192708" stop-color="#FFC700" />
              <stop offset="1" stop-color="#FFC700" stop-opacity="0" />
            </radialGradient>
          </defs>
        </g>

        <g id='circle-2' clip-path="url(#clip0_303_60)">
          <path d="M6 -14H-4C-9.52285 -14 -14 -9.52285 -14 -4V6C-14 11.5228 -9.52285 16 -4 16H6C11.5228 16 16 11.5228 16 6V-4C16 -9.52285 11.5228 -14 6 -14Z" fill="url(#paint0_radial_303_65)" />
          <defs>
            <radialGradient id="paint0_radial_303_65" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1 1) rotate(90) scale(15)">
              <stop offset="0.192708" stop-color="#FFC700" />
              <stop offset="1" stop-color="#FFC700" stop-opacity="0" />
            </radialGradient>
          </defs>
        </g>
      </svg>
    )
  }, [])

  return (
    <>
      {svg}
    </>
  );
};

export default memo(NewsBoard);
