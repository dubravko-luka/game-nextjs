import React, { memo, useEffect, useState } from 'react';
import styles from './styles.module.css'
import Image from '@/components/Image';
import { RootState } from '@/store/types';
import { useSelector } from 'react-redux';
import { CARD_ENUM_TAB } from '@/types/enum';
import Detail from './detail';

type Props = {
  //
};

const human = [
  {
    id: 0,
    type: 0,
    name: "Mage",
    src: '/images/cards/mage.png'
  }
]

const god = [
  {
    id: 0,
    type: 1,
    name: "Takeit",
    src: '/images/cards/takeit.png'
  }
]

const titan = [
  {
    id: 0,
    type: 2,
    name: "Surtur",
    src: '/images/cards/surtur.png'
  }
]

const undead = [
  {
    id: 0,
    type: 3,
    name: "Hel",
    src: '/images/cards/hel.png'
  }
]

const all = [
  ...human,
  ...god,
  ...undead,
  ...titan
]

const Iterms: React.FC<Props> = () => {

  const [itemSelect, setItemSelect] = useState(all[0])
  const tabActive = useSelector((state: RootState) => state?.card?.tab)

  useEffect(() => {
    if (tabActive === CARD_ENUM_TAB.ALL) {
      setItemSelect(all[0])
    }
    if (tabActive === CARD_ENUM_TAB.GOD) {
      setItemSelect(god[0])
    }
    if (tabActive === CARD_ENUM_TAB.HUMAN) {
      setItemSelect(human[0])
    }
    if (tabActive === CARD_ENUM_TAB.TITAN) {
      setItemSelect(titan[0])
    }
    if (tabActive === CARD_ENUM_TAB.UNDEAD) {
      setItemSelect(undead[0])
    }
  }, [tabActive])

  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.wrapItems}`}>
          <div className={`${styles.items}`}>
            {
              tabActive === CARD_ENUM_TAB.ALL && all.map((item, index) => (
                <div key={index} className={`${styles.item} ${itemSelect.id === item.id && itemSelect.type === item.type ? styles.active : ''}`} onClick={() => setItemSelect(item)}>
                  <Image option={{ className: styles.imgItem }} name={item?.src} />
                </div>
              ))
            }
            {
              tabActive === CARD_ENUM_TAB.GOD && god.map((item, index) => (
                <div key={index} className={`${styles.item} ${itemSelect.id === item.id && itemSelect.type === item.type ? styles.active : ''}`} onClick={() => setItemSelect(item)}>
                  <Image option={{ className: styles.imgItem }} name={item?.src} />
                </div>
              ))
            }
            {
              tabActive === CARD_ENUM_TAB.HUMAN && human.map((item, index) => (
                <div key={index} className={`${styles.item} ${itemSelect.id === item.id && itemSelect.type === item.type ? styles.active : ''}`} onClick={() => setItemSelect(item)}>
                  <Image option={{ className: styles.imgItem }} name={item?.src} />
                </div>
              ))
            }
            {
              tabActive === CARD_ENUM_TAB.TITAN && titan.map((item, index) => (
                <div key={index} className={`${styles.item} ${itemSelect.id === item.id && itemSelect.type === item.type ? styles.active : ''}`} onClick={() => setItemSelect(item)}>
                  <Image option={{ className: styles.imgItem }} name={item?.src} />
                </div>
              ))
            }
            {
              tabActive === CARD_ENUM_TAB.UNDEAD && undead.map((item, index) => (
                <div key={index} className={`${styles.item} ${itemSelect.id === item.id && itemSelect.type === item.type ? styles.active : ''}`} onClick={() => setItemSelect(item)}>
                  <Image option={{ className: styles.imgItem }} name={item?.src} />
                </div>
              ))
            }
          </div>
        </div>
        <Detail item={itemSelect} />
      </div>
    </>
  );
};

export default memo(Iterms);
