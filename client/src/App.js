import './App.css';
import { useEffect, useState } from "react";
import { getUsers, sendUser, deleteUser } from "./server-client.js";
import { Form } from './components/form';
import { SubmittedForm } from './components/submitedForm';





function App () {
  const [show, setShow] = useState(true);
  const [users, setUsers] = useState([]);

  const submitHandler = function (event) {
    event.preventDefault();
    if (event.target.name.value !== '') {
      const { name, lastname, email, age, framework } = event.target;
      console.log('event.target :>> ', event.target);
      const userInput = { name: name.value, lastname: lastname.value, email: email.value, age: age.value, framework: framework.value };
      sendUser(userInput).then(newUser => setUsers((users) => [...users, newUser]));
      setShow(!show);
      event.target.reset();
    }
  };

  const handleClick = function (event) {
    deleteUser(event.target.value)
      .then(response => {
        console.log('response :>> ', response);
        if (response.deletedCount > 0) {
          setUsers(oldUsers => {
            return oldUsers.filter(oldUser => oldUser._id === event.target.value);
          });
        }
      });
  };


  const backHandler = function () {
    setShow(show => !show);
  };

  useEffect(() => {
    getUsers().then(users => setUsers(users));

  }, []);

  return (
    <div className='App'>
      <button onClick={backHandler}><h3 className='btn'>switch</h3></button>
      <div className={`${show ? "" : "hide"}`}>
        <Form submitHandler={submitHandler} />
      </div>
      <div className={`users ${show ? "hide" : "show"}`}>
        {users.map(user => < SubmittedForm key={user._id} user={user} handleClick={handleClick} />)}
      </div>
    </div>
  );
}


export default App;
