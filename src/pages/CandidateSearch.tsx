import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';

import '../../Assets/nav.css';

const CandidateSearch = () => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await searchGithub();
        const data = await response.json();
        setSearchResults(data);
        console.log(searchResults);
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };

    fetchCandidates();
  }, []);

  // const handleSearch = async () => {
  //   try {
  //     const response = await searchGithub();
  //     const data = await response.json();
  //     setSearchResults(data);
  //   } catch (error) {
  //     console.error('Error fetching candidates:', error);
  //   }
  // };
  return <h1>CandidateSearch</h1>;
};

export default CandidateSearch;
