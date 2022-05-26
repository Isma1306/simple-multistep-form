


export function SubmittedForm ({ user, handleClick }) {

  return (<div className='user'>
    <div>Name: {user.name} Lastname: {user.lastname}</div>
    <div>Age: {user.age} Email: {user.email}</div>
    <div>Favorite Framework: {user.framework}</div>

    <h3 className='btn' onClick={(e) => handleClick(e)} value={user._id}>delete</h3>
  </div>);
}