import { useState } from 'react';
import styles from 'styles/language.scss';

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className={styles.languageDropdown}>
      <label htmlFor="language">Select Language:</label>
      <select id="language" value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option value="Telugu">Telugu</option>
      </select>
      
    </div>
  );
};



export default LanguageDropdown;