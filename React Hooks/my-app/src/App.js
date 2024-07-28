
import Counter from "./Counter";
import InputFocus from "./InputFocus";

function App() {
  return (
    <div>
      <hr />
      Counter component (useState exampled):
      <Counter initialCount = {1}/>
      <hr />
      Input focus component (useRef example);
      <InputFocus />
   
    </div>
  );
}

export default App;
