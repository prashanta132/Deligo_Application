import React, { useState } from 'react';
import axios from 'axios';
import Geocode from 'react-geocode';
import Script from 'next/script';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-google-autocomplete';

const SearchLocation = () => {
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const { lat, lng } = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates({ lat, lng });
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.lat},${coordinates.lng}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
      );
      const address = response.data.results[0].formatted_address;
      setAddress(address);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Script
        strategy="beforeInteractive"
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
      />
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places...',
                className: 'w-full py-2 px-4 rounded-lg',
              })}
            />
            <div>
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? '#41b6e6' : '#fff',
                  cursor: 'pointer',
                  padding: '0.5rem',
                };
                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <button
        onClick={handleSearch}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
      >
        Search
      </button>
    </div>
  );
};

export default SearchLocation;
