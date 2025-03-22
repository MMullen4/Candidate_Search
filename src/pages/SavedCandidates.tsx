import { useEffect, useState } from "react";
import type { Candidate } from "../interfaces/Candidate.interface";
import CandidateCard from "../components/CandidateCard";
// import SavedCandidate from '../components/savedCandidates'
// import "../index.css";

const SavedCandidates = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  // const navigate = useNavigate();

  // Load saved candidates from localStorage
  useEffect(() => {
    const loadSavedCandidates = () => {
      const saved = localStorage.getItem("savedCandidates");
      if (saved) {
        setCandidates(JSON.parse(saved));
      }
    };
    loadSavedCandidates();
  }, []);

  // Remove a candidate
  const removeCandidate = (candidateId: string | number) => {
    const updatedCandidates = candidates.filter(
      (candidate) => candidate.id !== candidateId
    );
    setCandidates(updatedCandidates);
    localStorage.setItem("savedCandidates", JSON.stringify(updatedCandidates));
  };

  return (
    <div className="saved-candidates">
      <h1>Saved Candidates</h1>
      {candidates.length === 0 ? (
        <p>No saved candidates</p>
      ) : (
        <ul className="candidates-list">
          {candidates.map((candidate) => (
            <li key={candidate.id} className="candidate-item">
              <CandidateCard
                resultingCandidate={candidate}
                selectCandidate={() => {}}
              />
              ,
              <div className="candidate-info">
                <span>{candidate.login}</span>
              </div>
              <div className="candidate-actions">
                <button
                  onClick={() =>
                    removeCandidate(candidate.id as string | number)
                  }
                  className="remove-button"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedCandidates;
