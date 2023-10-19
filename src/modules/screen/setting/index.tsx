import React, { memo } from 'react';
import Icon from '@/components/Icons/1'
import styles from './styles.module.css'
import LayoutScreen from '@/components/Common/LayoutScreen';
import { ICON_1_ENUM } from '@/types/enum';
import { useDispatch } from 'react-redux';
import { setShow } from '@/store/actions/settingAction';
import InputRange from '@/components/InputRange';
import { Helmet } from 'react-helmet';

type Props = {
  //
};

const SettingScreen: React.FC<Props> = () => {

  const dispath = useDispatch();

  return (
    <>
      <Helmet>
        <style>{`
          .screen-main {
            z-index: -1;
          }
        `}</style>
      </Helmet>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.content}`}>
          <div className={`${styles.header}`} onClick={() => dispath(setShow(false))}>
            <Icon icon={ICON_1_ENUM.EXISTS} />
          </div>
          <LayoutScreen>
            <div className={`${styles.contentSetting}`}>
              <div className={`${styles.grid}`}>
                <div className={`${styles.coloumn}`}>
                  <p className={`${styles.titleSetting}`}>
                    Name in game
                  </p>
                  <div className={`${styles.action}`}>
                    <input defaultValue="Player Name" className={styles.nameInGameInput} type="text" />
                  </div>
                </div>
                <div className={`${styles.coloumn}`}>
                  <p className={`${styles.titleSetting}`}>
                    Sound
                  </p>
                  <div className={`${styles.action}`}>
                    <div className={`${styles.inputRange}`}>
                      <InputRange />
                    </div>
                  </div>
                </div>
                <div className={`${styles.coloumn}`}>
                  <p className={`${styles.titleSetting}`}>
                    Language
                  </p>
                  <div className={`${styles.action}`}>
                    <button className={`${styles.buttonLanguage}`}>VI</button>
                    <button className={`${styles.buttonLanguage} ${styles.buttonLanguageActive}`}>EN</button>
                  </div>
                </div>
                <div className={`${styles.coloumn}`}>
                  <p className={`${styles.titleSetting}`}>
                    Music
                  </p>
                  <div className={`${styles.action}`}>
                    <div className={`${styles.inputRange}`}>
                      <InputRange />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </LayoutScreen>
        </div>
      </div>
    </>
  );
};

export default memo(SettingScreen);
