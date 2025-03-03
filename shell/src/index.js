import React, { useEffect, useState } from "react";

const App = () => {
  const [Header, setHeader] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    import("header/Header")
      .then((mod) => setHeader(() => mod.default))
      .catch((err) => {
        console.error("Erreur lors du chargement du Header :", err);
        setError(true);
      });
  }, []);

  return (
    <div>
      {error ? <p>Erreur de chargement du Header.</p> : Header ? <Header /> : <p>Loading Header...</p>}
      <h1>Welcome to the Shell Application!</h1>
    </div>
  );
};

export default App;
