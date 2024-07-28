import React, {useRef} from "react";

export default function InputFocus() {

    const inputEl = useRef();

    const onButtonClick = () =>{
        console.log(inputEl)
        inputEl.current.focus()

        console.log("Button clicked");
    }

    return (
        <div>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus on input</button>
        </div>
  )
}
