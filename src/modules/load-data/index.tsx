import { imageListName, imagesList } from '@/constants/images';
import { setImages } from '@/store/actions/imageAction';
import { IIndexedDbImage } from '@/types/interfaces';
import { clearAllDataImage, getFullImage, openDB, saveImageToDB } from '@/utils/indexedDB';
import React, { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './styles.module.css';
import { VERSION } from '@/constants/load-image-data-version';
import _ from 'lodash';

type Props = {
	setLoaded: any;
};

const key_localstorage_image = 'ver.image';

const LoadData: React.FC<Props> = ({ setLoaded }) => {
	const [progress, setProgress] = useState(0);
	const dispatch = useDispatch();

	const handleSaveImageToDB = async () => {
		const ver = localStorage.getItem(key_localstorage_image);
		if (ver !== VERSION) {
			clearAllDataImage();
		}

		localStorage.setItem(key_localstorage_image, VERSION);

		const imageList = imagesList;

		const totalImages = imageList.length;
		let loadedImages = 0;

		const images: IIndexedDbImage[] = await getFullImage();

		await openDB()
			.then((db) => {
				const loadImages = async () => {
					for (let index = 0; index < imageList.length; index++) {
						const base64 = _.find(images, { key: imageList[index] })?.base64Image;
						if (base64 !== '') {
							dispatch(setImages(images));
						}
						if (base64 === '') {
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
								images[index] = {
									key: imageListName[index].toString(),
									base64Image: base64Image.toString(),
								};

								dispatch(setImages(images));

								loadedImages++;
								setProgress((loadedImages / totalImages) * 100);
							}
						} else {
							loadedImages++;
							setProgress((loadedImages / totalImages) * 100);
						}

						if (loadedImages === imageListName.length) {
							dispatch(setImages(images));
							localStorage.setItem(key_localstorage_image, VERSION);
							setLoaded(true);
						}
					}
				};

				loadImages();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// const handleGetAllImage = async () => {
	// 	const images: IIndexedDbImage[] = await getFullImage();
	// 	dispatch(setImages(images));
	// 	localStorage.setItem(key_localstorage_image, VERSION);
	// 	setLoaded(true);
	// };

	const handleImageLoad = async () => {
		handleSaveImageToDB();
	};

	useEffect(() => {
		handleImageLoad();

		// eslint-disable-next-line
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
