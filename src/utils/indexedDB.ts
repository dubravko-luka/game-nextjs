import { imageListName } from "@/constants/images";
import { INDEXEDDB_OBJECT_NAME } from "@/types/enum";
import { IIndexedDbImage } from "@/types/interfaces";

const DB_NAME = 'gameDB'

export const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);

    request.onerror = (event) => {
      reject('Error opening database');
    };

    request.onsuccess = (event: any) => {
      resolve(event.target.result);
    };

    request.onupgradeneeded = (event: any) => {
      const db = event.target.result;
      const objectStore = db.createObjectStore(INDEXEDDB_OBJECT_NAME.IMAGES, { keyPath: 'id' });
      objectStore.createIndex('base64Image', 'base64Image', { unique: false });
    };
  });
};

export const saveImageToDB = (db: any, image: any) => {
  return new Promise((resolve: any, reject: any) => {
    const transaction = db.transaction([INDEXEDDB_OBJECT_NAME.IMAGES], 'readwrite');
    const objectStore = transaction.objectStore(INDEXEDDB_OBJECT_NAME.IMAGES);
    const request = objectStore.add(image);

    request.onsuccess = () => {
      resolve();
    };

    request.onerror = () => {
      reject('Error saving image to database.');
    };
  });
};

export const getImageFromDB = (db: any, imageId: any) => {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([INDEXEDDB_OBJECT_NAME.IMAGES], 'readonly');
    const objectStore = transaction.objectStore(INDEXEDDB_OBJECT_NAME.IMAGES);
    const request = objectStore.get(imageId);

    request.onsuccess = (event: any) => {
      const image = event.target.result;
      if (image) {
        resolve(image.base64Image);
      } else {
        reject('Image not found in database.');
      }
    };

    request.onerror = () => {
      reject('Error retrieving image from database.');
    };
  });
};

export const loadImage: any = async (id: any) => {
  try {
    const db = await openDB();
    const base64Image = await getImageFromDB(db, id);
    return base64Image;
  } catch (error) {
    console.log(error);
  }
};

export const getFullImage = async () => {
  const db = await openDB();
  const imageArray = await Promise.all(imageListName.map(async (key) => {
    try {
      const base64Image = await getImageFromDB(db, key);
      return { key, base64Image };
    } catch (error) {
      console.log(error);
      return { key, base64Image: '' };
    }
  }));

  return imageArray as IIndexedDbImage[] | []
}

export const clearObjectStore = async (objectStoreName: any) => {
  const db: any = await openDB();

  return new Promise((resolve: any, reject: any) => {
    const transaction = db.transaction([objectStoreName], 'readwrite');
    const objectStore = transaction.objectStore(objectStoreName);

    const clearRequest = objectStore.clear();

    clearRequest.onsuccess = () => {
      resolve();
    };

    clearRequest.onerror = () => {
      reject('Error clearing the object store');
    };
  });
};

export const clearAllDataImage = async () => {
  try {
    await clearObjectStore(INDEXEDDB_OBJECT_NAME.IMAGES);
  } catch (error) {
    console.log(error);
  }
};

export const getAllKeysFromObjectStore = async (objectStoreName: any) => {
  const db: any = await openDB();

  return new Promise((resolve: any, reject: any) => {
    const transaction = db.transaction([objectStoreName], 'readonly');
    const objectStore = transaction.objectStore(objectStoreName);
    const keys: any = [];

    const cursorRequest = objectStore.openCursor();

    cursorRequest.onsuccess = (event: any) => {
      const cursor = event.target.result;
      if (cursor) {
        keys.push(cursor.key);
        cursor.continue();
      } else {
        resolve(keys);
      }
    };

    cursorRequest.onerror = () => {
      reject('Error getting keys from the object store');
    };
  });
};

export const getObjectStoreKeys = async () => {
  try {
    const keys = await getAllKeysFromObjectStore(INDEXEDDB_OBJECT_NAME.IMAGES);
    return keys;
  } catch (error) {
    console.log(error);
  }
};
