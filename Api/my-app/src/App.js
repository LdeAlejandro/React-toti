import { StrictMode } from "react";
import CurrentUser from "./users/Loader";

function App() {
  return (

    <StrictMode>
    <div>
      <CurrentUser/>
    </div>
    </StrictMode>
  );
}

export default App;
