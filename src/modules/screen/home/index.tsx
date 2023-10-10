import React, { memo, useEffect, useState } from 'react';
import styles from './styles.module.css'
import { ButtonMain, ButtonLeft, ButtonRight } from '@/components/Home/ButtonMain';
import CamPaignIconHome from './components/CampaignIcon/pvp'
import { MODE_GAME, SCREEN_ENUM } from '@/types/enum';
import { useDispatch } from 'react-redux';
import { setScreen } from '@/store/actions/screenAction';

type Props = {
  //
};

const HomeScreen: React.FC<Props> = () => {

  const [mode, setMode] = useState<MODE_GAME>(MODE_GAME.PVP)
  const dispath = useDispatch()

  // useEffect(() => {
  //   setTimeout(() => {
  //     setMode(MODE_GAME.PVP)
  //   }, 2000)
  // }, [])

  return (
    <>
      <div className={`${styles.wrapper}`}>
        <img className={styles.imgBackground} src="/images/home/background.jpeg" alt="" />
        {/*  */}
        <div className={`${styles.campaignIcon}`}>
          {
            mode === MODE_GAME.PVP
              ? <CamPaignIconHome />
              : <></>
          }
        </div>
        {/*  */}
        <div className={`${styles.buttonMain}`} onClick={() => dispath(setScreen(SCREEN_ENUM.TUTORIAL))}>
          <div className={`${styles._buttonMain}`}>
            <ButtonMain />
            <div className={`${styles.btnGroup}`}>
              <div className={`${styles._btnGroup}`}>
                <button className={styles.btnMain}>PvP</button>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.buttonLeft}`}>
          <ButtonLeft />
        </div>
        <div className={`${styles.buttonRight}`}>
          <ButtonRight />
        </div>
      </div>
    </>
  );
};

export default memo(HomeScreen);
