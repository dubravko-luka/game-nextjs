import React, { memo } from 'react';
import styles from './styles.module.css'
import { KNAPSACK_ENUM_TAB } from '@/types/enum';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import { setTab } from '@/store/actions/knapsackAction';

type Props = {
  //
};

const tabs = [
  {
    name: "All",
    tab: KNAPSACK_ENUM_TAB.ALL
  },
  {
    name: "Card Fragments",
    tab: KNAPSACK_ENUM_TAB.CARD_FRAGMENT
  },
  {
    name: "Items",
    tab: KNAPSACK_ENUM_TAB.ITEMS
  },
  {
    name: "Gift Bag",
    tab: KNAPSACK_ENUM_TAB.GIFT_BAG
  }
]

const Tab: React.FC<Props> = () => {

  const tabActive = useSelector((state: RootState) => state?.knapsack?.tab)
  const dispatch = useDispatch()

  return (
    <>
      <div className={`${styles.wrapper}`}>
        {
          tabs.map((item, index) => (
            <div
              onClick={() => dispatch(setTab(item.tab))}
              className={`${styles.item} ${item?.tab === tabActive ? styles.active : ''}`}
              key={index}
            >
              <p className={`${styles.itemText}`}>{item.name}</p>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default memo(Tab);
