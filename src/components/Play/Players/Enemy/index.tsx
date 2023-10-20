import React, { memo } from 'react';
import styles from './styles.module.css'
import Position from '../../Position';
import { PLAYER_ENUM } from '@/types/enum';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import { setCardTargetSelected } from '@/store/actions/allyAction';

type Props = {
};

const positionPlayer = [
  {
    type: PLAYER_ENUM.PLAYER_2,
    top: '51px'
  }
]

const Enemy: React.FC<Props> = () => {

  const { card_1, card_2, card_3, card_4, card_main } = useSelector((state: RootState) => state?.enemy);
  const { card_selected, card_target_selected } = useSelector((state: RootState) => state?.ally);

  const dispatch = useDispatch();

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
              if (card_selected !== -1 && card_target_selected === -1 && item.src !== '') {
                dispatch(setCardTargetSelected(index))
              }
            }}>
              <Position action={false} card={item} isMain={index === 2} />
            </div>
          ))
        }
      </div>
    </>
  );
};

export default memo(Enemy);
