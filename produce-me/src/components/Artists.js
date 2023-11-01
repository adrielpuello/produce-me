import React, { useState, useEffect } from 'react';

const Artists = () => {

    const [artists, setArtists] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
  
    useEffect(() => {
      const fetchArtists = async () => {
        const url = 'https://spotify23.p.rapidapi.com/artists/?ids=2w9zwq3AktTeYYMuhMjju8';
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '670a3c019bmsh2b4dab3762397e2p1f2edfjsn02b44e537738',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
          }
        };
  
        try {
          const response = await fetch(url, options);
          const data = await response.json();
  
          // Ensure the data is an array; if not, create an array with the data
          const artistArray = Array.isArray(data) ? data : [data];
  
          setArtists(artistArray);
        } catch (error) {
          console.error('Error fetching artists:', error);
        }
      };
  
      fetchArtists();
    }, []);
  
    // Ensure that artists is an array before filtering
    const filteredArtists = Array.isArray(artists) ? artists : [];
  
    return (
      <div className="section-content">
        <h1>Artists</h1>
        <input
          type="text"
          placeholder="Search for artists"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul>
            {filteredArtists.slice(0, 10).map((artist) => (
                <li key={artist.id} className="artist-item">
                <div>
                    <strong>Name:</strong> {artist.name}
                </div>
                <div>
                    <strong>Followers:</strong> {artist.followers}
                </div>
                <div>
                    <strong>Popularity:</strong> {artist.popularity}
                </div>
                <div>
                    <strong>Genres:</strong> {artist.genres && artist.genres.join(', ')}
                </div>
                </li>
            ))}
        </ul>
      </div>
    );
  }
    
export default Artists;