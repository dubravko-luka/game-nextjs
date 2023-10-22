import { imageListName, imagesList } from '@/constants/images';
import { setImages } from '@/store/actions/imageAction';
import { IIndexedDbImage } from '@/types/interfaces';
import { clearAllDataImage, getFullImage, openDB, saveImageToDB } from '@/utils/indexedDB';
import React, { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './styles.module.css';
import { VERSION } from '@/constants/load-image-data-version';

type Props = {
	setLoaded: any;
};

const key_localstorage_image = 'ver.image';

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
								base64Image: base64Image.toString(),
							});

							loadedImages++;
							setProgress((loadedImages / totalImages) * 100);
						}
					}
					if (images.length === imageListName.length) {
						dispatch(setImages(images));
						localStorage.setItem(key_localstorage_image, VERSION);
						setLoaded(true);
					}
				};

				loadImages();
			})
			.catch((error) => {
				// console.log(error);
			});
	};

	const handleGetAllImage = async () => {
		const images: IIndexedDbImage[] = await getFullImage();
		dispatch(setImages(images));
		localStorage.setItem(key_localstorage_image, VERSION);
		setLoaded(true);
	};

	const handleImageLoad = async () => {
		const ver = localStorage.getItem(key_localstorage_image);
		if (ver !== VERSION) {
			handleSaveImageToDB();
		} else {
			setProgress(100);
			handleGetAllImage();
		}
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
