import React, { memo, useEffect, useState } from 'react';
import styles from './styles.module.css'
import Position from '../../Position';
import { PLAYER_ENUM, position_card } from '@/types/enum';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import { setCardIndexSelected, setCardTargetSelected } from '@/store/actions/allyAction';

type Props = {
  // 
};

const positionPlayer = [
  {
    type: PLAYER_ENUM.PLAYER_1,
    top: '456px',
  },
]

const Ally: React.FC<Props> = () => {

  const { card_1, card_2, card_3, card_4, card_main, card_selected, card_target_selected } = useSelector((state: RootState) => state?.ally);
  const dispatch = useDispatch();

  const handleTop = (index: number) => {
    return position_card.TOP_ENEMY
  }

  const handleLeft = (index: number) => {
    if (index === 2) {
      return (card_target_selected[1] - card_selected) * 129.5
    } else {
      return (card_target_selected[1] - card_selected) * 129.5
    }
  }

  const handleScale = (index: number) => {
    if (index === 2 && card_target_selected[1] !== 2) {
      return 0.9
    }
    return 1
  }

  useEffect(() => {
    if (card_target_selected[1] !== -1) {
      setTimeout(() => {
        dispatch(setCardTargetSelected([-1, -1]))
        dispatch(setCardIndexSelected(-1))
      }, 1500)
    }
  }, [card_target_selected])

  return (
    <>
      <div
        className={`${styles.wrapperPlayer}`}
        style={{
          '--top': positionPlayer[0]?.top
        } as any}
      >
        {
          [card_1, card_2, card_main, card_3, card_4].map((item, index) => (
            <div key={index} onClick={() => {
              if (card_selected === -1) {
                if (card_selected === index) {
                  dispatch(setCardIndexSelected(-1))
                } else {
                  dispatch(setCardIndexSelected(index))
                }
              }
            }}>
              <Position
                selected={card_selected === index}
                action={card_target_selected[1] !== -1 && card_selected === index}
                card={item}
                isMain={index === 2}
                top={card_target_selected[0] !== -1 && card_selected === index ? handleTop(index) : '0'}
                left={card_target_selected[1] !== -1 && card_selected === index ? handleLeft(index) : '0'}
                scale={card_target_selected[1] !== -1 && card_selected === index ? handleScale(index) : '1'}
              />
            </div>
          ))
        }
      </div>
    </>
  );
};

export default memo(Ally);
