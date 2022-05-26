import { useState } from "react";


export const Form = function (props) {
  const [show, setShow] = useState(true);

  const nextHandler = function () {
    setShow(show => !show);
  };
  return (<><form onSubmit={(e) => { props.submitHandler(e); nextHandler(); }}>

    <div className={show ? "" : "hide"}>
      <h2>Enter yor information</h2>
      <div className='inp'><label >Name:</label>
        <input type='text' name='name'></input></div>
      <div className='inp'> <label >Lastname:</label>
        <input type='text' name='lastname'></input></div>
      <div className='inp'> <label>Age</label>
        <input type='range' min="0" max="110" name='age'></input></div>
      <div className='inp'><label >Email:</label>
        <input type='email' name='email'></input></div>
      <div className='controls'><h3 className='btn' onClick={nextHandler}>next</h3></div>
    </div>
    <div className={show ? "hide" : ""}>
      <h2>Surprise question!</h2>
      <label >Favorite framework:</label>
      <select id="framework" name="framework" size="1">
        <option value="angular">Angular</option>
        <option value="react">React</option>
        <option value="vue">Vue</option>
        <option value="what">What is a framework?</option>
      </select>
      <div className='controls'><h3 className='btn' onClick={nextHandler}>back</h3> <button type='submit'><h3 className='btn'>submit</h3></button></div>

    </div>
  </form></>);
};