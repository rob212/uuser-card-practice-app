import styles from './AddUser.module.css'

const AddUser = props => {
  const addUserHandler = event => {
    event.preventDefault()
    console.log(event.target.value)
  }

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor='username'>Username</label>
      <input type='text' id='username'></input>
      <label htmlFor='age'>Age (Years)</label>
      <input type='number' id='age'></input>
      <button type='submit'>Add User</button>
    </form>
  )
}

export default AddUser
