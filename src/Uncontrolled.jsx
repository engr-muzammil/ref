import React, { useRef, useState } from "react";

const Uncontrolled = () => {
    const luckyName = useRef(null);
    const [show, setShow] = useState(false)
    const submitForm = (e) => {
        e.preventDefault();
        
        luckyName.current.value === "" ? alert("Fill Data first") : setShow(true);

    }
  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="luckyName">enter your luckyName</label>
          <input type="text" id="luckyName" ref={luckyName}/>
          <br />
          <button>Submit</button>
        </div>
      </form>
      <p>{show ? `your lucky name is ${luckyName.current.value}` : ``}</p>
    </div>
  );
};
export default Uncontrolled;
