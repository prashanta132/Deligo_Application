// pages/SearchLocation.js

import { useState } from 'react';

// CSS file
import styles from "styles/searchlocation.module.scss";

export default function SearchLocation() {
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleLocateMe = () => {
    // Your logic for retrieving the user's location from the map goes here
    // For simplicity, let's assume it returns a string representing the location
    
    const userLocation = 'New York City';
    setSelectedLocation(userLocation);
  };

  const handleExplore = () => {
    // Your logic for exploring the selected location goes here
    console.log(`Exploring location: ${selectedLocation}`);
  };

  return (
    <div className={styles.container}>
      <h1>Search Location</h1>
      <div className={styles.dropdown}>
        <button className={styles.locateButton} onClick={handleLocateMe}>
          Locate Me
        </button>
        {selectedLocation && (
          <div className={styles.selectedLocation}>
            Selected Location: {selectedLocation}
          </div>
        )}
      </div>
      <button className={styles.exploreButton} onClick={handleExplore}>
        Explore
      </button>
    </div>
  );
}
