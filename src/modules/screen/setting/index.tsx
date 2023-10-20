import React, { memo } from 'react';
import Icon from '@/components/Icons/1'
import styles from './styles.module.css'
import stylesComponent from './styles-component.module.css'
import LayoutScreen from '@/components/Common/LayoutScreen';
import { ICON_1_ENUM } from '@/types/enum';
import { useDispatch } from 'react-redux';
import { setShowSetting } from '@/store/actions/settingAction';
import InputRange from '@/components/InputRange';
import { Helmet } from 'react-helmet';

type Props = {
  children?: React.ReactNode
};

const NameInGame: React.FC = () => {
  return (
    <div className={`${stylesComponent.column}`}>
      <p className={`${stylesComponent.titleSetting}`}>
        Name in game
      </p>
      <div className={`${stylesComponent.action}`}>
        <input defaultValue="Player Name" className={styles.nameInGameInput} type="text" />
      </div>
    </div>
  )
}

const Sound: React.FC = () => {
  return (
    <div className={`${stylesComponent.column}`}>
      <p className={`${stylesComponent.titleSetting}`}>
        Sound
      </p>
      <div className={`${stylesComponent.action}`}>
        <div className={`${styles.inputRange}`}>
          <InputRange />
        </div>
      </div>
    </div>
  )
}

const Language: React.FC = () => {
  return (
    <div className={`${stylesComponent.column}`}>
      <p className={`${stylesComponent.titleSetting}`}>
        Language
      </p>
      <div className={`${stylesComponent.action}`}>
        <button className={`${styles.buttonLanguage}`}>VI</button>
        <button className={`${styles.buttonLanguage} ${styles.buttonLanguageActive}`}>EN</button>
      </div>
    </div>
  )
}

const Music: React.FC = () => {
  return (
    <div className={`${stylesComponent.column}`}>
      <p className={`${stylesComponent.titleSetting}`}>
        Music
      </p>
      <div className={`${stylesComponent.action}`}>
        <div className={`${styles.inputRange}`}>
          <InputRange />
        </div>
      </div>
    </div>
  )
}

const SettingScreen: React.FC<Props> = ({ children }) => {

  const dispath = useDispatch();

  return (
    <>
      <Helmet>
        <style>{`
          .screen-main > div {
            z-index: -1;
          }
        `}</style>
      </Helmet>
      <div className={`${styles.setting}`}>
        <div className={`${styles.wrapper}`}>
          <div className={`${styles.content}`}>
            <div className={`${styles.header}`} onClick={() => dispath(setShowSetting(false))}>
              <Icon icon={ICON_1_ENUM.EXISTS} />
            </div>
            <LayoutScreen>
              <div className={`${styles.contentSetting}`}>
                <div className={`${styles.grid}`}>
                  <NameInGame />
                  <Sound />
                  <Language />
                  <Music />
                  {children ?? <></>}
                </div>
              </div>
            </LayoutScreen>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(SettingScreen);
