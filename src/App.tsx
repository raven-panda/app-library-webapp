import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.body.classList.remove("no-transition");
  }, []);

  return (
    <></>
  );
}

export default App;
