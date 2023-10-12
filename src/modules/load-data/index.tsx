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

const version = '1.0.1'

const LoadData: React.FC<Props> = ({ setLoaded }) => {

  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();

  const handleSaveImageToDB = async () => {
    clearAllDataImage();
    const imageList = imagesList;

    const totalImages = imageList.length;
    let loadedImages = 0;

    const images: IIndexedDbImage[] = [];

    await openDB()
      .then((db) => {
        const loadImages = async () => {
          for (let index = 0; index < imageList.length; index++) {
            const imageUrl = imageList[index];
            const response = await fetch(imageUrl);
            if (response.ok) {
              const blob = await response.blob();
              const base64Image: any = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.readAsDataURL(blob);
              });

              await saveImageToDB(db, { id: imageListName[index], base64Image });
              images.push({
                key: imageListName[index].toString(),
                base64Image: base64Image.toString()
              })

              loadedImages++;
              setProgress((loadedImages / totalImages) * 100);
            }
          }
          if (images.length === imageListName.length) {
            dispatch(setImages(images));
            localStorage.setItem('ver.', version);
            setLoaded(true)
          }
        };

        loadImages();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const handleGetAllImage = async () => {
    const images: IIndexedDbImage[] = await getFullImage();
    dispatch(setImages(images));
    localStorage.setItem('ver.', version);
    setLoaded(true)
  }

  const handleImageLoad = async () => {
    const ver = localStorage.getItem("ver.");
    if (ver !== version) {
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
