import React, { memo, useEffect, useState } from 'react';
import styles from './styles.module.css'
import { ButtonMain, ButtonLeft, ButtonRight } from '@/components/Home/ButtonMain';
import CamPaignIconPVP from './components/CampaignIcon/pvp'
import CamPaignIconTutorial from './components/CampaignIcon/tutorial'
import { MODE_GAME, SCREEN_ENUM } from '@/types/enum';
import { useDispatch } from 'react-redux';
import { setScreen } from '@/store/actions/screenAction';
import _ from 'lodash';

type Props = {
  //
};

const modeGame = [
  {
    mode: MODE_GAME.PVP,
    name: "PvP",
    screen: SCREEN_ENUM.PVP,
    component: <CamPaignIconPVP />
  },
  {
    mode: MODE_GAME.TUTORIAL,
    name: "TUTORIAL",
    screen: SCREEN_ENUM.TUTORIAL,
    component: <CamPaignIconTutorial />
  }
]

const HomeScreen: React.FC<Props> = () => {

  const [mode, setMode] = useState<number>(0)
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
            modeGame[mode].component
          }
        </div>
        {/*  */}
        <div className={`${styles.buttonMain}`} onClick={() => dispath(setScreen(modeGame[mode].screen))}>
          <div className={`${styles._buttonMain}`}>
            <ButtonMain />
            <div className={`${styles.btnGroup}`}>
              <div className={`${styles._btnGroup}`}>
                <button className={styles.btnMain}>{modeGame[mode].name}</button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.buttonLeft}`}
          onClick={() => {
            if (mode === 0) {
              setMode(modeGame.length - 1)
            } else {
              setMode(mode - 1)
            }
          }}
        >
          <ButtonLeft />
        </div>
        <div
          className={`${styles.buttonRight}`}
          onClick={() => {
            if (mode === modeGame.length - 1) {
              setMode(0)
            } else {
              setMode(mode + 1)
            }
          }}
        >
          <ButtonRight />
        </div>
      </div>
    </>
  );
};

export default memo(HomeScreen);
