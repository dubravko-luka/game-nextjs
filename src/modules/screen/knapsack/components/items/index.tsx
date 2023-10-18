import React, { memo, useEffect, useState } from 'react';
import styles from './styles.module.css'
import Image from '@/components/Image';
import { RootState } from '@/store/types';
import { useSelector } from 'react-redux';
import { KNAPSACK_ENUM_TAB } from '@/types/enum';
import Detail from './detail';

type Props = {
  //
};

const card_fragments = [0, 1, 2, 3].map((item, index) => {
  return {
    id: item,
    type: 0,
    name: "Puzzle piece MAX",
    src: '/images/player/avatar.png'
  }
})

const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
  return {
    id: item,
    type: 1,
    name: "Gemstone",
    src: '/images/items/gemstone.png'
  }
})

const gift_bags = [0, 1, 2, 3, 4, 5].map((item, index) => {
  return {
    id: item,
    type: 2,
    name: "Pack Card",
    src: '/images/items/pack-card.png'
  }
})

const all = [
  ...card_fragments,
  ...items,
  ...gift_bags,
]

const Iterms: React.FC<Props> = () => {

  const [itemSelect, setItemSelect] = useState(all[0])
  const tabActive = useSelector((state: RootState) => state?.knapsack?.tab)

  useEffect(() => {
    if (tabActive === KNAPSACK_ENUM_TAB.ALL) {
      setItemSelect(all[0])
    }
    if (tabActive === KNAPSACK_ENUM_TAB.CARD_FRAGMENT) {
      setItemSelect(card_fragments[0])
    }
    if (tabActive === KNAPSACK_ENUM_TAB.ITEMS) {
      setItemSelect(items[0])
    }
    if (tabActive === KNAPSACK_ENUM_TAB.GIFT_BAG) {
      setItemSelect(gift_bags[0])
    }
  }, [tabActive])

  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.wrapItems}`}>
          <div className={`${styles.content} no-sb`}>
            <div className={`${styles.items}`}>
              {
                tabActive === KNAPSACK_ENUM_TAB.ALL && all.map((item, index) => (
                  <div key={index} className={`${styles.item} ${itemSelect.id === item.id && itemSelect.type === item.type ? styles.active : ''}`} onClick={() => setItemSelect(item)}>
                    <Image option={{ className: styles.imgItem }} name={item?.src} />
                  </div>
                ))
              }
              {
                tabActive === KNAPSACK_ENUM_TAB.CARD_FRAGMENT && card_fragments.map((item, index) => (
                  <div key={index} className={`${styles.item} ${itemSelect.id === item.id && itemSelect.type === item.type ? styles.active : ''}`} onClick={() => setItemSelect(item)}>
                    <Image option={{ className: styles.imgItem }} name={item?.src} />
                  </div>
                ))
              }
              {
                tabActive === KNAPSACK_ENUM_TAB.ITEMS && items.map((item, index) => (
                  <div key={index} className={`${styles.item} ${itemSelect.id === item.id && itemSelect.type === item.type ? styles.active : ''}`} onClick={() => setItemSelect(item)}>
                    <Image option={{ className: styles.imgItem }} name={item?.src} />
                  </div>
                ))
              }
              {
                tabActive === KNAPSACK_ENUM_TAB.GIFT_BAG && gift_bags.map((item, index) => (
                  <div key={index} className={`${styles.item} ${itemSelect.id === item.id && itemSelect.type === item.type ? styles.active : ''}`} onClick={() => setItemSelect(item)}>
                    <Image option={{ className: styles.imgItem }} name={item?.src} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <Detail item={itemSelect} />
      </div>
    </>
  );
};

export default memo(Iterms);
