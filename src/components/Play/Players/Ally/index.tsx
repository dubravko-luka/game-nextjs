import React, { memo, useEffect, useRef, useState } from 'react';
import styles from './styles.module.css'
import Position from '../../Position';
import { PLAYER_ENUM, position_card } from '@/types/enum';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import { setCardFour, setCardIndexSelected, setCardOne, setCardReserve, setCardReserveSelected, setCardTargetSelected, setCardThree, setCardTwo } from '@/store/actions/allyAction';
import Image from '@/components/Image';

type Props = {
  // 
};

const positionPlayer = [
  {
    type: PLAYER_ENUM.PLAYER_1,
    top: '456px',
  },
]

const actionStore = [
  setCardOne,
  setCardTwo,
  setCardThree,
  setCardFour,
]

const Ally: React.FC<Props> = () => {

  const { card_1, card_2, card_3, card_4, card_main, card_selected, card_target_selected, card_reserve, card_reserve_selected } = useSelector((state: RootState) => state?.ally);
  const dispatch = useDispatch();

  const handleTop = (index: number) => {
    return position_card.TOP_ENEMY
  }

  const handleLeft = (index: number) => {
    if (index === 2) {
      return (card_target_selected - card_selected) * 129.5
    } else {
      return (card_target_selected - card_selected) * 129.5
    }
  }

  const handleScale = (index: number) => {
    if (index === 2 && card_target_selected !== 2) {
      return 0.9
    }
    return 1
  }

  useEffect(() => {
    if (card_target_selected !== -1) {
      const timeOut = setTimeout(() => {
        clearTimeout(timeOut)
        dispatch(setCardTargetSelected(-1))
        dispatch(setCardIndexSelected(-1))
      }, 1500)
    }
  }, [card_target_selected])

  // ------------
  const refCardReserve: any = useRef()
  const [animaion, setAnimation] = useState(true)

  const resetCardReserveSelected = () => {
    dispatch(setCardReserveSelected(-1))
  }

  const handleClickOutsideCard = (event: any, ref: any, action: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      action();
    }
  }

  useEffect(() => {
    document.addEventListener("click", (e) => handleClickOutsideCard(e, refCardReserve, resetCardReserveSelected));
    return () => {
      document.removeEventListener("click", (e) => handleClickOutsideCard(e, refCardReserve, resetCardReserveSelected));
    };
    // eslint-disable-next-line
  }, [refCardReserve]);

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
            <div
              key={index}
              onClick={() => {
                if (item.src !== '') {
                  if (card_target_selected === -1) {
                    if (card_selected === index) {
                      dispatch(setCardIndexSelected(-1))
                    } else {
                      dispatch(setCardIndexSelected(index))
                    }
                  }
                } else {
                  if (index !== 2) {
                    setAnimation(false)
                    if (index > 2) {
                      dispatch(actionStore[index - 1](card_reserve[card_reserve_selected]))
                    } else {
                      dispatch(actionStore[index](card_reserve[card_reserve_selected]))
                    }
                    dispatch(setCardReserveSelected(-1))
                    dispatch(setCardReserve(card_reserve.filter((_, index) => index !== card_reserve_selected)))
                    const timeOut = setTimeout(() => {
                      clearTimeout(timeOut)
                      setAnimation(true)
                    }, 300)
                  }
                }
              }}
            >
              <Position
                selected={card_selected === index}
                action={card_target_selected !== -1 && card_selected === index}
                card={item}
                isMain={index === 2}
                top={card_target_selected !== -1 && card_selected === index ? handleTop(index) : '0'}
                left={card_target_selected !== -1 && card_selected === index ? handleLeft(index) : '0'}
                scale={card_target_selected !== -1 && card_selected === index ? handleScale(index) : '1'}
              />
            </div>
          ))
        }
      </div>
      {/* Card Reserve */}
      <div
        className={`${styles.cardReserves}`}
        ref={refCardReserve}
      >
        {
          card_reserve?.map((item, index) => (
            <div
              style={{ transition: animaion ? 'all .3s linear' : 'unset' }}
              key={index}
              className={`${styles.cardReserveWrap} ${card_reserve_selected === index ? styles.selected : ''}`}
              onClick={() => {
                dispatch(setCardReserveSelected(index))
              }}
            >
              <Image
                option={{ className: styles.imageReserve }}
                name={item.src}
              />
            </div>
          ))
        }
      </div>
      {/* Unknown card */}
      <div className={`${styles.unknownCard}`}>
        <div className={`${styles.unknownCardContent}`}>
          <Image
            option={{ className: styles.imageReserve }}
            name={'/images/play/back-card.png'}
          />
        </div>
      </div>
    </>
  );
};

export default memo(Ally);
