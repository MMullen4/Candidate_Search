import { useState, useEffect } from "react";
import { searchGithubUser, searchGithub } from "../api/API";
import { Candidate } from '../interfaces/Candidate.interface';
import "../assets/nav.css";
import "../index.css";
// import CandidateCard from "../components/CandidateCard";

const CandidateSearch = () => {
  // create state var to store list of candidates
  const [searchResults, setSearchResults] = useState<Candidate[]>([]);
  // create state var to store search query

  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    id: null,
    login: null,
    avatar_url: null,
    name: null,
    bio: null,
    email: null,
    location: null,
    company: null,
    html_url: null,
  });
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    async function getUsers() {
      const data = await searchGithub();
      const user = await searchGithubUser(data[0].login);
      setCurrentCandidate(user);
      setSearchResults(data);
    }
    getUsers();
  }, []);

  async function getNextUser() {
    if (searchResults[currentIndex]?.login) {
      const user = await searchGithubUser(searchResults[currentIndex]?.login!);
      setCurrentCandidate(user);
      setCurrentIndex(currentIndex + 1);
    }
  }

  const saveCandidate = (candidate: Candidate) => {
    // Get existing saved candidates
    const savedCandidates = JSON.parse(
      localStorage.getItem("savedCandidates") || "[]"
    );
    // Add new candidate
    const updatedCandidates = [...savedCandidates, candidate];
    // Save to localStorage
    localStorage.setItem("savedCandidates", JSON.stringify(updatedCandidates));
  };

  return (
//     <div className="candidate-search">
//       <h1>Candidate Search</h1>
//       <section className="candidates-list">
//         <CandidateCard
//           // candidate={currentCandidate}
//           resultingCandidate={currentCandidate}
//           onSave={() => saveCandidate(currentCandidate)}
//           onNext={getNextUser}
//         />
//       </section>
//     </div>
//   );
// };

      <div className="candidate-search">
        <h1>Candidate Search</h1>
        <section className="candidates-list">
          <div className="candidate-info">
            <img
              src={currentCandidate?.avatar_url ?? ''}
              alt={`${currentCandidate?.login}'s avatar`}
              className="candidate-avatar"
            />
            <div className="candidate-details">
              <strong>{currentCandidate.login}</strong>
              {currentCandidate.name && <span> {currentCandidate.name}</span>}
              {currentCandidate.bio && <p>{currentCandidate.bio}</p>}
            </div>
          </div>
          <button
            onClick={() => saveCandidate(currentCandidate)}
            className="save-button"
          >
            Save Candidate
          </button>
          <button onClick={getNextUser} className="next-button">
            Next Candidate
          </button>
        </section>
      </div>
    );
  };

  export default CandidateSearch;
