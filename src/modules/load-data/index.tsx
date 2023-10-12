import { imageListName, imagesList } from '@/constants/images';
import { setImages } from '@/store/actions/imageAction';
import { IIndexedDbImage } from '@/types/interfaces';
import { clearAllDataImage, getFullImage, getObjectStoreKeys, openDB, saveImageToDB } from '@/utils/indexedDB';
import React, { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './styles.module.css'

type Props = {
  setLoaded: any
}

const LoadData: React.FC<Props> = ({ setLoaded }) => {

  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();

  const handleSaveImageToDB = () => {
    clearAllDataImage();
    const imageList = imagesList;

    const totalImages = imageList.length;
    let loadedImages = 0;

    openDB()
      .then((db) => {
        const loadImages = async () => {
          for (let index = 0; index < imageList.length; index++) {
            const imageUrl = imageList[index];
            const response = await fetch(imageUrl);
            if (response.ok) {
              const blob = await response.blob();
              const base64Image = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.readAsDataURL(blob);
              });

              saveImageToDB(db, { id: imageListName[index], base64Image });

              loadedImages++;
              setProgress((loadedImages / totalImages) * 100);
            }
          }
        };

        loadImages();
      })
      .catch((error) => {
        console.log(error);
      });
    handleGetAllImage()
  }

  const handleGetAllImage = async () => {
    const images: IIndexedDbImage[] = await getFullImage();
    dispatch(setImages(images));
    setLoaded(true)
  }

  const handleImageLoad = async () => {
    const imagesStore: any = await getObjectStoreKeys();
    const missingElements = imageListName.filter((element) => !imagesStore.includes(element));
    if (missingElements.length > 0) {
      handleSaveImageToDB()
    } else {
      setProgress(100)
      handleGetAllImage()
    }
  }

  useEffect(() => {
    handleImageLoad();
  }, []);

  return (
    <div className={styles.wrapper}>
      <img className={styles.bgLoad} src="/images/loading/background.png" alt="" />
      <div className={`${styles.contnent}`}>
        <p className={`${styles.textLoad}`}>{Math.round(progress)} %</p>
        <div style={{ '--width': `${Math.round(progress)}%` } as any} className={`${styles.progressBar}`}></div>
      </div>
    </div>
  );
};

export default memo(LoadData);
