import React, { useState } from "react";
import { useAppDispatch } from "../../Hooks";
import { fetchWordDefinition } from "../features/dictionarySlice";

export const WordSearch: React.FC = () => {
  const [word, setWord] = useState("");
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    if (word.trim()) {
      dispatch(fetchWordDefinition(word.trim()));
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Enter a word"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
