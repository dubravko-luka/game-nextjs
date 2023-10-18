import React, { memo, useEffect, useState } from 'react';
import styles from './styles.module.css'
import Icon from '@/components/Icons/1';
import { RootState } from '@/store/types';
import { useSelector } from 'react-redux';
import { ICON_1_ENUM, MAILBOX_ENUM_TAB } from '@/types/enum';
import Detail from './detail';

type Props = {
  //
};

const system = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => {
  return {
    id: item,
    type: 0,
    name: "Information about upcoming event rewards",
    content: "Sending you 20 mission points from day 1 mission of season 9 mission book!<br/><br/>From day 2, daily missions will be refreshed at 0:00 every day.",
    gifts: [
      {
        name: "",
        src: '/images/player/avatar.png',
        quantity: 10
      }
    ]
  }
})

const news: any[] = []

const gifts: any[] = []

const Iterms: React.FC<Props> = () => {

  const [itemSelect, setItemSelect] = useState(system[0])
  const tabActive = useSelector((state: RootState) => state?.mailbox?.tab)

  useEffect(() => {
    if (tabActive === MAILBOX_ENUM_TAB.SYSTEM) {
      setItemSelect(system[0])
    }
    if (tabActive === MAILBOX_ENUM_TAB.NEWS) {
      setItemSelect(news[0])
    }
    if (tabActive === MAILBOX_ENUM_TAB.GIFTS) {
      setItemSelect(gifts[0])
    }
  }, [tabActive])

  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.wrapItems}`}>
          <div className={`${styles.content} no-sb`}>
            <div className={`${styles.items}`}>
              {
                tabActive === MAILBOX_ENUM_TAB.SYSTEM && system.map((item, index) => (
                  <div key={index} className={`${styles.item} ${itemSelect.id === item.id && itemSelect.type === item.type ? styles.active : ''}`} onClick={() => setItemSelect(item)}>
                    <div className={`${styles.icon}`}>
                      <Icon icon={ICON_1_ENUM.LETTER_OPENED} />
                    </div>
                    <div className={`${styles.nameItem}`}>
                      <p className={styles._nameItem}>{item.name}</p>
                    </div>
                    <div className={`${styles.time}`}>
                      <p className={`${styles._time}`}>7 days ago</p>
                    </div>
                  </div>
                ))
              }
              {
                (tabActive === MAILBOX_ENUM_TAB.NEWS || tabActive === MAILBOX_ENUM_TAB.GIFTS) && <></>
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
