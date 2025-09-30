import React from "react";
import { useAppSelector } from "../../Hooks";

export const DefinitionDisplay: React.FC = () => {
  const { entries, loading, error } = useAppSelector(
    (state) => state.dictionary
  );

  if (loading === "pending") {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  return (
    <div className="display">
      {entries.map((entry, index) => (
        <article className="word-card" key={index}>
          <h2 className="word-title">
            {entry.word} <small>{entry.phonetic}</small>
          </h2>
          {entry.meanings.map((meaning, mIndex) => (
            <div className="meaning-card" key={mIndex}>
              <h3 className="part-of-speech">{meaning.partOfSpeech}</h3>
              {meaning.definitions.map((def, dIndex) => (
                <div className="definition-card" key={dIndex}>
                  <p>
                    <strong>Definition:</strong> {def.definition}
                  </p>
                  {def.example && (
                    <p className="example">
                      <em>Example: {def.example}</em>
                    </p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </article>
      ))}
    </div>
  );
};
