import React, { memo, useState } from 'react';
import styles from './styles.module.css'
import Sphere from '@/components/Sphere';
import Route from './components/route';
import _ from 'lodash';
import Cloud from './components/cloud';

type Props = {
  //
};

enum MAP_ENUM {
  UNDEAD = "UNDEAD",
  TITAN = "TITAN",
  GOD = "GOD",
  HUMAN = "HUMAN",
}

const map = [
  {
    id: 2,
    src: '/images/tutorial/god-map.png',
    name: 'God',
    type: MAP_ENUM?.GOD,
    class: styles.mapGod
  },
  {
    id: 1,
    src: '/images/tutorial/titan-map.png',
    name: 'Titan',
    type: MAP_ENUM?.TITAN,
    class: styles.mapTitan
  },
  {
    id: 3,
    src: '/images/tutorial/human-map.png',
    name: 'Human',
    type: MAP_ENUM?.HUMAN,
    class: styles.mapHuman
  },
  {
    id: 0,
    src: '/images/tutorial/undead-map.png',
    name: 'Undead',
    type: MAP_ENUM?.UNDEAD,
    class: styles.mapUndead
  }
]

const Map: React.FC<Props> = () => {

  const [currentMap, setCurrentMap] = useState(_.find(map, { id: 3 }));
  const [hoverIndex, setHoverIndex] = useState(-1);

  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.content}`}>
          {
            map?.map((item, index) => (
              <div
                key={index}
                className={`${styles.island} ${item.class} ${item?.id <= Number(currentMap?.id) ? styles.active : ''} ${hoverIndex === index ? styles.hover : ''}`}
              >
                <div className={`${styles.sphere}`}>
                  <Sphere />
                </div>
                <img className={styles.imgMap} src={item?.src} alt={item?.name} />
              </div>
            ))
          }

          {
            currentMap?.type !== MAP_ENUM.UNDEAD && (
              <div className={`${styles.route} ${styles[currentMap?.type?.toLowerCase() ?? '']}`}>
                <div className={`${styles._route}`}>
                  <Route />
                </div>
              </div>
            )
          }
        </div>
      </div>

      <div className={`${styles.cloud}`}>
        <Cloud />
      </div>
      <div className={`${styles.wrapperTransparent}`}>
        <div className={`${styles.content}`}>
          {
            map?.map((item, index) => (
              <div
                key={index}
                className={`${styles.island} ${item.class}`}
                onMouseEnter={() => {
                  setHoverIndex(index)
                }}
                onMouseLeave={() => {
                  setHoverIndex(-1)
                }}
              >
                <img className={styles.imgMap} src={item?.src} alt={item?.name} />
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default memo(Map);
