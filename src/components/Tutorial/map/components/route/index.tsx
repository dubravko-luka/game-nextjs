import React, { memo } from 'react';
import styles from './styles.module.css'

type Props = {
  //
};

const Route: React.FC<Props> = () => {
  return (
    <>
      <div className={`${styles.wrapper}`}>
        <svg id={styles.svg} viewBox="0 0 750 1300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <animateMotion xlinkHref="#rocket" dur="5s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#planePath" />
          </animateMotion>
          <path id={`planePath`} d="M659.798 1187C735.554 994.455 646.333 857.526 538.344 894.24C410.498 953.662 141.205 1342.97 65.993 1009.82C40.5597 825.571 140.389 668.517 258.442 597.945C374.048 529.684 508.422 563.27 596.555 412.199C687.135 167.031 415.122 115.768 372.552 114" stroke="#FFC700" stroke-width="5" stroke-miterlimit="10" stroke-dasharray="10 20.1" />
          <g id='rocket' clip-path="url(#clip0_298_51)">
            <path d="M55 -0.5L-12 -27L-12 26L55 -0.5Z" fill="#FFC700" />
          </g>
        </svg>
      </div>
    </>
  );
};

export default memo(Route);
