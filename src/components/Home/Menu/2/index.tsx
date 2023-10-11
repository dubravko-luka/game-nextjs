import React, { memo } from 'react';
import styles from './styles.module.css'
import Icon from '@/components/Icons/1'
import Icon2 from '@/components/Icons/2'
import { ICON_1_ENUM, ICON_2_ENUM } from '@/types/enum';

type Props = {
  //
};

const foreignNames = [
  'JohnDoe',
  'JaneSmith',
  'MichaelBrown',
  'EmilyJohnson',
  'WilliamDavis',
  'OliviaMartinez',
  'JamesWilson',
  'SophiaLopez',
  'RobertAnderson',
  'MiaGonzalez',
  'DavidTaylor',
  'AvaHernandez',
  'JosephMoore',
  'IsabellaMartin',
  'CharlesClark',
  'AbigailLewis',
  'RichardYoung',
  'NoraWalker',
  'ThomasWhite',
  'EllaHall',
];

const MenuHome: React.FC<Props> = () => {
  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.head}`}>
          <Icon icon={ICON_1_ENUM.RANK} />
        </div>
        <div className={`${styles.content} no-sb`}>
          {
            foreignNames?.map((item, index) => (
              <div className={`${styles.item}`} key={index}>
                <div className={`${styles.numberRank}`}>
                  <div className={`${styles.rank}`}>
                    {
                      index === 0 && <Icon2 icon={ICON_2_ENUM.NUMBER_1} />
                    }
                    {
                      index === 1 && <Icon2 icon={ICON_2_ENUM.NUMBER_2} />
                    }
                    {
                      index === 2 && <Icon2 icon={ICON_2_ENUM.NUMBER_3} />
                    }
                  </div>
                </div>
                <div className={`${styles.avatar}`}>
                  <img className={styles.imgAvatar} src="/images/player/avatar.png" alt="" />
                </div>
                <div className={`${styles.info}`}>
                  <div>
                    <p className={`${styles.name}`}>{item}</p>
                    <p className={`${styles.wrapPoint}`}>
                      Point: <span className={`${styles.point}`}>{10873 - index * 439}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default memo(MenuHome);
