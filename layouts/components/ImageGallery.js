import React from 'react';
import styles from './ImageGallery.module.css';

const ImageGallery = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src="/images/image1.jpg" alt="Image 1" className={styles.image} />
      </div>
      <div className={styles.imageWrapper}>
        <img src="/images/image2.jpg" alt="Image 2" className={styles.image} />
      </div>
      <div className={styles.imageWrapper}>
        <img src="/images/image3.jpg" alt="Image 3" className={styles.image} />
      </div>
    </div>
  );
};

export default ImageGallery;
